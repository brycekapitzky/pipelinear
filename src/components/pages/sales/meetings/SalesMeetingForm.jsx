'use client'

import { Flex, Input, Spinner, Text, Textarea } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Field } from "@/components/ui/field"
import { Button } from '@/components/ui/button'

import SelectDropdown from '@/components/ui/select-dropdown'
import { get_all_prospect } from '@/app/api/prospects/actions'
import { get_all_vendor } from '@/app/api/vendors/actions'
import { add_meeting as add_meeting_action } from '@/app/api/meetings/actions'
import { useRouter } from 'next/navigation'

export default function SalesMeetingForm() {

	const [prospects, setProspects] = useState([])
	const [vendors, setVendors] = useState([])
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	useEffect(() => {
		fetchProspects()
		fetchVendors()
	}, [])

	const fetchProspects = async () => {
		const records = await get_all_prospect()
		setProspects(records)
	}

	const fetchVendors = async () => {
		const records = await get_all_vendor()
		setVendors(records)
	}

	const [meetingForm, setMeetingForm] = useState({
		meetings_client_id: '',
		meetings_appointment_date: '',
		meetings_prospect_id: '',
		meetings_notes: '',
		meetings_team: '',
		meetings_timezone: '',
		meetings_campaign: '',
		meetings_screenshot: '',
	})

	const teams = [
		{ label: 'Team 1', value: 'Team 1' },
		{ label: 'Team 2', value: 'Team 2' },
		{ label: 'Team 3', value: 'Team 3' }
	]

	const submitMeetingForm = async (ev) => {
		ev.preventDefault()
		setLoading(true)
		try {
			const res = await add_meeting_action({
				...meetingForm
			})
			console.info('res is ?? ', res)
			router.push( '/sales/meetings' )
			setLoading(false)
		} catch (err) {
			console.error('Error adding meeting: ', err)
		}
	}

	const convertImageToBase64 = (ev) => {
		const file = event.target.files[0]

		if (file) {
			const reader = new FileReader();


			reader.onload = function (e) {
				const base64String = e.target.result.split(',')[1];
				console.log(base64String);

				setMeetingForm({
					...meetingForm,
					meetings_screenshot: base64String
				})
			};

			reader.readAsDataURL(file);
		}
	}

	function formatToISO(dateString) {
		// Parse the date string into a Date object
		console.info( 'what is date str >>>> ', dateString )
		if ( dateString ) {
			const date = new Date(dateString);
	  
			// Check if the date is valid
			if (!isNaN(date.getTime())) {
			  // Format the date to the required format: yyyy-MM-ddThh:mm
			  const year = date.getFullYear();
			  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
			  const day = String(date.getDate()).padStart(2, '0');
			  const hours = String(date.getHours()).padStart(2, '0');
			  const minutes = String(date.getMinutes()).padStart(2, '0');
		  
			  // Return formatted date
			  return `${year}-${month}-${day}T${hours}:${minutes}`;
			} else {
			  throw new Error("Invalid date format");
			}
		}
		
	  }
	  

	return <Flex w={'100%'} flexDirection={'column'}>

		<form onSubmit={submitMeetingForm}>
			<Text fontSize={'xl'} fontWeight={'semibold'}> Create a new meeting </Text>
			<Flex flexDirection={{ base: "column", md: 'row' }} gap={2} mt={8} >
				<SelectDropdown
					collection={prospects}
					labelProp={'prospect_full_name'}
					valueProp={'prospect_id'}
					label={'Pick a prospect'}
					getSelectedChoice={e => setMeetingForm({ ...meetingForm, meetings_prospect_id: e?.value[0] })}
				/>

				<SelectDropdown
					collection={vendors}
					labelProp={'client_full_name'}
					valueProp={'client_id'}
					label={'Pick a vendor'}
					getSelectedChoice={e => setMeetingForm({ ...meetingForm, meetings_client_id: e?.value[0] })}
				/>

				<SelectDropdown
					label="Pick a team"
					collection={[
						{ label: 'Team 1', value: 'Team 1' },
						{ label: 'Team 2', value: 'Team 2' },
						{ label: 'Team 3', value: 'Team 3' }
					]}
					labelProp={'label'}
					valueProp={'value'}
					getSelectedChoice={e => setMeetingForm({ ...meetingForm, meetings_team: e?.value[0] })}
				/>
			</Flex>

			<Flex flexDirection={{ base: "column", md: 'row' }} mt={5} gap={2}>
				<Field label="Appointment Date" >
					<Input
						p={2}
						border="1px solid #c4c4c4"
						type='datetime-local'
						name='meetings_appointment_date'
						value={formatToISO( meetingForm?.meetings_appointment_date ) }
						onChange={e => setMeetingForm({ ...meetingForm, meetings_appointment_date: new Date( e.target.value ) })}
						placeholder='Enter appointment date' />
				</Field>
				<SelectDropdown
					label="Pick a Timezone"
					collection={[
						{ label: 'CST (GMT-6)', value: 'CST' },
						{ label: 'MST (GMT-7)', value: 'MST' },
						{ label: 'PST (GMT+8)', value: 'PST' },
						{ label: 'AST (GMT-9)', value: 'AST' },
						{ label: 'HAST (GMT-10)', value: 'HAST' }
					]}
					labelProp={'label'}
					valueProp={'value'}
					getSelectedChoice={e => setMeetingForm({ ...meetingForm, meetings_timezone: e?.value[0] })}
				/>
			</Flex>

			<Field label="Appointment calendar screenshot" mt={3}>
				<Input
					p={2}
					border="1px solid #c4c4c4"
					type='file'
					name='meetings_appointment_date'
					accept='image/*'
					onChange={e => convertImageToBase64(e)}
					placeholder='Enter appointment date' />
			</Field>

			<Flex flexDirection={{ base: "column", md: 'row' }} gap={2}>

				<SelectDropdown
					mt={5}
					label="Pick a campaign, Most frequently, the answeris '$279' "
					collection={[
						{ label: '279.00', value: '279' },
						{ label: '499.00', value: '499' },
					]}
					labelProp={'label'}
					valueProp={'value'}
					getSelectedChoice={e => setMeetingForm({ ...meetingForm, meetings_campaign: e?.value[0] })}
				/>
			</Flex>

			<Field
				mt={5}
				label="Enter additional notes"
			>
				<Textarea
					variant="outline"
					p={2}
					value={meetingForm?.meetings_notes}
					onChange={e => setMeetingForm({ ...meetingForm, meetings_notes: e.target.value })}
					placeholder='Enter notes'
					border="1px solid #c4c4c4"
				></Textarea>
			</Field>

			<Flex w={'100%'} justifyContent={'center'}>
				<Button
					mt={3}
					type='submit'
					w={'45%'}
					bgColor={loading ? 'gray.600' : 'black'}

				>{loading ? <> <Spinner /> Adding Meeting... </> : 'Add Meeting'}</Button>
			</Flex>
		</form>
	</Flex>
}
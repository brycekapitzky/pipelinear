'use client'

import { Flex, Input, Text, Textarea } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Field } from "@/components/ui/field"
import { Button } from '@/components/ui/button'

import SelectDropdown from '@/components/ui/select-dropdown'
import { get_all_prospect } from '@/app/api/prospects/actions'
import { get_all_vendor } from '@/app/api/vendors/actions'

export default function SalesMeetingForm() {

	const [prospects, setProspects] = useState([])
	const [vendors, setVendors] = useState([])

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
		meetings_feedback: '',
		meetings_booked_week: '',
		meetings_for: '',
		meetings_client_id: '',
		meetings_billed_date: null,
		meetings_prospect_id: '',
		meetings_notes: '',
		meetings_p499_incentive: '',
		meetings_team: '',
		meetings_campaign: ''
	})

	const teams = [
		{ label: 'Team 1', value: 'Team 1' },
		{ label: 'Team 2', value: 'Team 2' },
		{ label: 'Team 3', value: 'Team 3' }
	]

	return <Flex w={'100%'} flexDirection={'column'}>
		<Text fontSize={'xl'} fontWeight={'semibold'}> Create a new meeting </Text>
		<Flex flexDirection={'row'} gap={2} mt={8} >
			<SelectDropdown
				collection={prospects}
				labelProp={'prospect_full_name'}
				valueProp={'prospect_id'}
				label={'Pick a prospect'}
				getSelectedChoice={e => setMeetingForm({ ...meetingForm, meetings_prospect_id: e })}
			/>

			<SelectDropdown
				collection={vendors}
				labelProp={'client_full_name'}
				valueProp={'client_id'}
				label={'Pick a vendor'}
				getSelectedChoice={e => setMeetingForm({ ...meetingForm, meetings_client_id: e })}
			/>

			<SelectDropdown
				label="Pick a team"
				collection={[
					{ label: 'Team 1', value: 'Team 1' },
					{ label: 'Team 2', value: 'Team 2' },
					{ label: 'Team 3', value: 'Team 3' }
				] }
				labelProp={'label'}
				valueProp={'value'}
				getSelectedChoice={e => setMeetingForm({ ...meetingForm, meetings_team: e })}
			/>
		</Flex>

		<Flex flexDirection={'row'} gap={2}>
			<Field label="Book On/Week" mt={5}>
				<Input
					p={2}
					border="1px solid #c4c4c4"
					name='meetings_booked_week'
					value={meetingForm?.meetings_booked_week}
					onChange={e => setMeetingForm({ ...meetingForm, meetings_booked_week: e.target.value })}
					placeholder='Enter booking week #' />
			</Field>
			<Field label="Book For/Week" mt={5}>
				<Input
					p={2}
					border="1px solid #c4c4c4"
					name='meetings_booked_week'
					value={meetingForm?.meetings_booked_week}
					onChange={e => setMeetingForm({ ...meetingForm, meetings_booked_week: e.target.value })}
					placeholder='Enter booking week #' />
			</Field>
		</Flex>

		<Flex flexDirection={'row'} gap={2}>
			<Field label="BILLED DATE" mt={5}>
				<Input
					p={2}
					border="1px solid #c4c4c4"
					type='datetime-local'
					name='meetings_booked_week'
					value={meetingForm?.meetings_billed_date}
					onChange={e => setMeetingForm({ ...meetingForm, meetings_billed_date: e.target.value })}
					placeholder='Enter booking week #' />
			</Field>
			<Field label="BILLED WEEK" mt={5}>
				<Input
					p={2}
					border="1px solid #c4c4c4"
					name='meetings_billed_week'
					value={meetingForm?.meetings_booked_week}
					onChange={e => setMeetingForm({ ...meetingForm, meetings_booked_week: e.target.value })}
					placeholder='Enter booking week #' />
			</Field>
			<Field label="P4P499 Incentive" mt={5}>
				<Input
					p={2}
					border="1px solid #c4c4c4"
					name='meetings_billed_week'
					value={meetingForm?.meetings_p499_incentive}
					onChange={e => setMeetingForm({ ...meetingForm, meetings_p499_incentive: e.target.value })}
					placeholder='Enter P4P499 Incentive' />
			</Field>
		</Flex>

		<Flex flexDirection={'row'} gap={2}>
			<Field label="Enter campaign amount" mt={5}>
				<Input
					p={2}
					border="1px solid #c4c4c4"
					type='text'
					name='meetings_campaign'
					value={meetingForm?.meetings_campaign}
					onChange={e => setMeetingForm({ ...meetingForm, meetings_campaign: e.target.value })}
					placeholder='Enter campaign amount ' />
			</Field>
			<Field label="Enter your team name" mt={5}>
				<Input
					p={2}
					border="1px solid #c4c4c4"
					name='meetings_billed_week'
					value={meetingForm?.meetings_team}
					onChange={e => setMeetingForm({ ...meetingForm, meetings_team: e.target.value })}
					placeholder='Enter team name' />
			</Field>
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
				w={'45%'}
			> Add Meeting </Button>
		</Flex>


	</Flex>
}
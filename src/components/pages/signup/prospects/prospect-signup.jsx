'use client'

import Stepper from '@/components/ui/stepper'
import { useState } from 'react'
import { Field } from "@/components/ui/field"
import { Input, Flex, Box, Text, Textarea } from '@chakra-ui/react'
import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxList } from '@/components/ui/checkbox-list'

function PersonalDetailsForm() {
	return <>
		<Field label="What's your first name ?">
			<Input
				p={2}
				border="1px solid #c4c4c4"
				placeholder='Enter your first name' />
		</Field>

		<Field label="What's your last name ?" mt={5}>
			<Input
				p={2}
				border="1px solid #c4c4c4"
				placeholder='Enter your last name' />
		</Field>
	</>
}

function CompanyProfileForm() {
	return <>

		<Flex flexDirection={{ base: "column", md: "row" }} alignItems="end" gap={5} pt={5}>
			<Field label="What is your company name?">
				<Input
					p={2}
					border="1px solid #c4c4c4"
					placeholder='Enter your company name' />
			</Field>

			<Field label="What is your position in the company?">
				<Input
					p={2}
					border="1px solid #c4c4c4"
					placeholder='Enter your position' />
			</Field>
		</Flex>

		<Flex flexDirection={{ base: "column", md: "row" }} alignItems="end" gap={5} pt={5}>
			<Field label="What is your company website?">
				<Input
					p={2}
					border="1px solid #c4c4c4"
					placeholder='Enter your company website' />
			</Field>
			<Field label="How many full time, part time, and contractors work at your organization?" >
				<Input
					p={2}
					border="1px solid #c4c4c4"
					type='number'
					placeholder='Enter your # of employees' />
			</Field>
		</Flex>

		<Field label="What is your linkedin profile?" mt={5}>
			<Input
				p={2}
				border="1px solid #c4c4c4"
				placeholder='Enter your linkedin profile' />
		</Field>
	</>
}

function HyperVendorForm() {
	const [agreement, setAgreement] = useState(false)
	return <>
		<Box>
			<Text textAlign="justify">
				Please confirm that you’re okay with HyperVendor to send you text messages to coordinate meetings. We cannot complete your sign-up without a valid phone # to text.
				This also confirms we can reach out with a quick call to clarify any details.
			</Text>

			<Checkbox
				cursor="pointer"
				mt={3}
				onCheckedChange={({ checked }) => setAgreement(checked)}
			> Accept </Checkbox>
		</Box>

		{
			agreement ? <Box mt={5} pt={5} borderTopColor='gray.200' borderTopWidth={1}>

				<Field label="TEXTING: What is the best phone number to text you">
					<Input
						p={2}
						border="1px solid #c4c4c4"
						type='tel'
						placeholder='Enter your Phone number' />
				</Field>

				<CheckboxList
					mt={5}
					header="What type of company (services/products) do you want to have meetings with?"
					items={
						[
							{ label: "Growth Marketing agencies", value: "1" },
							{ label: "Recruiting and staffing firms", value: "2" },
							{ label: "Productivity software or consultants", value: "3" },
							{ label: "Software or SaaS companies", value: "4" },
							{ label: "Business growth software or consultants", value: "5" },
							{ label: "CRM, Outreach software or services", value: "6" },
							{ label: "Accounting and financial for taxes or cash flow growth", value: "7" },
							{ label: "General business consulting", value: "8" },
							{ label: "Other", value: "9" }
						]
					}
				/>

				<CheckboxList
					mt={5}
					header="How frequently would you like to have 30-min demo calls?"
					items={
						[
							{ label: "1 per week for $100 Amazon eCard", value: "1" },
							{ label: "2 per week for $200 Amaznon eCard", value: "2" },
							{ label: "3 per week for $300 Amazon eCard", value: "3" },
						]
					}
				/>

				<Field
					mt={5}
					label="Additional Notes"
				>
					<Textarea
						variant="outline"
						p={2}
						placeholder='Enter additional notes'
						border="1px solid #c4c4c4"
					></Textarea>
				</Field>
			</Box> : null
		}
	</>
}

export default function ProspectSignup() {
	const steps = [
		{ id: 1, label: "Personal Details", component: <PersonalDetailsForm /> },
		{ id: 2, label: "Company Profile", component: <CompanyProfileForm /> },
		{ id: 3, label: "Hyper Vendor", component: <HyperVendorForm /> },
	]
	return <Stepper steps={steps} />
}


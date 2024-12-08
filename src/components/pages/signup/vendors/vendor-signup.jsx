'use client'

import Stepper from '@/components/ui/stepper'
import { Text, Box, Input, Flex, Textarea } from '@chakra-ui/react'
import { CheckboxList } from '@/components/ui/checkbox-list'
import { RadioGroup } from '@/components/ui/radio-group'
import { Field } from "@/components/ui/field"

function InitialAgreementForm() {
	return <Box>
		<Text textAlign={'justify'}> {`1. Pipelinear operates a sales team that primarily prospects cold outreach sales channels.`} </Text>
		<Text textAlign={'justify'}> {`2. We ask prospects to have deep-dive 30-min interview with us in exchange for an incentive to learn ongoing initiatives.`} </Text>
		<Text textAlign={'justify'}> {`3. We book sales meetings with target market prospects that are buying what our client's offer`} </Text>
		<RadioGroup
			mt={3}
			orientation="horizontal"
			options={[
				{ label: "I accept", value: true },
				{ label: "I don't accept", value: false }
			]}
		/>
	</Box>

}

function CompanyDetailsForm() {
	return <>
		<Box>
			<Text textAlign={"justify"}> What would you like to sign up for? </Text>
			<RadioGroup
				mt={3}
				orientation="vertical"
				options={[
					{ label: "Vendor Referral List: $279/confirmed meeting", value: 279 },
					{ label: "Vendor Referral List: $499/confirmed meeting", value: 499 }
				]}
			/>
		</Box>

		<Field label="What is your full name?" mt={5}>
			<Input
				p={2}
				border="1px solid #c4c4c4"
				type='text'
				placeholder='Enter your full name' />
		</Field>

		<Flex flexDirection={{ base: "column", md: "row" }} alignItems={"end"} gap={5} mt={5}>
			<Field label="What is your company name?">
				<Input
					p={2}
					border="1px solid #c4c4c4"
					type='text'
					placeholder='Enter your company name' />
			</Field>

			<Field label="What is the email address of the main point-of-contact?">
				<Input
					p={2}
					border="1px solid #c4c4c4"
					type='text'
					placeholder='Enter email address' />
			</Field>
		</Flex>

		<Field label="What is the phone number of the main point-of-contact?" mt={5}>
			<Input
				p={2}
				border="1px solid #c4c4c4"
				type='tel'
				placeholder='(201) 555-0123' />
		</Field>

		<Flex flexDirection={{ base: "column", md: "row" }} alignItems={"end"} gap={5} mt={5}>
			<Field label="What is your linkedin profile?">
				<Input
					p={2}
					border="1px solid #c4c4c4"
					type='number'
					placeholder='Enter your linkedin profile' />
			</Field>
			<Field label="What is your company website?">
				<Input
					p={2}
					border="1px solid #c4c4c4"
					type='number'
					placeholder='Enter your company website' />
			</Field>
		</Flex>



	</>
}

function MarketingDetialsForm() {
	return <>


		<Field
			mt={5}
			label="What is your most compelling value proposition?"
		>
			<Textarea
				variant="outline"
				p={2}
				placeholder='Enter compelling value propositions'
				border="1px solid #c4c4c4"
			></Textarea>
		</Field>

		<Field
			mt={5}
			label="What is the industry that you target? Is it a hard requirement?"
		>
			<Textarea
				variant="outline"
				p={2}
				placeholder='Enter target industries'
				border="1px solid #c4c4c4"
			></Textarea>
		</Field>

		<CheckboxList
			mt={5}
			header={"What is your ideal target's company headcount ?"}
			items={
				[
					{ label: "1-10 headcount", value: "1" },
					{ label: "11-20 headcount", value: "2" },
					{ label: "21-50 headcount", value: "3" },
					{ label: "51-100 headcount", value: "4" },
					{ label: "101+ headcount", value: "5" }
				]
			}
		/>

		<Field
			mt={5}
			label="What are the job titles that our team should focus on?"
		>
			<Textarea
				variant="outline"
				p={2}
				placeholder='CEO, Founder, President, CMO, CTO, Director IT, etc.`'
				border="1px solid #c4c4c4"
			></Textarea>
		</Field>

		<Field label="What is the best Calendly link that we can use for this campaign?" mt={5}>
			<Input
				p={2}
				border="1px solid #c4c4c4"
				type='text'
				placeholder='A scheduling or Calendly link is required to work with us.' />
		</Field>

		<Field
			mt={5}
			label="Please specify other parameters you would like us to qualify upon prospecting"
		>
			<Textarea
				variant="outline"
				p={2}
				placeholder='We aim to accommodate your preferences but cannot guarantee adherence to all parameters due to service line specifics and resource constraints.'
				border="1px solid #c4c4c4"
			></Textarea>
		</Field>
	</>
}

function TermsAndPrivacy() {
	return <>
		<Text>
			Read the <span> Terms of Service </span> & <span> Privacy Policy </span>
		</Text>

		<RadioGroup
			mt={3}
			orientation="horizontal"
			options={[
				{ label: "I accept", value: true },
				{ label: "I don't accept", value: false }
			]}
		/>
	</>
}

function ExpectationAlignment() {
	return <>
		<Text textAlign={'justify'}>
			PipeLinear offers incentives like Amazon eGift cards to prospects to have a 30 minute interview about services company goals and purchasing processes.

			This information is maintained in a database until we find a vendor that closely fits what our prospect is looking for, prospects may be incentivized again for a meeting or other action.
		</Text>
		<RadioGroup
			mt={3}
			orientation="horizontal"
			options={[
				{ label: "I accept", value: true },
				{ label: "I don't accept", value: false }
			]}
		/>
	</>
}

export default function VendorSignup() {
	const steps = [
		{ id: 1, label: "Initial Agreement", component: <InitialAgreementForm /> },
		{ id: 2, label: "Company Profile", component: <CompanyDetailsForm /> },
		{ id: 3, label: "Market Profile", component: <MarketingDetialsForm /> },
		{ id: 4, label: "Terms of Service & Privacy Policy", component: <TermsAndPrivacy /> },
		{ id: 5, label: "Expectation Alignment", component: <ExpectationAlignment /> }

	]
	return <Stepper steps={steps} />
}
'use client';

import { Card, Input, Flex, Box, Grid, GridItem, Stack, Text, Image } from '@chakra-ui/react'
import { Field } from "@/components/ui/field"
import { Button } from '@/components/ui/button'
import { RiUserSharedLine, RiUserAddLine } from 'react-icons/ri'

import ProspectSignup from '@/components/pages/signup/prospects/prospect-signup';
import VendorSignUp from '@/components/pages/signup/vendors/vendor-signup';

export default function SignupForm({ user_type }) {

	const forms = {
		'prospects': [
			{ name: "first_name", label: "What is your first name?", placeholder: "Enter your first name", type: 'text' },
			{ name: "first_name", label: "What is your first name?", placeholder: "Enter your last name" },
			{ name: "company_name", label: "What is your company name?", placeholder: "Enter your company name" },
			{ name: "position", label: "What is your position in the company?", placeholder: "Enter your position" },
			{ name: "website", label: `What is your company website?`, placeholder: "Enter your company website", type: "url" },
			{ name: "linkedin", label: `What is your linkedin profile?`, placeholder: "Enter your linkedin profile", type: "url" },
			{ name: "employees", label: 'How many full time, part time, and contractors work at your organization?', placeholder: "Enter your # of employees", type: "number" },
			{ name: "email_address", label: 'What is the best email address to receive a calendar invite?', placeholder: "Enter your email address", type: "email" },
			// 2nd form state ( Hyper Vendor )
			{
				name: "hypervendor_agreement",
				label: `Please confirm that you’re okay with HyperVendor to send you text messages to coordinate meetings. We cannot complete your sign-up without a valid phone # to text.
This also confirms we can reach out with a quick call to clarify any details.`,
				type: "checkbox"
			},
			{
				name: "phone_number",
				label: "TEXTING: What is the best phone number to text you",
				note: "This information is never shared publicly. We deeply respect your privacy and you can opt-out at any time.",
				type: "phone",
				placeholder: "(201) 555-0123",
				// has a country picker at the left side
			},
			{
				name: "prospect_firms",
				label: "What type of company (services/products) do you want to have meetings with?",
				note: 'Ideally, the more the better! If you have other types of services that you are currently interested in learning more about, you can add on "Others"',
				type: 'select',
				choices: [
					{ label: "Growth Marketing agencies", value: "" },
					{ label: "Recruiting and staffing firms", value: "" },
					{ label: "Productivity software or consultants", value: "" },
					{ label: "Software or SaaS companies", value: "" },
					{ label: "Business growth software or consultants", value: "" },
					{ label: "CRM, Outreach software or services", value: "" },
					{ label: "Accounting and financial for taxes or cash flow growth", value: "" },
					{ label: "General business consulting", value: "" },
					{ label: "Other", value: "" }
				]
			},
			{
				name: "meeting_frequency",
				label: "How frequently would you like to have 30-min demo calls?",
				note: "This can be changed or adjusted at any time!",
				type: "select",
				choices: [
					{ label: "1 per week for $100 Amazon eCard", value: "" },
					{ label: "2 per week for $200 Amaznon eCard", value: "" },
					{ label: "3 per week for $300 Amazon eCard", value: "" },
				]
			}, {
				name: "notes",
				label: "Additional Notes",
				type: "textarea",
			}, {
				name: "Your Amazon eGift Card is sent at least within 24 hours after attending a meeting and is immediately available to redeem. \n t will be sent directly to your email address provided",
				type: "closing_message"
			}
		],
		"vendors": [
			{
				name: "agreement",
				label: `1. Pipelinear operates a sales team that primarily prospects cold outreach sales channels.

2. We ask prospects to have deep-dive 30-min interview with us in exchange for an incentive to learn ongoing initiatives.

3. We book sales meetings with target market prospects that are buying what our client's offer.This question is required.`,
				type: "checkbox list",
				choices: ['I accept',"I don't accept"]
			},
			{
				name: "signup reason",
				label: `What would you like to sign up for?`,
				type: "checkbox list",
				choices: ['Vendor Referral List: $279/confirmed meeting','Vendor Referral List: $499/confirmed meeting']
			},
			{
				name: "full_name",
				label: "What is your full name?",
				placeholder: "Enter your full name",
				type: 'text'
			},
			{ name: "company_name", label: "What is your company name?", placeholder: "Enter your company name" },
			{
				name: "email_address",
				label: "What is the email address of the main point-of-contact?",
				placeholder: "Enter email address",
				type: 'email'
			},
			{
				name: 'phone_number',
				label: "What is the phone number of the main point-of-contact",
				type: "phone",
				placeholder: "(201) 555-0123",
				// has a country picker at the left side
			},
			{
				name: "linkedin",
				label: `What is your linkedin profile?`,
				placeholder: "Enter your linkedin profile",
				type: "url"
			},
			{
				name: "website",
				label: `What is your company website?`,
				placeholder: "Enter your company website",
				type: "url"
			},
			{
				name: "meeting_count",
				label: `How many meetings are you expecting per month?`,
				placeholder: "Enter number of expected meeting",
				type: "number"
			},
			{
				name: "sevices_offer",
				label: "What are the services that you offer?",
				placeholder: "List out the services you offer",
				type: "textarea"
			},
			{
				name: "compeling_proposition",
				label: "What is your most compelling value proposition?",
				placeholder: "Enter compelling value proposition",
				type: "textarea"
			},
			{
				name: "target_market",
				label: "What is the industry that you target? Is it a hard requirement?",
				placeholder: "List out industries",
				type: "textarea"
			},
			{
				name: "company_headcount",
				label: "What is your ideal target's company headcount?",
				choices: [
					{ label: "1-10 headcount", value: "" },
					{ label: "11-20 headcount", value: "" },
					{ label: "21-50 headcount", value: "" },
					{ label: "51-100 headcount", value: "" },
					{ label: "101+ headcount", value: "" }
				]
			},
			{
				name: "job_title_target",
				label: "What are the job titles that our team should focus on?",
				note: "CEO, Founder, President, CMO, CTO, Director IT, etc.",
				type: "text"
			},
			{
				name: "calendly_link",
				label: "What is the best Calendly link that we can use for this campaign?",
				note: "A scheduling or Calendly link is required to work with us.",
				type: "url"
			},
			{
				name: "additional_parameters",
				label: "Please specify other parameters you would like us to qualify upon prospecting",
				type: "textarea",
				note: "We aim to accommodate your preferences but cannot guarantee adherence to all parameters due to service line specifics and resource constraints."
			},
			{
				name: "agreement",
				label: "After this form, you will be redirected to a payment link to submit payment details. There will also be an email follow-up with the subject line of the email will say: PipeLinear Onboarding Invoice. Once fulfilled, we will launch the campaign same day!",
				choices: [ 'I accept', "I don't accept" ]
			},
			{
				name: "Terms of service & privacy policy",
				choices: [ 'I accept', "I don't accept" ]
			},
			{
				name: "expectation_alignment",
				label: `PipeLinear offers incentives like Amazon eGift cards to prospects to have a 30 minute interview about services company goals and purchasing processes.

This information is maintained in a database until we find a vendor that closely fits what our prospect is looking for, prospects may be incentivized again for a meeting or other action.`,
				choices: [ 'I accept', "I don't accept" ],
				note: "PipeLinear always validates confirmed interest."
			},
		]
	}
	return (
		<Grid height="100vh">
			<GridItem>
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					height="100%">

					<Stack my={6}>
						<Image src="/images/pipelineaer_logo.png"
							alt="Example image"
							fit="contain"
							width={300}
						/>

						<Text textStyle="3xl" textAlign="center" fontWeight="bold" textTransform="capitalize"> {user_type} Sign Up</Text>
					</Stack>

					<Card.Root
						variant="elevated"
						borderRadius="2px"
						size="lg"
						w={{ base: "97%", md: "800px"}}
						mt={5}
					>
						<Card.Body gap={3} >
							{
								user_type == 'prospects' ? <ProspectSignup /> : <VendorSignUp />
							}

						</Card.Body>
					</Card.Root>
				</Flex>
			</GridItem>
		</Grid>

	)
}
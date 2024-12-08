'use client';

import { Card, Input, Flex, Box, Grid, GridItem, Stack, Text, Image } from '@chakra-ui/react'
import { Field } from "@/components/ui/field"
import { Button } from '@/components/ui/button'
import { RiUserSharedLine, RiUserAddLine } from 'react-icons/ri'

import ProspectSignup from '@/components/pages/signup/prospects/prospect-signup';

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
								user_type == 'prospects' ? <ProspectSignup /> : <Stack w="full" gap={6}>
									<Field label="What's your name ?">
										<Input
											p={2}
											border="1px solid #c4c4c4"
											placeholder='Enter your name' />
									</Field>
									<Field label="What's your email ?">
										<Input
											p={2}
											border="1px solid #c4c4c4"
											placeholder='Enter your email' />
									</Field>
									<Field label="What's your most compeling value proposition ?">
										<Input
											p={2}
											border="1px solid #c4c4c4"
											placeholder='Enter value proposition' />
									</Field>
									<Flex direction="row" gap={2}>
										<Flex flex={1}>
											<Button backgroundColor="black" w="100%" color="white" py={5} variant="subtle" fontSize="12px"> <RiUserSharedLine /> Login </Button>
										</Flex>
										<Flex flex={1}>
											<Button backgroundColor="black" w="100%" color="white" variant="subtle" fontSize="12px"> <RiUserAddLine /> Sign Up </Button>
										</Flex>
									</Flex>
								</Stack>
							}

						</Card.Body>
					</Card.Root>
				</Flex>
			</GridItem>
		</Grid>

	)
}
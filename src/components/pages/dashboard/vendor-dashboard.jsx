'use client'

import { Card, Box, Flex, Text, Input, Textarea, Button } from '@chakra-ui/react'
import { RadioGroup } from '@/components/ui/radio-group'
import { Field } from "@/components/ui/field"
import { CheckboxList } from '@/components/ui/checkbox-list'

export default function VendorDashboard() {

	const formData = {
		full_name: "Lloyd Kristoper Lim",
		signup_target_cost: 279,
		company: "Acme co.",
		email: "lloyd@acme.co",
		phone_number: "1234567890",
		linkedin_profile: "https://linkedin.lloyd.acme",
		company_website: "https://sample.site.com"
	}
	return (
		<Box w={'100%'}>
			<Card.Root
				variant={'elevated'}
				w={'100%'}
			>
				<Card.Body>
					<Flex>
						<Text fontSize={'2xl'}> Company Profile </Text>
					</Flex>

					<Flex mt={8}>
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
					</Flex>

					<Flex mt={5} gap={3}>
						<Field label="What is your full name?">
							<Input
								p={2}
								border="1px solid #c4c4c4"
								type='text'
								value={formData.full_name}
								placeholder='Enter your full name' />
						</Field>
						<Field label="What is your company name?">
							<Input
								p={2}
								border="1px solid #c4c4c4"
								type='text'
								value={formData.company}
								placeholder='Enter your company name' />
						</Field>
						<Field label="What is the email address of the main point-of-contact?">
							<Input
								p={2}
								border="1px solid #c4c4c4"
								type='text'
								value={formData.email}
								placeholder='Enter email address' />
						</Field>
					</Flex>

					<Flex mt={5} gap={3}>
						<Field label="What is the phone number of the main point-of-contact?">
							<Input
								p={2}
								border="1px solid #c4c4c4"
								type='tel'
								value={formData.phone_number}
								placeholder='(201) 555-0123' />
						</Field>
						<Field label="What is your linkedin profile?">
							<Input
								p={2}
								border="1px solid #c4c4c4"
								value={formData.linkedin_profile}
								type='text'
								placeholder='Enter your linkedin profile' />
						</Field>
						<Field label="What is your company website?">
							<Input
								p={2}
								border="1px solid #c4c4c4"
								value={formData.company_website}
								type='text'
								placeholder='Enter your company website' />
						</Field>
					</Flex>
				</Card.Body>
			</Card.Root>

			<Card.Root
				variant={'elevated'}
				w={'100%'}
				mt={5}
			>
				<Card.Body>
					<Flex>
						<Text fontSize={'2xl'}> Market Profile </Text>
					</Flex>

					<Flex mt={8} gap={5}>
						<Field
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
							label="What is the industry that you target? Is it a hard requirement?"
						>
							<Textarea
								variant="outline"
								p={2}
								placeholder='Enter target industries'
								border="1px solid #c4c4c4"
							></Textarea>
						</Field>
						<Field
							label="What are the job titles that our team should focus on?"
						>
							<Textarea
								variant="outline"
								p={2}
								placeholder='CEO, Founder, President, CMO, CTO, Director IT, etc.`'
								border="1px solid #c4c4c4"
							></Textarea>
						</Field>
					</Flex>

					<Flex mt={5}>
						<CheckboxList
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
					</Flex>

				</Card.Body>
			</Card.Root>

			<Flex mt={3} justifyContent={'center'} w="100%">
				<Button
					backgroundColor="black"
					px={10}
					color="white"
					variant="subtle"
					fontSize="12px">  Save Changes </Button>
			</Flex>
		</Box>
	)
}
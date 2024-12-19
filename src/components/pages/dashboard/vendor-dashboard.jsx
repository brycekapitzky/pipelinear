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
			Vendors Dashboard 
		</Box>
	)
}
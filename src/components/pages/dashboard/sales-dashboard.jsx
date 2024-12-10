'use client'

import HeaderBar from "@/components/ui/header-bar"
import { Flex, Box, Card, Text } from "@chakra-ui/react"
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLinkedin, FaBuilding  } from "react-icons/fa";
import { ResizableTable } from "@/components/ui/table";

export default function SalesManagerDashboard() {

	const prospects = [
		{
			id: 0,
			first_name: "sdfsdf",
			status: "Active",
			last_name: 'sdfsdf',
			full_name: 'sdfsdf  sdfsdfsdf',
			position: "VP of Sales Transformation",
			industry: 'Information Services',
			headcount: '30000',
			notes: `"As per sdfsdf, the sdfdsf's Asdfsdfdsf
Company email: 
sdfsdf.sdfsdg@nisdfsdf.com"`,
			pitched_campaign: `"sdfsdfsdf sdfsdf sdfC sdfsdf, sdgdfgdfgdfg sdfsdf sdf sdf sd
sdfdsgdfgdfgdfgdfg
asdasfdsfsdfdsf
dfgdfgdfg 
dfgdfgdfg
Csdfsdfsdf
Qsdfsdf "`,
			company_name: "sdfdsf",
			company_description: `"ssdf sdfs dfsdfsd fsfsdfsdfsdf f adfsdf 9sdfsdfsdfsdf sdf sdf sdfhsdfsdfsdfmore insdfdsft Nsdfdsfsdf."`,
			company_website: "https://nielseniq.com/global/en/",
			frequency: '3 per Week for $300 Amazon eCard',
			services: 'Training and Development, Manager Coaching, Sales Enablement',
			date_submitted: 'April 6, 2022',
			function: "Sales",
			timezone: 'EST',
			location: 'Boca Raton, Florida',
			linkedin_profile: "https://linkedin.profile.com",
			processed: 'checked',
			created: '6/2/2022',
			last_updated: '8/26/2024',
			onboarding_week: '23'
		},
	]

	for( let i = 0; i < 100 ; i ++ ) {
		prospects.push(
			{
			id: i + 1,
			first_name: "sdfsdf",
			status: "Active",
			last_name: 'sdfsdf',
			full_name: 'sdfsdf  sdfsdfsdf',
			position: "VP of Sales Transformation",
			industry: 'Information Services',
			headcount: '30000',
			notes: `"As per sdfsdf, the sdfdsf's Asdfsdfdsf
Company email: 
sdfsdf.sdfsdg@nisdfsdf.com"`,
			pitched_campaign: `"sdfsdfsdf sdfsdf sdfC sdfsdf, sdgdfgdfgdfg sdfsdf sdf sdf sd
sdfdsgdfgdfgdfgdfg
asdasfdsfsdfdsf
dfgdfgdfg 
dfgdfgdfg
Csdfsdfsdf
Qsdfsdf "`,
			company_name: "sdfdsf",
			company_description: `"ssdf sdfs dfsdfsd fsfsdfsdfsdf f adfsdf 9sdfsdfsdfsdf sdf sdf sdfhsdfsdfsdfmore insdfdsft Nsdfdsfsdf."`,
			company_website: "https://nielseniq.com/global/en/",
			frequency: '3 per Week for $300 Amazon eCard',
			services: 'Training and Development, Manager Coaching, Sales Enablement',
			date_submitted: 'April 6, 2022',
			function: "Sales",
			timezone: 'EST',
			location: 'Boca Raton, Florida',
			linkedin_profile: "https://linkedin.profile.com",
			processed: 'checked',
			created: '6/2/2022',
			last_updated: '8/26/2024',
			onboarding_week: '23'
			}
		)
	}
	return <Flex flexDirection={'column'} w={'100%'}>
		<HeaderBar
			header_items={
				[
					{ label: "Company", value: "company" },
					{ label: "Prospects", value: "prospects" },
					{ label: "Status", value: "status" },
					{ label: "Notes", value: "notes" },
				]
			}
		/>

		<Box mt={10}>
		<ResizableTable
				data={ prospects }
			/>
		</Box>
	</Flex>
}
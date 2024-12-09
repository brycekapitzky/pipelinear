'use client'

import HeaderBar from "@/components/ui/header-bar"
import { Flex, Box, Card, Text } from "@chakra-ui/react"
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLinkedin, FaBuilding  } from "react-icons/fa";
import { LuFactory } from "react-icons/lu";


export default function SalesManagerDashboard() {

	const prospects = [
		{
			id: 0,
			first_name: "Lloyd",
			company_name: "Acme Co.",
			position: "Developer",
			company_website: "https://google.com",
			employees_count: 25,
			linkedin_profile: "https://linkedin.profile.com",
			firms: [
				'Growth Marketing agencies',
				'General business consulting',
				'Software or SaaS companies'
			]
		}
	]

	for( let i = 0; i < 100 ; i ++ ) {
		prospects.push(
			{
				id: i + 1,
				first_name: "Lloyd",
				company_name: "Acme Co.",
				position: "Developer",
				company_website: "https://google.com",
				employees_count: 25,
				linkedin_profile: "https://linkedin.profile.com",
				firms: [
					'Growth Marketing agencies',
					'General business consulting',
					'Software or SaaS companies'
				]
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
			<Flex
				flexDirection={'row'}
				gap={5}
				flexWrap={'wrap'}>
				{
					prospects.map(prospect =>
						<SingleSalesCard
							key={prospect.id}
							first_name={prospect.first_name}
							company_website={prospect.company_website}
							company_name={prospect.company_name}
							position={prospect.position}
							employees_count={prospect.employees_count}
							linkedin_profile={prospect.linkedin_profile}
							firms={prospect.firms}
						/>
					)
				}
			</Flex>
		</Box>
	</Flex>
}

const SingleSalesCard = ({
	first_name,
	position,
	company_name,
	company_website,
	employees_count,
	linkedin_profile,
	firms = []
}) => {
	return <>
		<Card.Root
			variant="elevated"
			size={'lg'}
			width={'400px'}
			my={3}
			cursor={'pointer'}
		>
			<Card.Body>
				<Flex
					justifyContent={'space-between'}
					alignItems={'baseline'}
				>
					<Box>
						<Text
							fontWeight={'bold'}
							fontSize={'lg'}
						> {first_name} </Text>
						<Text
							fontWeight={'extralight'}
							fontSize={'xs'}
						>
							{company_name} | {position}
						</Text>
					</Box>
					<Box>
						<Text
							color={'blue.500'}
							cursor={'pointer'}
							fontSize={'xs'}> {company_website} </Text>
					</Box>
				</Flex>

				<Flex mt={5} flexDirection={'column'}>
					<Flex alignItems={'center'} fontSize={18}>
						<Box w={25}> <FaPeopleGroup /> </Box>
						<Text ml={2} w={'100%'} fontSize={15}> {employees_count} </Text>
					</Flex>
					<Flex fontSize={18}>
						<Box w={25}> <FaLinkedin /> </Box>
						<Text ml={2} w={'100%'} fontSize={15}> {linkedin_profile} </Text>
					</Flex>
					<Flex fontSize={18} >
						<Box w={25}> <FaBuilding /> </Box>
						<Text ml={2} w={'100%'} fontSize={15} > {firms.join(',')}</Text>
					</Flex>
				</Flex>
			</Card.Body>
		</Card.Root>
	</>
}
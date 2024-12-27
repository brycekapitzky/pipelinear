'use client'

import { Card, Box, Text, Flex, GridItem } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import { FaRegTimesCircle } from "react-icons/fa";
import { useState, useEffect } from 'react'

export default function ProspectsDashboard() {
	const proposals = [
		{ 
			id: 1,
			name: "Boolean",
			link: "Booleanic.com",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat porttitor tortor ornare dapibus. Vivamus porttitor nunc at odio dictum porta. Maecenas at cursus magna, sit amet elementum dui. Praesent efficitur metus id ornare convallis. Vivamus tincidunt tristique leo, mollis varius ex gravida et. Vivamus ac porttitor magna. Quisque nec molestie libero, at iaculis lorem. Curabitur euismod commodo ligula, sed accumsan tortor fermentum euismod. Aliquam pellentesque volutpat pretium. Pellentesque rutrum auctor nisl vitae vehicula. Mauris nec eros id augue viverra faucibus. Duis in maximus libero, et congue orci. Donec laoreet tortor ligula, eget pretium elit pulvinar sed. Sed et ligula tellus. Maecenas vehicula tortor luctus lacus consequat mollis. Sed posuere in nisi vel hendrerit",
			amount: 50,
			claim_type: "Amazon eGC",
			duration: {
				time: 30,
				unit: "mins"
			},
			medium: "Web Call"
		},
		{ 
			id: 2,
			name: "Sicks Digital",
			link: "SicksDigital.com",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat porttitor tortor ornare dapibus. Vivamus porttitor nunc at odio dictum porta. Maecenas at cursus magna, sit amet elementum dui. Praesent efficitur metus id ornare convallis. Vivamus tincidunt tristique leo, mollis varius ex gravida et. Vivamus ac porttitor magna. Quisque nec molestie libero, at iaculis lorem. Curabitur euismod commodo ligula, sed accumsan tortor fermentum euismod. Aliquam pellentesque volutpat pretium. Pellentesque rutrum auctor nisl vitae vehicula. Mauris nec eros id augue viverra faucibus. Duis in maximus libero, et congue orci. Donec laoreet tortor ligula, eget pretium elit pulvinar sed. Sed et ligula tellus. Maecenas vehicula tortor luctus lacus consequat mollis. Sed posuere in nisi vel hendrerit",
			amount: 230,
			claim_type: "Amazon eGC",
			duration: {
				time: 23,
				unit: "mins"
			},
			medium: "Web Call" },
		{
			id: 3,
			name: "Bright Vision",
			link: "BrightVission.com",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat porttitor tortor ornare dapibus. Vivamus porttitor nunc at odio dictum porta. Maecenas at cursus magna, sit amet elementum dui. Praesent efficitur metus id ornare convallis. Vivamus tincidunt tristique leo, mollis varius ex gravida et. Vivamus ac porttitor magna. Quisque nec molestie libero, at iaculis lorem. Curabitur euismod commodo ligula, sed accumsan tortor fermentum euismod. Aliquam pellentesque volutpat pretium. Pellentesque rutrum auctor nisl vitae vehicula. Mauris nec eros id augue viverra faucibus. Duis in maximus libero, et congue orci. Donec laoreet tortor ligula, eget pretium elit pulvinar sed. Sed et ligula tellus. Maecenas vehicula tortor luctus lacus consequat mollis. Sed posuere in nisi vel hendrerit",
			amount: 10,
			claim_type: "Steam gift card",
			duration: {
				time: 30,
				unit: "mins"
			},
			medium: "Skype Call" },
		{
			id: 4,
			name: "SkyLine Innovation",
			link: "SkyLineInnovations.com",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat porttitor tortor ornare dapibus. Vivamus porttitor nunc at odio dictum porta. Maecenas at cursus magna, sit amet elementum dui. Praesent efficitur metus id ornare convallis. Vivamus tincidunt tristique leo, mollis varius ex gravida et. Vivamus ac porttitor magna. Quisque nec molestie libero, at iaculis lorem. Curabitur euismod commodo ligula, sed accumsan tortor fermentum euismod. Aliquam pellentesque volutpat pretium. Pellentesque rutrum auctor nisl vitae vehicula. Mauris nec eros id augue viverra faucibus. Duis in maximus libero, et congue orci. Donec laoreet tortor ligula, eget pretium elit pulvinar sed. Sed et ligula tellus. Maecenas vehicula tortor luctus lacus consequat mollis. Sed posuere in nisi vel hendrerit",
			amount: 145,
			claim_type: "Starbucks gift card",
			duration: {
				time: 16,
				unit: "mins"
			},
			medium: "Zoom"}
	]
	
	const [ posts, setPosts ] = useState( [] )

	useEffect(() => {
		fetchAllPosts()
	}, [])

	const fetchAllPosts = async () => {
		const rec = await get_all_sales_post()
		
		setPosts( rec )
		console.info( rec )
	}

	return (
		<Box w='100%'>
			{
				posts.map( post =>
					<SingleProposal
						key={post.sales_post_id}
						link={post.clients.client_company_website}
						name={post.clients.client_company_name}
						description={post.clients.client_important_notes}
						amount={post.clients.client_}
					/>
				)
			}
			{
				proposals.map( proposal =>
					<SingleProposal 
						link={proposal.link}
						name={proposal.name}
						description={proposal.description}
						key={proposal.id}
						amount={proposal.amount}
						claim_type={proposal.claim_type}
						duration={proposal.duration}
						medium={proposal.medium}
					/>
				)
			}
		</Box>
	)
}

const SingleProposal = ({ name, link, description, amount, duration, claim_type, medium }) => {
	return (
		<Card.Root
			variant="elevated"
			w="100%"
			my={3}
		>
			<Card.Body>
				<Flex justifyContent={'space-between'}>
					<Box>
						<Text
							fontWeight={'bold'}
							fontSize={'lg'}
						> {name} </Text> </Box>
					<Box> 
						<Text
							color={'blue.500'}
							cursor={'pointer'}
							fontSize={'xs'}> {link} </Text>
					</Box>
				</Flex>

				<Box
					mt={5}
					lineClamp={4}
					textAlign={'justify'}
					fontSize={'sm'}
					color={'gray.600'}
				>
					{description}
				</Box>

				<Flex mt={4}>
					<Box>
						<Text
							fontSize={'xs'}
							fontWeight={'semibold'}
							fontStyle={'italic'}
							color={'gray.500'}
						>
							{amount} {claim_type} | {duration.time} {duration.unit} | via {medium}
						</Text>
					</Box>
				</Flex>

				<Flex mt={5} alignItems={'center'}>
					<Box>
						<Button
							variant="subtle"
							backgroundColor="green.600"
							color="white"
							size="xs"
							w={'120px'}
						> Submit Interest</Button>
					</Box>
					<Box color='red.500' fontSize={'2xl'} ml={1} cursor={'pointer'}>
						<FaRegTimesCircle />
					</Box>
				</Flex>
				
			</Card.Body>
		</Card.Root>
	)
}
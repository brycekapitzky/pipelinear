'use client';

import { Card, Input, Flex, Image, Grid, GridItem, Stack, Text, Box } from '@chakra-ui/react'
import { Field } from "@/components/ui/field"
import { Button } from '@/components/ui/button'
import { RiUserSharedLine , RiUserAddLine } from 'react-icons/ri'
import { useRouter } from 'next/navigation';

export default function LoginForm({ user_type }) {
	const router = useRouter()

	const gotoDashboard = () => {
		router.push( `/${user_type}`)
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
						<Text textStyle="3xl" textAlign="center" fontWeight="bold" textTransform="capitalize"> {user_type} Login</Text>
					</Stack>

					<Card.Root
						variant="elevated"
						borderRadius="2px"
						size="lg"
						w="450px"
						mt={5}
					>
						<Card.Body gap={3} >
							<Stack w="full" gap={6}>
								<Field label="What's your email ?">
									<Input
									 p={2}
									 border="1px solid #c4c4c4"
									 placeholder='Enter your email' />
								</Field>
								<Field label="What's your password?">
									<Input
									 p={2}
									 type='password'
									 border="1px solid #c4c4c4"
									 placeholder='Enter password' />
								</Field>
								<Flex direction="row" gap={2}>
									<Flex flex={1}>
										<Button
											backgroundColor="black"
											w="100%"
											onClick={() => gotoDashboard()}
											color="white"
											py={5}
											variant="subtle"
											fontSize="12px"
										> <RiUserSharedLine /> Login </Button>
									</Flex>
									<Flex flex={1}>
										<Button backgroundColor="black" w="100%" color="white" variant="subtle" fontSize="12px"> <RiUserAddLine /> Sign Up </Button>
									</Flex>
								</Flex>
							</Stack>
						</Card.Body>
					</Card.Root>
				</Flex>
			</GridItem>
		</Grid>
	)
}
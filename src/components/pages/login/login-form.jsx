'use client';

import { Card, Input, Flex, Image, Grid, GridItem, Stack, Text, Box, Spinner } from '@chakra-ui/react'
import { Field } from "@/components/ui/field"
import { Button } from '@/components/ui/button'
import { RiUserSharedLine, RiUserAddLine } from 'react-icons/ri'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login as login_action } from '@/app/api/auth/actions'
import { TiWarning } from "react-icons/ti"

export default function LoginForm({ user_type }) {
	const router = useRouter()
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: ""
	})
	const [loading, setLoading] = useState(false)
	const [errorMsg, setErrorMsg] = useState('')

	const gotoDashboard = () => {
		router.push(`/${user_type}`)
	}

	const loginAction = async (ev) => {
		ev.preventDefault()
		if (!loading) {
			setLoading(true)
			setErrorMsg("")
			try {
				const { email, password } = loginForm

				const { success, message } = await login_action(email, password, user_type)

				if (success) {
					router.push(`/${user_type}`)
				} else {
					console.info('error msg ? ', message)
					setLoading(false)
					setErrorMsg(message)
				}
			} catch (err) {
				console.info('error occured ', err)
			}
		}

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
						<form onSubmit={loginAction}>
							<Card.Body gap={3} >
								<Stack w="full" gap={6}>
									<Field label="What's your email ?">
										<Input
											p={2}
											onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
											value={loginForm?.email}
											border="1px solid #c4c4c4"
											placeholder='Enter your email' />
									</Field>
									<Field label="What's your password?">
										<Input
											p={2}
											type='password'
											onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
											value={loginForm?.password}
											border="1px solid #c4c4c4"
											placeholder='Enter password' />
									</Field>
									{
										errorMsg ?
											<Flex
												textAlign={'center'}
												bgColor={'red.500'}
												justifyContent={'center'}
												alignItems={'center'}
												borderRadius={3}
												py={2}
												color={'white'}
												>
												<TiWarning /> <Text ml={2}> {errorMsg} </Text>
											</Flex> : null
									}
									<Flex direction="row" gap={2}>
										<Flex flex={1}>
											<Button
												backgroundColor="black"
												w="100%"
												bgColor={loading ? 'gray.600' : 'black'}
												color="white"
												py={5}
												type="submit"
												variant="subtle"
												fontSize="12px"
											>
												{
													loading ? <> <Spinner /> Logging in... </> : <> <RiUserSharedLine /> Login </>
												}

											</Button>
										</Flex>
										<Flex flex={1}>
											<Button backgroundColor="black" w="100%" color="white" variant="subtle" fontSize="12px"> <RiUserAddLine /> Sign Up </Button>
										</Flex>
									</Flex>
								</Stack>
							</Card.Body>
						</form>

					</Card.Root>
				</Flex>
			</GridItem>
		</Grid>
	)
}
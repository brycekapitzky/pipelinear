'use client'

import React, { ReactNode } from 'react'
import {
	IconButton,
	Box,
	Image,
	Flex,
	Icon,
	Text,
	Drawer,
	useDisclosure,
} from '@chakra-ui/react'

import {
	FaHome,
	FaServer,
	FaUser,
	FaHandshake,
	FaMoneyBillWave,
	FaListUl,
	FaStore,
	FaUsers,
	FaRegNewspaper,
} from 'react-icons/fa'

import {
	MdOutlineNewspaper,
	MdOutlineAccessTime
} from "react-icons/md";

import {
	LuUserCog
} from 'react-icons/lu'

const LinkItems =
	{
		'vendors': [
			{ name: 'Home', icon: FaHome },
			{ name: 'Database', icon: FaServer },
			{ name: 'Profile', icon: FaUser },
			{ name: 'Team', icon: FaUsers },
			{ name: 'Billing', icon: FaMoneyBillWave },
			{ name: 'Referrals', icon: FaHandshake },
		],
		'prospects': [
			{ name: 'Home', icon: FaHome },
			{ name: 'Vendors', icon: FaStore },
			{ name: 'Proposals', icon: FaRegNewspaper },
			{ name: 'Referrals', icon: FaHandshake },
		],
		'sales_manager': [
			{ name: 'Proposal Manager', icon: FaHome },
			{ name: 'Vendors', icon: FaStore },
			{ name: 'Prospects', icon: FaRegNewspaper },
			{ name: 'Meetings', icon: MdOutlineAccessTime },
			{ name: 'Onboarding', icon: FaHome },
			{ name: 'Posts', icon: MdOutlineNewspaper },
		]
	}

export default function SimpleSidebar({ children, user_type }) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	console.info( LinkItems)
	return (
		<Box minH="100vh" bg="gray.100">
			<SidebarContent
				user_type={user_type}
				onClose={() => onClose} display={{ base: 'none', md: 'block' }}
			/>

			<Drawer.Root
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full">
				<Drawer.Content>
					<SidebarContent user_type={user_type} onClose={onClose} />
				</Drawer.Content>
			</Drawer.Root>
			<MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
			<Box ml={{ base: 0, md: 60 }} p={4} >
				<Header />
				<Flex p={3} mx={4}>
					{children}
				</Flex>
			</Box>
		</Box>
	)
}

const Header = () => {
	return (
		<Flex
			w="100%"
			p={4}
			alignItems="center"
			justifyContent="space-between">
			<Box m={3}>
				<Image
					src="/images/pipelineaer_logo.png"
					alt="Example image"
					fit="contain"
					width={150}
				/>
			</Box>
			<Box fontSize={30} cursor={'pointer'}>
				<LuUserCog />
			</Box>
		</Flex>
	)
}

const SidebarContent = ({ onClose, user_type, ...rest }) => {
	return (
		<Box
			bg={'white'}

			borderRight="1px"
			borderRightColor={'gray.700'}
			w={{ base: 'full', md: 60 }}
			pos="fixed"
			h="full"
			{...rest}>
			{LinkItems[user_type].map((link) => (
				<NavItem key={link.name}>
					<Box mr={4}> {link.icon()} </Box>
					<Text> {link.name} </Text>
				</NavItem>
			))}
		</Box>
	)
}

const NavItem = ({ children }) => {
	return (
		<Box
			as="a"
			href="#"
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}>
			<Flex
				align="center"
				p="3"
				mx="4"
				mt={3}
				borderRadius="lg"
				borderColor={"gray.200"}
				borderWidth={2}
				role="group"
				cursor="pointer"
				_hover={{
					bg: 'gray.200',
				}}
			>
				{children}
			</Flex>
		</Box>
	)
}


const MobileNav = ({ onOpen, ...rest }) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 24 }}
			height="20"
			alignItems="center"
			bg={('white', 'gray.900')}
			borderBottomWidth="1px"
			borderBottomColor={'gray.200'}
			justifyContent="flex-start"
			{...rest}>
			<IconButton
				variant="outline"
				onClick={onOpen}
				aria-label="open menu"
				icon={<FaListUl />}
			/>

			<Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
				Logo
			</Text>
		</Flex>
	)
}
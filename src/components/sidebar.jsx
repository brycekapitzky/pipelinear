'use client'

import React, { ReactNode, useState } from 'react'
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
import { Modal } from "@/components/ui/modal"

import {
	MdOutlineNewspaper,
	MdOutlineAccessTime
} from "react-icons/md";

import { GrLogout } from "react-icons/gr"
import { signout as signout_action } from '@/app/api/auth/actions'
import { useRouter, usePathname } from 'next/navigation';

const LinkItems =
{
	'vendors': [
		{ name: 'Home', icon: FaHome, url: '/vendors' },
		{ name: 'Database', icon: FaServer, url: '/vendors/databases' },
		{ name: 'Profile', icon: FaUser, url: '/vendors/profile' },
		{ name: 'Team', icon: FaUsers, url: '/vendors/team' },
		{ name: 'Billing', icon: FaMoneyBillWave, url: '/vendors/billing' },
		{ name: 'Referrals', icon: FaHandshake, url: '/vendors/referrals' },
	],
	'prospects': [
		{ name: 'Home', icon: FaHome, url: '/prospects' },
		{ name: 'Vendors', icon: FaStore, url: '/prospects/vendors' },
		{ name: 'Proposals', icon: FaRegNewspaper, url: '/prospects/proposals' },
		{ name: 'Referrals', icon: FaHandshake, url: "/prospects/referrals" },
	],
	'sales_manager': [
		{ name: 'Proposal Manager', icon: FaHome, url: '/sales' },
		{ name: 'Vendors', icon: FaStore, url: '/sales/vendors' },
		{ name: 'Prospects', icon: FaRegNewspaper, url: '/sales/prospects' },
		{ name: 'Meetings', icon: MdOutlineAccessTime, url: '/sales/meetings' },
		{ name: 'Onboarding', icon: FaHome, url: '/sales/onboarding' },
		{ name: 'Posts', icon: MdOutlineNewspaper, url: '/sales/posts' },
	]
}

export default function SimpleSidebar({ children, username, user_type }) {
	const { isOpen, onOpen, onClose } = useDisclosure()

	console.info(LinkItems)
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
				<Header username={username} />
				<Flex p={3} mx={4}>
					{children}
				</Flex>
			</Box>
		</Box>
	)
}


const Header = ({ username }) => {
	const [ openLogoutModal, setOpenLogoutModal ] = useState()
	const router = useRouter()

	const logout =  async () => {
		await signout_action()
		router.push( '/login' )
	}

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
			<Flex fontSize={20} cursor={'pointer'} alignItems={'center'} onClick={() => setOpenLogoutModal(true)}>
				<Text mr={2}> {username || "User"}</Text>
				<GrLogout size={'25'} ml={2} />
			</Flex>

			<Modal
				toggleModal={openLogoutModal}
				getModalState={e => setOpenLogoutModal(e)}
				onSubmit={logout}
				submitText="Logout"
				title={`Logging out`}
			>
				<Text> Are you sure to sign off ?</Text>
			</Modal>

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
				<NavItem key={link.name} link={link.url}>
					<Box mr={4}> {link.icon()} </Box>
					<Text> {link.name} </Text>
				</NavItem>
			))}
		</Box>
	)
}

const NavItem = ({ link, children }) => {
	const router = useRouter()
	const pathname = usePathname()

	const gotoLink = (link) => {
		router.push(link)
	}

	return (
		<Box
			onClick={() => gotoLink(link)}
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}>
			<Flex
				align="center"
				p="3"
				mx="4"
				mt={3}
				borderRadius="lg"
				borderColor={"gray.200"}
				bgColor={pathname == link ? 'black' : 'white'}
				color={pathname == link ? 'white' : 'black'}
				borderWidth={2}
				role="group"
				cursor="pointer"
				_hover={{
					bg: pathname == link ? 'gray.800' : 'gray.200',
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
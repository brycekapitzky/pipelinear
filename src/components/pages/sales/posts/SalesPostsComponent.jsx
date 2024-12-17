'use client'
import { Flex, Text } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import { FaPlusCircle } from "react-icons/fa";

export default function SalesPostsComponent() {
	const posts = [
		
	]
	return <Flex w={'100%'}>

		<Flex
			flexDirection={'row'}
			alignItems={'center'}
			w={'100%'}
			justifyContent={'space-between'}
			>
			<Text fontSize={20}> Sales Posts </Text>
			<Button> <FaPlusCircle /> Add </Button>
		</Flex>

		<Flex>

		</Flex>
	</Flex>
}

function SalesPost () {

}
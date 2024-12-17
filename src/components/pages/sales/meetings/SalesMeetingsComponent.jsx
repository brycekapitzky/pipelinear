'use client'
import { Flex, Text } from "@chakra-ui/react"
import { ResizableTable } from "@/components/ui/table"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FaPlusCircle } from "react-icons/fa"
import { useRouter } from "next/navigation"

export default function SalesMeetingsComponent() {
	const router = useRouter()

	return <Flex mt={10} flexDirection={'column'} w={'100%'}>
		<Flex
			flexDirection={'row'}
			alignItems={'center'}
			w={'100%'}
			justifyContent={'space-between'}
		>
			<Text fontSize={20}> Meetings </Text>
			<Button onClick={() => router.push( '/meetings/add' )}> <FaPlusCircle /> Add </Button>
		</Flex>


		<ResizableTable
			mt={3}
			columns={
				[
					{ label: "", value: "" }
				]
			}
		/>
	</Flex>
}
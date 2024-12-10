'use client'

import { ResizableTable } from "@/components/ui/table";
import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { get_all_prospect } from "@/app/api/prospects/actions";

export default function SalesProspects() {
	const [prospects, setProspects] = useState([])

	useEffect(() => {
		get_all_prospect().then(e => setProspects(e))
	}, [])

	return <Flex mt={10} flexDirection={'column'} w={'100%'}>
		<ResizableTable
			columns2={
				[
					{ label: "First Name", value: 'prospect_first_name' },
					{ label: "Last Name", value: 'prospect_last_name' },
					{ label: "Full Name", value: 'prospect_first_name' },
					{ label: "Job title", value: 'prospect_job_title' },
				]
			}
			data={prospects}
		/>
	</Flex>
}
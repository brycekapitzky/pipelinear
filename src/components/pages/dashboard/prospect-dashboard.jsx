'use client'

import { Card, Box, Text, Grid, GridItem } from '@chakra-ui/react'

export default function ProspectsDashboard() {
	const proposals = [
		{ id: 1, title: "Example Proposal 1" },
		{ id: 2, title: "Example Proposal 2" },
		{ id: 3, title: "Example Proposal 3" },
		{ id: 4, title: "Example Proposal 4" }
	]
	return (
		<Box w='100%'>
			{
				proposals.map(proposal => <SingleProposal title={proposal.title} key={proposal.id} />)
			}
		</Box>
	)
}

const SingleProposal = ({ title }) => {
	return (
		<Card.Root
			variant="elevated"
			w="100%"
			my={3}
		>
			<Card.Body>
				<Text textAlign="center"> {title} </Text>
			</Card.Body>
		</Card.Root>
	)
}
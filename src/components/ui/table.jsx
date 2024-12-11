import React, { useState } from "react";
import { Table, Button, Box, HStack, Flex, Text } from "@chakra-ui/react";

export const ResizableTable = ({ data = [], columns = [] }) => {
	const [currentPage, setCurrentPage] = useState(1); // Current page
	const [rowsPerPage, setRowsPerPage] = useState(15); // Rows per page

	// Calculate pagination details
	const totalPages = Math.ceil(data.length / rowsPerPage);
	const startIndex = (currentPage - 1) * rowsPerPage;
	const currentData = data.slice(startIndex, startIndex + rowsPerPage);

	// Handlers
	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	return (
		<Box>
			{
				data.length == 0 || columns.length == 0 ? 'Empty Records' :
					<>
						<Table.ScrollArea borderWidth="1px" maxW="100%">
							<Table.Root size="sm" variant="outline" showColumnBorder>
								<Table.Header>
									<Table.Row>
										{columns.map((column, index) => (
											<Table.ColumnHeader
												key={index}
												textTransform={'capitalize'}
												minW="100px">
												{column.label}
											</Table.ColumnHeader>
										))}
									</Table.Row>
								</Table.Header>
								<Table.Body>
									{currentData.map((item, rowIndex) => (
										<Table.Row key={rowIndex}>
											{columns.map((column, index) => (
												<Table.Cell key={index}>
													{
														typeof item[column.value] == 'object' ? new Date(item[column.value]).toLocaleString(): item[column.value]
														
													}
												</Table.Cell>
											))}
										</Table.Row>
									))}
								</Table.Body>
							</Table.Root>
						</Table.ScrollArea>

						{/* Pagination Controls */}
						<Flex justifyContent="center" w='100%'>
							<HStack mt={3}>
								{/* Previous Button */}
								<Button
									onClick={() => handlePageChange(currentPage - 1)}
									disabled={currentPage === 1} // Disable when on the first page
								>
									Previous
								</Button>
								<Text>
									Page {currentPage} of {totalPages}
								</Text>
								{/* Next Button */}
								<Button
									onClick={() => handlePageChange(currentPage + 1)}
									disabled={currentPage === totalPages} // Disable when on the last page
								>
									Next
								</Button>
							</HStack>
						</Flex>
					</>
			}


		</Box>
	);
};

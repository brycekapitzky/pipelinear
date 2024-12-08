import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress"

const Stepper = ({
	children,
	steps = [
		{ id: 1, label: "Step 1", description: "Step 1 Description", component: <> step 1 content </> },
		{ id: 2, label: "Step 2", description: "Step 2 Description", component: <> step 2 content </>  },
		{ id: 3, label: "Step 3", description: "Step 3 Description", component: <> step 3 content </>  },
	]
}) => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleNext = () => {
		if (currentStep < steps.length) {
			setCurrentStep((prevStep) => prevStep + 1);
		}
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep((prevStep) => prevStep - 1);
		}
	};

	return (
		<Box
			width="100%"
			mx={{ base: "unset", md: "unset"}}
			p={{ base: 0, md: 5 }}>
			{/* Stepper Header */}


			<Flex flexDirection={{ base: "row", md: "column" }}>
				<Flex flexDirection={{ base: "column", md: 'row' }} mr={{ base: 2 , md: 0 }}>
					{steps.map((step) => (
						<Box key={step.id} w="100%">
							<Text
								fontWeight="bold"
								mb={{ base: 8 , md: 0 }}
								fontSize={{ base: 'xs', md: "sm" }}
								textAlign={{ base: "start", md: "center" }}
								color={step.id <= currentStep ? "teal.500" : "gray.500"}
							>
								{step.label}
							</Text>
							<Text
								fontSize="sm"
								color={step.id <= currentStep ? "teal.300" : "gray.400"}
							>
								{step.description}
							</Text>
						</Box>
					))}


				</Flex>
				{/* Stepper Progress */}
				<Flex w="100%" flexDirection="row" ml={{ base: 0, md: 2 }}>
					<ProgressRoot
						value={(currentStep / steps.length) * 100}
						striped
						animated
						variant="outline"
						colorPalette="teal"
						maxW="100%">
						<ProgressBar />
					</ProgressRoot>
					{/* Stepper Content */}
					<Box w="100%" my={{ base: 0, md: 8 }} p={5} borderWidth="1px" borderRadius="md">
						{ steps[ currentStep - 1].component }
					</Box>
				</Flex>
			</Flex>

			{/* Stepper Navigation */}
			<Flex justify="space-between">
				<Button
					onClick={handleBack}
					isDisabled={currentStep === 1}
					colorScheme="gray"
				>
					Back
				</Button>
				<Button
					onClick={handleNext}
					isDisabled={currentStep === steps.length}
					colorScheme="teal"
				>
					{currentStep === steps.length ? "Finish" : "Next"}
				</Button>
			</Flex>
		</Box>
	);
};

export default Stepper;

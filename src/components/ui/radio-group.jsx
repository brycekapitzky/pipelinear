import { Flex } from "@chakra-ui/react"
import { Radio, RadioGroup as ComponentRadioGroup } from "@/components/ui/radio"

export const RadioGroup = ({ defaultValue, options, orientation = "horizontal", ...rest }) => {
	return (
		<ComponentRadioGroup defaultValue={defaultValue} {...rest}>
			{
				<Flex gap={6} alignItems={'start'} flexDirection={{ base: "column", md: "row"}}>
					{
						options.map(option =>
							<Radio
								key={option.value}
								value={option.value}> {option.label} </Radio>
						)
					}
				</Flex>
			}
		</ComponentRadioGroup>
	)
}
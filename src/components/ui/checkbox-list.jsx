import { CheckboxGroup, Fieldset } from "@chakra-ui/react"
import { Checkbox } from "@/components/ui/checkbox"
import { useState, useEffect } from "react"

export const CheckboxList = ({ items, header, getSelectedChoices, ...rest }) => {
	const [checkedItems, setCheckedItems] = useState([]);

	useEffect(() => {
		if ( getSelectedChoices ) {
			getSelectedChoices( checkedItems )
		}
	}, [checkedItems])

	const handleCheckboxChange = (e, value) => {
		if (e.target.checked) {
			setCheckedItems((prev) => [...prev, value]);
		} else {
			setCheckedItems((prev) => prev.filter((item) => item !== value));
		}
	};

	return (
		<Fieldset.Root {...rest}>
			<CheckboxGroup
				name="framework">

				<Fieldset.Legend fontSize="sm" mb="2">
					{header}
				</Fieldset.Legend>
				<Fieldset.Content>
					{
						items.map(item =>
							<Checkbox
								key={item.value}
								cursor="pointer"
								onChange={(e) => handleCheckboxChange(e, item.value)}
								value={item.value}> {item.label} </Checkbox>)
					}
				</Fieldset.Content>
			</CheckboxGroup>
		</Fieldset.Root>
	)
}
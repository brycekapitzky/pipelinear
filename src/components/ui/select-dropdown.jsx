import {
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from "@/components/ui/select"
import { createListCollection } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function SelectDropdown({ collection, label, getSelectedChoice, labelProp, valueProp, placeholder = "Select a choice", ...rest }) {
	const [selectedChoice, setSelectedChoice] = useState()

	const collections_mappable = createListCollection({ items: collection.map( c => {
		return { label: c[labelProp], value: c[valueProp] }
	}) } )

	useEffect(() => {
		if (getSelectedChoice) {
			getSelectedChoice(selectedChoice)
		}
	}, [selectedChoice])

	return <SelectRoot
		value={selectedChoice}
		onValueChange={e => setSelectedChoice(e)}
		collection={collections_mappable}
		{...rest}
	>
		<SelectLabel>{label}</SelectLabel>
		<SelectTrigger>
			<SelectValueText placeholder={placeholder} />
		</SelectTrigger>
		<SelectContent>
			{collections_mappable.items.map((item) => (
				<SelectItem item={item.value} key={item.value} value={item.value}>
					{item.label}
				</SelectItem>
			))}
		</SelectContent>
	</SelectRoot>
}
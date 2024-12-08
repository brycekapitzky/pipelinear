import { CheckboxGroup, Fieldset } from "@chakra-ui/react"
import { Checkbox } from "@/components/ui/checkbox"

export const CheckboxList = ({ items, header, ...rest }) => {
  return (
    <Fieldset.Root {...rest}>
      <CheckboxGroup
        name="framework">

        <Fieldset.Legend fontSize="sm" mb="2">
          {header}
        </Fieldset.Legend>
        <Fieldset.Content>
            {
                items.map( item =>
                    <Checkbox
                        key={item.value}
                        cursor="pointer"
                        value={item.value}> {item.label} </Checkbox>)
            }
        </Fieldset.Content>
      </CheckboxGroup>
    </Fieldset.Root>
  )
}
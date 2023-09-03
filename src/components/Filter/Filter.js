import { Wrapper, TextInput } from "./Filter.styled";

export const Filter = ({onChangeFilter}) => {
    return (
        <Wrapper>
             <label>Find contacts by name</label>
             <TextInput
                type="text"
                name="Findname"
                onChange={evt=>onChangeFilter(evt.target.value)}
            />
        </Wrapper>
    )
}
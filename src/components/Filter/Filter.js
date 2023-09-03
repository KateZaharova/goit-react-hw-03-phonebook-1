import { Wrapper, TextInput, ResetBtn } from "./Filter.styled";

export const Filter = ({onChangeFilter, onReset}) => {
    return (
        <Wrapper>
             <label>Find contacts by name</label>
             <TextInput
                type="text"
                name="Findname"
                onChange={evt=>onChangeFilter(evt.target.value)}
            />
             <ResetBtn onClick={onReset}>Reset</ResetBtn>
        </Wrapper>
    )
}
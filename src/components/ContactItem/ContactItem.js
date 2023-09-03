import { ButtonDlt, Wrapper } from "./ContactItem.styled";


export const ContactItem = ({ item: { name, phone }, itemId, onDelete,}) => {
    return (
        <Wrapper>
            <>{name}: {phone}</>
            <ButtonDlt type="button" onClick={() => onDelete(itemId)}>Delete</ButtonDlt>
        </Wrapper>
        
        
    )
}

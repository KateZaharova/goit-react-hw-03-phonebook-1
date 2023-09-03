import { ContactItem } from "../ContactItem/ContactItem";
import { LiItem} from "./ContactList.styled";


export const ContactList = ({ contacts, onDelete, contactData
}) => {
    return (
        <div>
           
            <ul>
                {contacts.map(item => (
                    <LiItem key={item.id}>
                        <ContactItem item={item.contact} itemId={item.id} onDelete={onDelete} />
                    </LiItem>
                    
                ))}
            </ul>
        </div>
    )
}
import styled from 'styled-components';

const ButtonDel = styled.button`
  background-color: #404540;
  border: none;
  color: white;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  margin-left: 10px;
  font-size: 12px;
  cursor: pointer;
`;

const ContactList = ({ contact, onDelete }) => (
  <li>
    {contact.name}: {contact.number}
    <ButtonDel onClick={onDelete}>Delete</ButtonDel>
  </li>
);

export default ContactList;

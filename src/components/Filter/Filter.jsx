import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
display: flex;
flex-direction: column;
row-gap: 10px;
text-align: center;

input {
  padding: 8px;
  margin-bottom: 10px;
  margin-left: 10px;
};
  
`;

const Filter = ({ value, onChange }) => (
  <StyledLabel>
    Find contacts by name:
    <input
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
    />
  </StyledLabel>
);

export default Filter;

import * as React from 'react';
import styled from 'styled-components';

const Cell = props => {
  return (
    <button onClick={props.onSelect} className={props.className}>
      {props.label}
    </button>
  );
};

export default styled(Cell)`
  outline: none;
  font-size: 1.25rem;
  background-color: ${props => (props.isSelected ? '#218838;' : '#000')};
  color: #fff;
  display: block;
  opacity: ${props => (props.isUsed ? 0.25 : 1)};
  cursor: ${props => (props.isUsed ? 'not-allowed' : 'pointer')};
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

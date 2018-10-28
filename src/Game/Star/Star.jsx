import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

const Star = props => {
  return (
    <div className={props.className}>
      <FontAwesomeIcon icon="star" />
    </div>
  );
};

export default styled(Star)`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

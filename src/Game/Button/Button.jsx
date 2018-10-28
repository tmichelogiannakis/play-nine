import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

const Button = props => {
  const clickHandler = () => {
    props.onClick();
  };

  let icon;
  if (props.iconName) {
    icon = <FontAwesomeIcon icon={props.iconName} />;
  }

  return (
    <button className={props.className} onClick={clickHandler} disabled={props.isDisabled}>
      {icon} {props.label}
    </button>
  );
};

export default styled(Button)`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  outline: none;
  transition: all 0.25s ease-in-out;

  &[disabled] {
    opacity: .25;
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  &.btn-primary:not([disabled]) {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    cursor: pointer;
    &:hover,
    &:active,
    &:focus 
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;      
    }
  }

  &.btn-outline-info {
    color: #17a2b8;
    background-color: transparent;
    background-image: none;
    border-color: #17a2b8;
    &:hover,
    &:active,
    &:focus {
      color: #fff;
      background-color: #17a2b8;
      border-color: #17a2b8;
    }
  }
  &.btn-outline-warning {
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107;
    &:hover,
    &:active,
    &:focus {
      color: #212529;
      background-color: #ffc107;
      border-color: #ffc107;
    }
  }
  &.btn-outline-danger {
    color: #dc3545;
    background-color: transparent;
    background-image: none;
    border-color: #dc3545;
    &:hover,
    &:active,
    &:focus {
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
    }
  }
`;

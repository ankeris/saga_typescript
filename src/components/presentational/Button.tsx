import React, { FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';

type ButtonStyledProps = {
    primary?: boolean;
    secondary?: boolean;
}

interface IProps {
    text: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void
}

const Button = styled.button<ButtonStyledProps>`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const ButtonComponent: FunctionComponent<IProps> = ({ text, onClick }) =>
    <Button onClick={onClick} primary>{text}</Button>

export default ButtonComponent
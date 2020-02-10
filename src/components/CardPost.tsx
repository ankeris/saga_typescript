import React, { useState, FunctionComponent, useEffect } from "react";
import styled from 'styled-components'

type Props = {
    color: string,
    title: string,
    body: string,
}

type StyleProps = {
    bgColor: string;
}

const Card = styled.section<StyleProps>`
  font-size: 1.5em;
  background-color: ${props => props.bgColor};
  padding: 6px;
  margin: 5px;
`;

const H4 = styled.h4`
  color: black;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 5px;
`

const CardPost: FunctionComponent<Props> = ({ color, title }) => {
    return (
        <Card bgColor={color}>
            <H4>{title}</H4>
        </Card>
    );
}

export default CardPost;

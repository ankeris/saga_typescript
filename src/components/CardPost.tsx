import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

type Props = {
    color: string,
    title: string,
    body: string,
    id: number,
}

type StyleProps = {
    bgcolor: string;
}

const LinkCard = styled(Link).attrs({
    'data-testid': 'postItem'
}) <StyleProps>`
    display: block;
    text-decoration: none;
    font-size: 1.5em;
    background-color: ${props => props.bgcolor};
    padding: 6px;
    margin: 5px;
`;

const H4 = styled.h4`
    color: black;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 5px;
`

const CardPost: FunctionComponent<Props> = ({ color, title, id }) => {
    return (
        <LinkCard to={`/posts/${id}`} bgcolor={color}>
            <H4>{title}</H4>
        </LinkCard>
    );
}

export default CardPost;

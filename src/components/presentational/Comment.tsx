import React, { FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';
import { getRandomDate } from '@/utils/utils';

interface IProps {
    who: string;
    bodyText: string;
}

const CommentWrapper = styled.div`
    padding: 0.5em;
    margin: 10px 0;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const CommentField = styled.p`
`

const CommentComponent: FunctionComponent<IProps> = ({ who, bodyText }) =>
    <CommentWrapper>
        <h5>{who} ({getRandomDate(new Date(2000, 1, 1), new Date())})</h5>
        <CommentField>{bodyText}</CommentField>
    </CommentWrapper>

export default CommentComponent;
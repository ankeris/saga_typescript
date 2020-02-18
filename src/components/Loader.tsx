import React, { FunctionComponent, MouseEvent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { spinClockwise, spinXClockwise } from '@/styling/animations';

type ConfigureProps = {
    startDg: number;
    squareLength: number;
    clockwise: boolean;
    borderColor?: string;
}

type InnerBoxProps = {
    innerFill?: string;
}

type WrapperProps = {
    wrapperHeight?: string;
}

const SpinnerBox = styled.div<WrapperProps>`
    width: 100%;
    height: ${({ wrapperHeight }) => wrapperHeight ? wrapperHeight : '300px'};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

const ConfigureBorder = styled.div<ConfigureProps>`
    width: ${props => props.squareLength}px;
    height: ${props => props.squareLength}px;
    padding: 3px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ borderColor, theme }) => borderColor ? borderColor : theme.colors.main};
    transform: ${({ startDg }) => `rotate(${startDg}deg)`};
    animation: ${({ clockwise }) => clockwise ? spinClockwise : spinXClockwise} 3s ease-in-out 0s infinite alternate;
`

const InnerBodyBox = styled.div<InnerBoxProps>`
    width: 100%;
    height: 100%;
    background-color: ${({ innerFill, theme }) => innerFill ? innerFill : theme.colors.black};
`

type Props = {
    innerFill?: string;
    borderColor?: string;
    wrapperHeight?: string;
}

const T: FunctionComponent<Props> = ({ borderColor, innerFill, wrapperHeight }) =>
    <SpinnerBox wrapperHeight={wrapperHeight}>
        <ConfigureBorder borderColor={borderColor} clockwise startDg={45} squareLength={115}>
            <InnerBodyBox innerFill={innerFill} />
        </ConfigureBorder>
        <ConfigureBorder borderColor={borderColor} clockwise={false} startDg={0} squareLength={115}>
            <InnerBodyBox {...borderColor} innerFill={innerFill} />
        </ConfigureBorder>
    </SpinnerBox>

export default T;
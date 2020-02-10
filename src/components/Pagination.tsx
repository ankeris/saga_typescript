
import React, { useState, useCallback, useEffect, FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from './Button';

const PaginationElement = styled.section`
  font-size: 1.5em;
  padding: 6px;
  margin: 5px;
  ${props => props.theme.contentCenter}
`;

interface IProps {
    onPageChange: (n: number) => void
}

const Pagination: FunctionComponent<IProps> = ({ onPageChange }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [previousPage, setPreviousPage] = useState<number>(currentPage);

    const incDecPage = useCallback((howMuch: number): void => {
        setCurrentPage(currentPage + howMuch);
    }, [currentPage, setCurrentPage]);

    useEffect(() => {
        if (previousPage !== currentPage) {
            onPageChange(currentPage)
        };
        setPreviousPage(currentPage);
    }, [currentPage]);

    return (
        <PaginationElement>
            {currentPage !== 1 && <Button text={'<'} onClick={() => incDecPage(-1)} />}
            <h5>Page: {currentPage}</h5>
            <Button text={'>'} onClick={() => incDecPage(1)} />
        </PaginationElement>
    )
}

export default Pagination
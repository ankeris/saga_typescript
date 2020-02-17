import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import Pagination from "@/components/Pagination";

const renderPagination = () => render(
    <Pagination onPageChange={() => { }} />
);

describe("<Pagination />", () => {

    test("Pressing button Increments/Decrements the page", () => {
        const { getByText } = renderPagination();
        expect(getByText("Page: 1")).toBeInTheDocument();
        fireEvent.click(getByText(">"));
        expect(getByText("Page: 2")).toBeInTheDocument();
        fireEvent.click(getByText("<"));
        expect(getByText("Page: 1")).toBeInTheDocument();
    });

});

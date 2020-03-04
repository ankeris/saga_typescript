import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import Pagination from "@/components/Pagination";

describe("<Pagination />", () => {

    test("Pressing button Increments/Decrements the page", () => {
        const { getByText } = render(<Pagination onPageChange={() => { }} />);
        expect(getByText("Page: 1")).toBeInTheDocument();
        fireEvent.click(getByText(">"));
        expect(getByText("Page: 2")).toBeInTheDocument();
        fireEvent.click(getByText("<"));
        expect(getByText("Page: 1")).toBeInTheDocument();
    });

    test("Pagination emits right value", async () => {
        const timesPressed = Math.round(Math.random() * 10);
        let lastOnChangeValueEmitted: number = 0;
        const { getByText } = render(<Pagination onPageChange={x => lastOnChangeValueEmitted = x} />);
        if (timesPressed > 0) {
            for (let i = 0; i < timesPressed; i++) {
                fireEvent.click(getByText(">"));
            }
            // + 1 is added because pagination starts from page 1.
            expect(lastOnChangeValueEmitted).toBe(timesPressed + 1)
        }
    });

});

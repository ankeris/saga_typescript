import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";

import Button from "@/components/Button";


describe("<Button />", () => {
    test("Should render with props", async () => {
        const buttonText = "i am a text";
        const { getByText } = render(<Button text={buttonText}></Button>);
        expect(getByText(buttonText)).toBeInTheDocument();
    });

    test("Should emit an event", () => {
        const buttonText = "click me pl0x";
        let clicked: boolean = false;
        const { getByText } = render(<Button onClick={() => clicked = true} text={buttonText}></Button>);
        fireEvent.click(getByText(buttonText));
        expect(clicked).toBeTruthy();
    })

});

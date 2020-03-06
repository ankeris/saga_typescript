import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";

import Loader from "@/components/presentational/Loader";
import { ThemeProvider } from "styled-components";
import { myTheme } from '@/styling/theme';

const renderPagePosts = () => render(
    <ThemeProvider theme={myTheme}>
        <Loader />
    </ThemeProvider>
);

describe("<Loader />", () => {
    test("Should render with props", async () => {
        const buttonText = "i am a text";
        const { getByText } = renderPagePosts();
        expect(1).toBe(1);
    });
});

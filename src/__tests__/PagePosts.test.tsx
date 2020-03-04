import React from "react";
import { render, wait } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import PagePosts from "@/components/PagePosts";
import store from "@/store/store";
import { myTheme } from '@/styling/theme';
import { Post } from "@/types/post.interface";
import mockPosts from "@/utils/posts.mock";

const renderPagePosts = (posts?: Array<Post>) => render(
    <ThemeProvider theme={myTheme}>
        <Provider store={store}>
            <PagePosts mockPosts={posts} />
        </Provider>
    </ThemeProvider>
);

describe("<PagePosts />", () => {

    test("Should fetch & render list of 10 Posts", async () => {
        const { getAllByTestId } = renderPagePosts(mockPosts);
        let allElements: HTMLElement[] = [];
        await wait(() => allElements = getAllByTestId('postItem'));
        expect(allElements.length).toBe(10);
    });

    const title = 'Posts'
    test(`Should render with a title: ${title}`, async () => {
        const { getByText } = renderPagePosts(mockPosts);
        expect(getByText(title)).toBeInTheDocument();
    });

});

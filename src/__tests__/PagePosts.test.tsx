import React from "react";
import { render, wait } from "@testing-library/react";

import PagePosts from "@/components/PagePosts";
import store from "@/store/store";
import { Provider } from "react-redux";

const renderPagePosts = () => render(
    <Provider store={store}>
        <PagePosts />
    </Provider>
);

describe("<PagePosts />", () => {

    test("Should render list of 10 Posts", async () => {
        const { getAllByTestId } = renderPagePosts();
        let allElements: HTMLElement[] = [];
        await wait(() => allElements = getAllByTestId('postItem'));
        expect(allElements.length).toBe(10);

    });

    const title = 'Posts'
    test(`Should render with a title: ${title}`, async () => {
        const { getByText } = renderPagePosts();
        expect(getByText(title)).toBeInTheDocument();
    });


});

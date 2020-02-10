import React, { useState, FunctionComponent, useEffect } from "react";
import { connect, DispatchProp } from 'react-redux';
import { valuesActions } from '../@features/store/posts';
// types
import { Post } from "../@features/types/post.interface";
import CardPost from "./CardPost";

interface IProps extends DispatchProp {
    posts: Array<Post>
}

type GetPostsPayload = {
    limit: number
}

const PagePosts: FunctionComponent<IProps> = (props) => {
    const fetchPosts = (): void => {
        props.dispatch(valuesActions.getPosts<GetPostsPayload>({ limit: 10 }))
    }

    const getRandomColor = (): string => {
        const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
        return colorArray[Math.floor(Math.random() * Math.floor(colorArray.length))]
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section className="posts">
            <h3>posts</h3>
            <button onClick={fetchPosts}>hi</button>
            {props.posts && props.posts.map((x: Post) =>
                <CardPost color={getRandomColor()} key={x.id} {...x}>hi</CardPost>
            )}
        </section>
    );
}

const mapStateToProps = (state: any) => ({
    posts: state.posts.posts
})

const PagePostsContainer = connect(mapStateToProps)(PagePosts);

export default PagePostsContainer;

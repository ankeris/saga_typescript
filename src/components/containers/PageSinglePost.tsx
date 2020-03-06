import React, { FunctionComponent, useEffect } from "react";
import { connect, DispatchProp, useDispatch } from 'react-redux';
import { valuesActions } from "@/store/posts";
import { RouteProps, RouteComponentProps } from "react-router";
import { IGetSinglePostParams, Post } from "@/types/post.interface";
import Loader from "@/components/presentational/Loader";

export interface IProps extends DispatchProp, RouteComponentProps {
    id?: number;
    currentPost?: Post;
}

const PageSinglePost: FunctionComponent<IProps> = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // always clear the previous post if there was one.
        props.currentPost && dispatch(valuesActions.clearValue('currentPost'))
        dispatch(valuesActions.getSinglePost({ id: (props.match.params as IGetSinglePostParams).id }))
    }, [])

    return props.currentPost ? (
        <>
            <h4>{props.currentPost.title}</h4>
            <section>{props.currentPost.body}</section>
        </>
    ) : <Loader wrapperHeight="100vh" />;
}

const mapStateToProps = (state: any) => ({
    currentPost: state.posts.currentPost,
    isLoading: state.posts.isLoading
})

const PagePostsContainer = connect(mapStateToProps)(PageSinglePost);

export default PagePostsContainer;

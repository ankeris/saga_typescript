import React, { FunctionComponent, useEffect } from "react";
import { connect, DispatchProp, useDispatch } from 'react-redux';
import { valuesActions } from "@/store/posts";
import { RouteComponentProps } from "react-router";
import { IGetSinglePostParams, Post } from "@/types/post.interface";
import Loader from "@/components/presentational/Loader";
import CommentComponent from "@/components/presentational/Comment";
import ButtonComponent from "@/components/presentational/Button";
import CreateCommentForm, { CreateCommentFormData } from "@/components/presentational/commentForm";
import { postCommentFilter } from "@/selectors/postSelectors";

export interface IProps extends DispatchProp, RouteComponentProps {
    id?: number;
    currentPost?: Post;
}

const PageSinglePost: FunctionComponent<IProps> = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(valuesActions.getSinglePost({ id: (props.match.params as IGetSinglePostParams).id }))
    }, [])

    // cleanup on un-mount
    useEffect(() => () => {
        dispatch(valuesActions.clearValue('currentPost'))
    }, [])

    const postComment = (vals: CreateCommentFormData) => {
        dispatch(valuesActions.addComment({
            id: Math.random(),
            postId: Math.random(),
            body: vals.commentBodyText,
            name: vals.nickName,
            email: ''
        }))
    }

    return props.currentPost ? (
        <>
            <ButtonComponent text="Back" onClick={props.history.goBack}></ButtonComponent>
            <h4>{props.currentPost.title}</h4>
            <section>{props.currentPost.body}</section>
            <CreateCommentForm exposeValues={(vals: CreateCommentFormData) => postComment(vals)} onSubmit={() => { }}></CreateCommentForm>
            {
                props.currentPost.comments &&
                props.currentPost.comments.map((comm) =>
                    <CommentComponent key={comm.id} who={comm.name} bodyText={comm.body}></CommentComponent>)
            }
        </>
    ) : <Loader wrapperHeight="100vh" />;
}

const mapStateToProps = (state: any) => ({
    currentPost: state.posts.currentPost,
    isLoading: state.posts.isLoading,
    comments: postCommentFilter(state)
})

const PagePostsContainer = connect(mapStateToProps)(PageSinglePost);

export default PagePostsContainer;

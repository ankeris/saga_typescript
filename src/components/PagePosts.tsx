import React, { FunctionComponent, useEffect } from "react";
import { connect, DispatchProp, useDispatch } from 'react-redux';
import { valuesActions } from '@/store/posts';
// types
import { Post } from "@/types/post.interface";
// components
import CardPost from "@/components/CardPost";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";
import { getRandomColor } from "@/utils/utils";

export interface IProps extends DispatchProp {
    posts: Array<Post>,
    isLoading: boolean,
    mockPosts?: Array<Post>
}

const PagePosts: FunctionComponent<IProps> = (props) => {
    const dispatch = useDispatch();

    const fetchPosts = (n: number): void => {
        dispatch(valuesActions.getPosts({ limit: 10, pageNumber: n }))
    }

    useEffect(() => {
        if (props.mockPosts) {
            dispatch(valuesActions.setPosts(props.mockPosts));
            return;
        }
        fetchPosts(1);
    }, []);

    return (
        <section className="posts">
            <h3>Posts</h3>
            {!props.isLoading ? props.posts ?
                props.posts.map((x: Post) =>
                    <CardPost color={getRandomColor()} key={x.id} {...x}>hi</CardPost>
                ) : null : <Loader wrapperHeight="100vh" />}
            <Pagination onPageChange={(pageNum) => fetchPosts(pageNum)}></Pagination>
        </section>
    );
}

const mapStateToProps = (state: any) => ({
    posts: state.posts.posts,
    isLoading: state.posts.isLoading
})

const PagePostsContainer = connect(mapStateToProps)(PagePosts);

export default PagePostsContainer;

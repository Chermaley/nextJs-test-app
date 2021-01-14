import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {MainLayout} from "../../components/layout";
import {MyPost} from "../../interfaces/post";
import {NextPageContext} from "next";

interface PostPageProps {
    post: MyPost
}

export default function Post({post: serverPost}: PostPageProps) {

    const [post, setPost] = useState(serverPost);
    const router = useRouter();
    const id = router.query.id;
    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${id}`);
            const data = await response.json();

            setPost(data);
        }
        if (!serverPost) {
            load();
        }
    }, [])

    if (!post) {
        return <MainLayout><p>Loading</p></MainLayout>
    }


    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => router.push('/posts')}>Back to all posts</button>
        </MainLayout>
    )
}

interface PostNextPageContext extends NextPageContext{
    query: {
        id: string
    }
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
    if (!req) {
        return {post: null}
    }
    const id = query.id;
    const response = await fetch(`http://localhost:4200/posts/${id}`);
    const post: MyPost = await response.json();
    return {
        post
    }
}
//Только сервер можно использовать для bd

// export async function getServerSideProps({req, query}) {
//     const id = query.id;
//     const response = await fetch(`http://localhost:4200/posts/${id}`);
//     const post = await response.json();
//
//     return {
//         props: {post}
//     }
// }

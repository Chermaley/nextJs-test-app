import Head from "next/head";
import {MainLayout} from "../components/layout";
import Link from "next/link";
import {useEffect, useState} from 'react';
import {MyPost} from "../interfaces/post";
import {NextPageContext} from "next";

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts ({ posts: serverPost }: PostsPageProps) {
    const [posts, setPosts] = useState(serverPost);

    useEffect(() => {
        async function load() {
            const response = await fetch("http://localhost:4200/posts");
            const data = await response.json();
            setPosts(data);
        }
        if (!serverPost) {
            load();
        }
    }, [])

    if (!posts) {
        return <MainLayout><p>Loading...</p></MainLayout>
    }

    return (
        <MainLayout>
            <Head>
                <title>Posts</title>
            </Head>
            <h1>Posts</h1>
            <ul>{serverPost.map(p => <li key={p.id}>
                      <Link href={`/post/[id]`} as={`/post/${p.id}`}><a>{p.title}</a></Link>
                  </li>)
            }</ul>
        </MainLayout>
    );
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
    if (!req) {
        return {
            posts: null
        }
    }
    const response = await fetch("http://localhost:4200/posts");
    const posts: MyPost[] = await response.json();

    return {
        posts
    }
}
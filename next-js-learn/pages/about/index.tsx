import Router from "next/router";
import Head from "next/head";
import {MainLayout} from "../../components/layout";

interface AboutPageProps {
    title: string
}

export default function About({title}: AboutPageProps) {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout>
            <Head>
                <title>О нас</title>
            </Head>
            <h1>{title}</h1>
            <button onClick={linkClickHandler}>Go to home</button>
            <button onClick={() => Router.push('/posts')}>Go to posts</button>
        </MainLayout>
    );
}

About.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/about');
    const data = await response.json();

    return {
        title: data.title
    }
}
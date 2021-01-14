import Link from "next/link";
import {MainLayout} from "../components/layout";

export default function Index() {
    return (
        <MainLayout>
            <h1>Hello world</h1>
            <p><Link href="/about"><a>About</a></Link></p>
            <p><Link href="/posts"><a>Post</a></Link></p>
        </MainLayout>
    );
}
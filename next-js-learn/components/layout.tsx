import Link from "next/link";
import classes from '../styles/mainLayour.module.scss';
export const MainLayout = ({children}) => {
    return (
        <>
            <nav className={classes.nav}>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
                <Link href={'/about'}><a>About</a></Link>
            </nav>
            <main className={classes.content}>
                {children}
            </main>
        </>
    )
}
import Link from "next/link";
import '../../styles/Home.module.css'
import { Mainlayout } from "../../components/ui/layout";

const Blog = () => {
    return (
        <div className="container">
            <Link href='/'><button>home</button></Link>
        </div>
    )
}

export default Blog;

Blog.Layout = Mainlayout
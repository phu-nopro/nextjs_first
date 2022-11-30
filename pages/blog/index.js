import Link from "next/link";
import { Mainlayout } from "../../components/ui/layout";

const Blog = () => {
    return (
        <div className="container">
            <div className="main">
                <Link href='/'><button>home</button></Link>
            </div>
        </div>
    )
}

export default Blog;

Blog.Layout = Mainlayout
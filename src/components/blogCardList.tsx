import { useState } from "react";
import BlogCard from "./blogCard";
import { fetchBlogsList, blogRecordType } from "../api/blogList";

const BlogCardList = () => {
    const blogContentList: blogRecordType[] = [];
    const [blogs, setBlogs] = useState(blogContentList)
    
    fetchBlogsList().then((blogList) => {
        setBlogs(blogList);
    });

    return(
        <div className="cardList">
            {blogs.map((blog: blogRecordType) => {
                return (
                        <BlogCard key={blog.id} id={blog.id} title={blog.title} content={blog.content} emoji={blog.header}></BlogCard>
                )
            })}
        </div>
    )
}

export default BlogCardList;
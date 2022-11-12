import { useState } from "react";
import { blogRecordType, blogRecord } from "../api/blogList";
import { fetchBlog } from "../api/fetchBlogRecord";
import Typography from '@mui/material/Typography';

export const BlogPage = (props: {id: string}) => {
    const [blog, setBlog] = useState(blogRecord);

    fetchBlog(props.id).then((blog: blogRecordType) => {
        setBlog(blog);
    })

    return (
        <div className="blogPage">
            <div className="cardHeader"> {blog.header}</div>
            <div>
                <Typography className="cardHeader" gutterBottom variant="h5" component="div">
                    {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p>
                        {blog.content}
                    </p>
                </Typography>
            </div>
        </div>
    )
}
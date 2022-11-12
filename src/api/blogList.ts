import { StringifyOptions } from "querystring";
import BlogCard from "../components/blogCard";
import { fetchBlog } from "./fetchBlogRecord";

export const blogRecord = {
    content: "",
    title: "",
    header: "",
    id: ""
};

export type blogRecordType = typeof blogRecord;
export const fetchBlogsList = async (): Promise<blogRecordType[]> => {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/Blogs/full_list`, {
    method: 'GET'
    });
    
    const blogList: Promise<blogRecordType[]> = result.json();
    return blogList;
}
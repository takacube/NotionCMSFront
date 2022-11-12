import { blogRecordType } from "./blogList";

export const fetchBlog = async (id: string): Promise<blogRecordType> => {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/Blogs?id=${id}`, {
    method: 'GET'
    });
    const blogContent: Promise<blogRecordType> = result.json()
    return blogContent;
}
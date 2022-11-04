import BlogCard from "./blogCard"
import { IBlog } from "./IBlog"
export const BlogCardList = () => {
    const content = "izards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica";
    const blogList: IBlog[] = [
        {id: "aaa", title: "NotionとNext.jsでブログアプリ[上]", content: content, emoji: "&#x1f92e;"},
        {id: "bbb", title: "NotionとNext.jsでブログアプリ[下]", content: content, emoji: "&#x1f922;"},
        {id: "aaa", title: "NotionとNext.jsでブログアプリ[上]", content: content, emoji: "&#x1F605;"},
        {id: "bbb", title: "NotionとNext.jsでブログアプリ[下]", content: content, emoji: "&#x1f922;"}
    ]

    return(
        <div className="cardList">
            {blogList.map((blog: IBlog) => {
                return (
                    <BlogCard id={blog.id} title={blog.title} content={blog.content} emoji={blog.emoji}></BlogCard>
                )
            })}
        </div>
    )
}

export default BlogCardList;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from "next/link"
import { IBlog } from './IBlog';

export default function BlogCard(props: IBlog) {
    const shortenString = (content: string | null) => {
        if (content != null && content.length >= 80) {
            return content.slice(0, 80);
        }
        return content
    }
    const blogId = props.id;
    const blogUrl = "/blog?id=" + blogId;
    const blogContent =shortenString(props.content);

    
    return (
    <div className="blogCard">
        <Link href={blogUrl}>
        <Card>
        <div className="cardHeader"> {props.emoji}</div>
        <div className="card">
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    
                    {blogContent}
                    
                </Typography>
                </CardContent>
            </CardActionArea>
        </div>
        </Card>
        </Link>
    </div>
  );
}
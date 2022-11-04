import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from "next/link"
import { IBlog } from './IBlog';
export default function BlogCard(props: IBlog) {
    const blogId = "1223444";
    const blogUrl = "/blog?id=" + blogId;
    return (
    <div className="blogCard">
        <Link href={blogUrl}>
        <Card>
        <div className="cardHeader">{props.emoji}</div>
        <div className="card">
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    
                    {props.content}
                    
                </Typography>
                </CardContent>
            </CardActionArea>
        </div>
        </Card>
        </Link>
    </div>
  );
}
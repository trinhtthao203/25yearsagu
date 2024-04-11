import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { t } from "i18next";

export default function ImgMediaCard({ title, content, time, onClick, img }) {
    const trimContent = (text) => {
        if (text.length > 100) {
            return text.substring(0, 100) + "...";
            // hoặc có thể sử dụng text.slice(0, 100) + "..." cũng tương đương
        }
        return text;
    };

    return (
        <Card
            sx={{
                maxWidth: 270,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
                style={{ width: "200px" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    <p className=" font-meri">{title}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p>{time}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <div
                        className="text-justify"
                        dangerouslySetInnerHTML={{
                            __html: trimContent(content),
                        }}
                    ></div>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClick}>
                    {t("common.view-detail")}
                </Button>
            </CardActions>
        </Card>
    );
}

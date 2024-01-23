import { Avatar, Box, Grid, Typography, colors } from "@mui/material";
import { useState } from "react";
import unread from "../assets/images/Unread-Not-Circle.png";
import { blue } from "@mui/material/colors";

const Notification = ({ notification }) => {
    const [notes, setNotes] = useState([]);

    function createMessage(notification) {
        switch (notification.action) {
            case "follow":
                return " followed you ";
            case "react":
                return " reacted to your ";
            case "message":
                return " sent you a ";
            case "comment":
                return " commented on your ";
            case "left":
                return " left the ";
            case "join":
                return "has joined your ";
            default:
                return "";
        }
    }

    const markRead = () => {
        setNotes((prevState) => [...prevState, (notification.readed = true)]);
    };

    return (
        <Grid container className="layout-helper" onClick={markRead}>
            <Grid item className={notification.readed ? "content" : "unreaded"}>
                <Box className="notification-info">
                    <Grid item className="info">
                        <Avatar alt="Remy Sharp" src={notification.avatar} />
                    </Grid>
                    <Grid item className="info">
                        <Box
                            fontFamily={"Plus Jakarta Sans"}
                        >
                            <Typography variant="p" component="b" className="user">{notification.name}</Typography>{" "}
                            {createMessage(notification)}{" "}
                            {notification.target.type}{" "}
                            {notification.target.type != "message" ? (
                                notification.target.type == "group" ? (
                                    <Typography variant="p" component="b" className="group">
                                        {notification.target.content}
                                    </Typography>
                                ) : (
                                    <Typography variant="b" className="post">
                                        {notification.target.content}
                                    </Typography>
                                )
                            ) : (
                                ""
                            )}{" "}
                            {notification.readed ? (
                                ""
                            ) : (
                                <img
                                    className="notification-status"
                                    src={unread}
                                    alt=""
                                />
                            )}
                            <Typography variant="p" className="time">{notification.date}</Typography>
                            {notification.target.type == "message" ? (
                                <Typography variant="p" className="messagePreview">
                                    {notification.target.content}
                                </Typography>
                            ) : (
                                ""
                            )}
                        </Box>
                    </Grid>
                </Box>
                {notification.target.type == "picture" ? (
                    <Box className="img-preview">
                        <Grid item className="img-preview">
                            <img
                                className="preview"
                                src={notification.target.preview}
                                alt=""
                            />
                        </Grid>
                    </Box>
                ) : (
                    ""
                )}
            </Grid>
        </Grid>
    );
};

export default Notification;

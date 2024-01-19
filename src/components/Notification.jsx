import { Avatar, Grid, colors } from "@mui/material";
import { useState } from "react";
import unread from "../assets/images/Unread-Not-Circle.png";
import { blue } from "@mui/material/colors";

export const Notification = ({ notification }) => {
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
                <div className="notification-info">
                    <Grid item className="info">
                        {" "}
                        <Avatar alt="Remy Sharp" src={notification.avatar} />
                    </Grid>
                    <Grid item className="info">
                        <b className="user">{notification.name}</b> {createMessage(notification)}{" "}
                        {notification.target.type}{" "}
                        {notification.target.type != "message" ? (
                            notification.target.type == "group" ? (
                                <b className="group">
                                    {notification.target.content}
                                </b>
                            ) : (
                                <b className="post">
                                    {notification.target.content}
                                </b>
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
                        <p className="time">{notification.date}</p>
                        {notification.target.type == "message" ? (
                            <p className="messagePreview">
                                {notification.target.content}
                            </p>
                        ) : (
                            ""
                        )}
                    </Grid>
                </div>
                {notification.target.type == "picture" ? (
                    <div className="img-preview">
                        <Grid item className="img-preview">
                            <img
                                className="preview"
                                src={notification.target.preview}
                                alt=""
                            />
                        </Grid>
                    </div>
                ) : (
                    ""
                )}
            </Grid>
        </Grid>
    );
};

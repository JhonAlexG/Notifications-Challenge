import { Box, Grid, Typography } from "@mui/material";
import mockNotifications from "../assets/others/notifications.js";
import Notification from "../components/Notification";
import { useState, useEffect } from "react";

const NotificationsPannel = () => {
    const [notes, setNotes] = useState([]);
    const [count, setCount] = useState(
        () =>
            mockNotifications.filter(
                (notification) => notification.readed == false
            ).length
    );

    useEffect(() => {
        setNotes(mockNotifications);
        setCount(countUnread());
    }, []);

    function handleClick() {
        notes.map((notification) => {
            setNotes((prevState) => [
                ...prevState,
                (notification.readed = true),
            ]);
        });
        setNotes(notes);
        setCount(0);
    }

    const countUnread = () => {
        let counter = 0;
        notes.map((notification) => {
            if (notification.readed == false) {
                counter++;
            }
        });
        setCount(counter);
        return count;
    };

    function check() {
        countUnread();
    }

    return (
        <Grid container className="notification-Pannel">
            <Grid container className="notification-list">
                <Grid item fontFamily={"Plus Jakarta Sans"}  className="notification-header">
                    <Box className="notification-cont-txt">
                        <Typography variant="b" className="notification-txt">
                             Notifications 
                        </Typography>
                             {" "}
                        {count > 0 ? (
                            <Typography variant="p" className="notification-count"> {count} 
                            </Typography>
                        ) : null}{" "}
                    </Box>
                    <Box onClick={handleClick} fontFamily={"Plus Jakarta Sans"} className="mark-all">
                        <Typography variant="p" className="mark-all-txt" >
                            {" "}
                            Mark all as read{" "}
                        </Typography>
                    </Box>
                </Grid>
                <Box onClick={check}>
                    {notes.map((notification) => (
                        <Notification
                            key={notification.id}
                            notification={notification}
                        />
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default NotificationsPannel;

import { Grid } from "@mui/material";
import mockNotifications from "../assets/others/notifications.js";
import { Notification } from "../components/Notification";
import { useState, useEffect } from "react";

const NotificationsPannel = () => {
    const [count, setCount] = useState(0);
    const [notes, setNotes] = useState([]);
    const [notesAux, setNotesAux] = useState([]);
    useEffect(() => {
        setNotes(mockNotifications);
        setNotesAux(notes);
    }, []);

    const readedFilter = () => {
        setNotesAux(
            notes.map((notification) =>
                notification.readed ? notification : null
            )
        );
        console.log(notesAux);
    }; 

    function handleClick() {
        console.log(notes);
        notes.map((notification) => {
            notification.readed = true;
        });
        console.log(notes);
        setNotes(notes);
        countUnread();
    }

    function countUnread() {
        let counter = 0;
        notes.map((notification) => {
            if (notification.readed == false) {
                counter++;
            }
        });
        //setCount(counter);
        return counter;
    }

    function checkear() {
        console.log(notes);
        console.log(notesAux);
    } 

    return (
        <Grid container className="notification-Pannel">
            <Grid container className="notification-list">
                <Grid item className="notification-header">
                    <div className="notification-cont-txt">
                        <b className="notification-txt"> Notifications </b>{" "}
                        {countUnread() > 0 ? (
                            <p className="notification-count"> {countUnread()} </p>
                        ) : null}{" "} 
                    </div>
                    <div className="mark-all">
                        <p className="mark-all-txt" onClick={handleClick}> Mark all as read </p>
                    </div>
                    <button onClick={checkear}> check </button>
                </Grid> 

                <div>
                    {notes.map((notification) => (
                        <Notification 
                            key={notification.id}
                            notification={notification}
                        />
                    ))}
                </div>
            </Grid>
        </Grid>
    );
};

export default NotificationsPannel;

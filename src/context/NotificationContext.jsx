import { createContext, useState, useEffect } from "react";
import { mockComponent } from "react-dom/test-utils";
import mockNotifications from "../assets/others/notifications";

export const NotificationContext = createContext();

export function NotificationContextProvider ({ children }) {
    const [notes, setNotes] = useState([]);
    const [notesAux, setNotesAux] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        setNotes(mockNotifications);
        setNotesAux(mockNotifications);
    }, []);

    // const readedFilter = () => {
    //     setNotesAux(
    //         notes.map((notification) =>
    //             notification.readed ? notification : null
    //         )
    //     );
    //     console.log(notesAux);
    // };

    function CreateMessage(notification) {
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

    function handleClick() {
        console.log(notes);
        notes.map((notification) => {
            notification.readed = true;
        });
        setNotes(notes);
        console.log(notes);
        
    }

    function countUnread() {
        let count = 0;
        notes.map((notification) => {
            if (notification.readed == false) {
                count++;
            }
        });
        return count; 
    }

    function checkear() {
        console.log(notes);
        console.log(notesAux);
    }

    return (
        <NotificationContext.Provider
            value={{
                notes,
                notesAux,
                //readedFilter,
                CreateMessage,
                handleClick,
                countUnread,
                checkear,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
import webber from "../images/avatar-mark-webber.webp";
import gray from "../images/avatar-angela-gray.webp";
import rizky from "../images/avatar-rizky-hasanuddin.webp";
import smith from "../images/avatar-kimberly-smith.webp";
import thompson from "../images/avatar-jacob-thompson.webp";
import peterson from "../images/avatar-nathan-peterson.webp";
import kim from "../images/avatar-anna-kim.webp";
import chess from "../images/image-chess.webp";

const mockNotifications = [
    {
        id: 1,
        name: "Mark Webber",
        action: "react",
        target: {
            type: "post",
            content: "My first tournament today!",
        },
        readed: false,
        date: "1m ago",
        avatar: webber,
    },
    {
        id: 2,
        name: "Angela Gray",
        action: "follow",
        target: {
            type: "",
            content: "",
        },
        readed: false,
        date: "5m ago",
        avatar: gray,
    },
    {
        id: 3,
        name: "Jacob Thompson",
        action: "join",
        target: {
            type: "group",
            content: "Chess Club",
        },
        readed: false,
        date: "1 day ago",
        avatar: thompson,
    },
    {
        id: 4,
        name: "Rizky Hasanuddin",
        action: "message",
        target: {
            type: "message",
            content:
                "Hello, thanks for setting up the Chess Club, I've been a member for a few weeks and now I'm already having lots of fun and improving my game!",
        },
        readed: true,
        date: "5 day ago",
        avatar: rizky,
    },
    {
        id: 5,
        name: "Kimberly Smith",
        action: "comment",
        target: {
            type: "picture",
            content: "",
            preview: chess,
        },
        readed: true,
        date: "1 week ago",
        avatar: smith,
    },
    {
        id: 6,
        name: "Nathan Peterson",
        action: "react",
        target: {
            type: "post",
            content: "5 end-game strategies to increase your win rate!",
        },
        readed: true,
        date: "2 weeks ago",
        avatar: peterson,
    },
    {
        id: 7,
        name: "Anna Kim",
        action: "left",
        target: {
            type: "group",
            content: "Chess Club",
        },
        readed: true,
        date: "2 weeks ago",
        avatar: kim,
    },
];

export default mockNotifications;

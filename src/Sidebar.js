import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Avatar } from "@material-ui/core";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [ { user }, dispatch ] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        ));

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div className="sidebar">
            <div className="header">
                <Avatar src={user?.photoURL}/>
                <div class="rightHeader">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="search">
                <div className="searchContainer">
                    <SearchIcon/>
                    <input placeholder="search or start a new chat" type="text"></input>
                </div>
            </div>
            <div className="sidebar__chat">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>    
    )
}

export default Sidebar

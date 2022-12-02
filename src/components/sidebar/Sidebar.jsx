import React from 'react'
import './sidebar.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect( ()=>{
        const getCats = async ()=> {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    },[]);


    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img
                    src="https://images.pexels.com/photos/1031081/pexels-photo-1031081.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque doloremque voluptates, temporibus impedit officia praesentium asperiores possimus beatae odio ratione obcaecati tempore accusantium consequuntur quibusdam ea voluptatum porro? Quidem!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map(c => (
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                    <li className="sidebarListItem">Fake</li>
                    <li className="sidebarListItem">Fake</li>
                    <li className="sidebarListItem">Fake</li>
                    <li className="sidebarListItem">Fake</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <li className="sidebarIcon fa-brands fa-facebook"></li>
                    <li className="sidebarIcon fa-brands fa-twitter"></li>
                    <li className="sidebarIcon fa-brands fa-pinterest"></li>
                    <li className="sidebarIcon fa-brands fa-instagram"></li>
                </div>
            </div>
        </div>
    )
}
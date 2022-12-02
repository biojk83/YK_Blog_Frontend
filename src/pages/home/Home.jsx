import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css'
import { useLocation } from 'react-router-dom';

export default function Home() {
    //from the home page you have to bring posts info from the server by using Axios
    const [ posts, setPosts ] = useState([]);
    const { search } = useLocation();
    
    useEffect(()=>{
        const fetchPosts = async ()=>{
        const res = await axios.get("/posts" + search)
        setPosts(res.data)
    }
    fetchPosts()
    },[search])
    return (
    <>
        <Header />
        <div className="home">
            <Posts posts={posts}/>
            <Sidebar />
        </div>
    </>
    )
}
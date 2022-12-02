
import React, { useState } from "react";
import "./contact.css"
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return(
        <div className="container">
            <div className="contactTitle">
                <h2> CONTACT </h2>
                <p>Don't contact me..</p>
            </div>
            <div className="contactWrapper">
                <div className="left">
                    <div className="leftContainer">
                        <div className="icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="desc">충청남도 당진시 밤나무 아래</div>
                    </div>
                    
                    <div className="leftContainer">
                        <div className="icon">
                            <i class="fa-solid fa-envelope"></i>    
                        </div>
                        <div className="desc">IdontCare@gmail.com</div>
                    </div>
                    <div className="leftContainer">
                        <div className="icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className="desc">+111-111-1111</div>
                    </div>
                </div>
                <div className="right">
                    <form>
                        <div className="formContainer">
                            <label htmlFor="name">
                                <div className="title">Name :</div> 
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    placeholder="Enter you name.."
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="formContainer">
                            <label htmlFor="email">
                                <div className="title">Email :</div> 
                                <input 
                                    type="text"
                                    id="email"
                                    email="email"
                                    value={email}
                                    placeholder="Enter you email.."
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="formContainer">
                            <label htmlFor="message">
                                <div className="title">Message :</div> 
                                <textarea 
                                    type="text"
                                    id="message"
                                    message="message"
                                    value={message}
                                    placeholder="Enter you name.."
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </label>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
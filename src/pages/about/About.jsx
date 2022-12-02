import react from "react";
import "./about.css";


export default function About() {
    
    const PF = "http://localhost:5000/images/"; 
    return (
        <>
        <section id="about">
        <div className="columnContainer">

            <div className="leftColumn">
                <img 
                    className="profile-pic"
                    src={PF+"profilepic.jpg"}
                    alt="strong guy"
                    />
            </div>
            <div className="rightColumn">
                <h2>About Me</h2>
                <p>This is my website so I do whatever I want...  please leave your message Lorem ipsum dol
                    or sit amet consectetur adipisicing elit. Deleniti, earum quos itaque porro dicta alias sit quasi eius ut aspernatur
                    impedit eligendi odit labore, ducimus accusamus laboriosam officiis nulla quia?
                </p>
                <div className="rightColumnBottom">
                    <div className="columnDetail">
                        <h2>Contact Information</h2>
                        <p className="address">
                            <span>Youngwok Kim</span>
                            <br/>
                            <span>
                                Somewhere over the rainbow
                                <br />
                                City, State, Zip code
                            </span>
                            <br/>
                            <span>Phone: 222-222-2222</span>
                            <br/>
                            <span>Email: emailme@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
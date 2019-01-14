import React from 'react';

import './Home.scss';

const Home = () => (
    <div className="home">
        <div className="home-content">
        <div className="home__col">
            <img
                src="./img/me.jpg"
                alt="The site creator"
                className="home__profile-img"
            />
        </div>
        <div className="home__col">
            <div className="home__intro-header">
                Hi, I'm Lee
            </div>
            <hr/>
            <div className="home__intro-body">
            <p>
                I'm a software engineer and aspiring writer from Glasgow. 
            </p>
            <p>
                I currently work for BBC Scotland as a member of the Archive Services team,
                who work to make the extensive catalogue of content amassed by the BBC throughout the years more accessible to those who need it.
            </p>
            <p>
                I'm constantly looking to expand my professional toolset, and so have spent time with a lot of different technologies and techniques,
                but my most developed skills as of today are: <b>Javascript</b>, <b>ReactJS</b> and <b>NodeJS</b>.
            </p>
            </div>
            <div className="home__intro-contact">
                <a href="https://www.linkedin.com/in/lee-mcgowan-0ab058111/" className="home__intro-contact-icon">
                    <i class="fa fa-linkedin" />
                </a>
                <a href="mailto:lee.mcgowan.work@gmail.com" className="home__intro-contact-icon">
                    <i class="fa fa-envelope" />
                </a>
            </div>
        </div>
        </div>
    </div>
)

export default Home;

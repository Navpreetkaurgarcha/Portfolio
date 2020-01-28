import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Image from '../Image/profile_image.jpg';

class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src={Image}
                        alt=""
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr/>
                            <p>ASP.NET | C#| SQL | React Native | NodeJS | Python | C++ | Git | BitBucket </p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/navpreet-garcha-16b61169/" rel="noopener nonreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                 {/* GitHub */}
                                 <a href="http://google.com" rel="noopener nonreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
               
            </div>
        )
    }
}

export default Landing;
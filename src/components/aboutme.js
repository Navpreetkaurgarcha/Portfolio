//changes
import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class About extends Component{
    render(){
        return(
            <div className="about-me-body" >
    <Grid className="about-me-grid">
        <Cell col={7}>
        <h2>About Me</h2>
        <hr />
        <p style={{fontSize:18,fontWeight:'bold',padding:30}}>I am Full Stack Developer over 3 years of experience using React Native,React.js, 
        Asp.Net technologies that emphasis on frontend development  and graphQL ,SQL for
         backend database.I have the skills to manage, design,code, and troubleshoot the 
         projects and modules of projects. I really enjoyed doing programming and coding and 
         I am passionate to learn new programming languages. I have created various applications
          using react native,javascript,react js,c++,python etc. Currently working as a Full Stack Developer and developing 
          android and IOS mobile & web applications.
        </p>
        </Cell>
    </Grid>
    </div>
        )
    }
}

export default About;
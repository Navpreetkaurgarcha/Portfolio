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
        <p style={{fontSize:15,fontWeight:'bold',padding:30}}>I am Software Developer over 3 years of experience using React Native,React.js, 
        Asp.Net technologies that emphasis on frontend development  and firebase ,SQL for
         backend database.I have the skills to manage, design,code, and troubleshoot the 
         projects and modules of projects. I really enjoyed doing programming and coding and 
         I am passionate to leran new programming languages. I have created small sized applications
          using c++,python,C# .net etc. Currently working as a Software Engineer and developing 
          android and IOS applications using React.js,React Native,Firebase.
        </p>
        </Cell>
    </Grid>
    </div>
        )
    }
}

export default About;
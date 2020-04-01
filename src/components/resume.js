import React,{Component} from 'react';
import {Grid,Cell,ListItemContent,ListItem,List} from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid style={{marginLeft: 'auto', marginRight:'auto', background:'rgb(158, 140, 80)'}}> 
                    <Cell className="resume-right-col" col={10}>
                 <h4>Summary Of Qualifications</h4>
                 <List style={{fontWeight:"bold"}}>
  <ListItem>
    <ListItemContent>•>Over 3 years of experience in developing various applications using ASP.NET and React Native, Node.js, JavaScript etc.</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>Successfully completed Microsoft Certification in ASP.NET with C# as front end.</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>Working Experience with frontend framework :React</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>Currently upgrading technical knowledge of Android and IOS application development.</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>Fundamental knowledge of LINUX and HTML, HTML5, CSS, JavaScript.</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>Proficient communication and eager to learn new technologies.</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>Highly organized, innovative thinking, good learner and organizational skills.</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>Proven ability to learn independently: recently completed C++, Python through Udemy.</ListItemContent>
  </ListItem>
</List>


                    <hr style={{borderTop :'2px solid black'}}></hr>
                    <h4>Technical Skills</h4>
                    <List style={{fontWeight:"bold"}}>
  <ListItem>
    <ListItemContent>•>Programming Languages: C#, ASP.NET, Python, React JS, Angular, React Native, Typescript.</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>IDE s:  Visual Studio 2019, Pycharm, MS SQL Server 2019, MongoDB, Turbo C++, Visual Studio Code, Android Studio.</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>Data: Entity Framework, LINQ, ADO.NET, JsQuery, JavaScript.</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>Development Style: Object-Oriented Programming, ADO.NET ,MVC.</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent>•>Version Control: GIT,BitBucket.</ListItemContent>
  </ListItem>
</List>
                    <hr style={{borderTop :'2px solid black'}}></hr>
                        <h4>Experience</h4>
                        <Experience  
                        startYear={2019}
                        endYear={'Present'}
                        jobName={"Software Engineer(Co-op)"}
                        companyName={"Xccelerata,Toronto"}
                        jobdescription="•>Developed applications for Android and IOS devices and ensure applications are properly integrated with the API’s.
                        •>	Used NPM for installing required modules.
                        •>	Develop UI and worked with CSS ,JavaScript, HTML, firebase, NPM
                        •>	Knowledge of DevOps tooling capabilities i.e. BitBucket
                        •>	Following SCRUM technology.
                        Frontend: - React Native, Javascript
                        Backend: - Node.js"
                        />
                        <Experience
                        startYear={2016}
                        endYear={2018}
                        jobName={"Junior Software Developer"}
                        companyName={"SPIC,India"}
                        jobdescription="•>Developed web and desktop applications for various clients (Projects showcased below).
                        •>Analyzing and understanding requirements and working with team for integration of code
                        •>Responsibilities include creation of scenarios, creation of project modules, designing, execution, testing, 
                        •>Involved in resolving problems and issues which arise.
                        •>Ensuring all records are entered and updated correctly.
                        Frontend: - .Net Framework
                        Backend: - MySQL "
                        />

                        <hr style={{borderTop :'2px solid black'}}></hr>
                        <h4>Education</h4>
                        <Education
                        startYear={2019}
                        endYear={2019}
                        schoolName="Humber College,Toronto"
                        description=".Net Developer(IT Bridging Program)"
                        />

                         <Education
                        startYear={2018}
                        endYear={2019}
                        schoolName="Udemy Online"
                        description="Certification in Python"
                        />

                        <Education
                        startYear={2013}
                        endYear={2015}
                        schoolName="Lovely Professional University"
                        description="MS Computer Science and Engineering"
                        />
                        <Education
                        startYear={2015}
                        endYear={2009}
                        schoolName="Punjab Technical University"
                        description="BS Computer Science and Engineering"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
import React, { Component } from 'react';
import { Grid, Cell, ListItemContent, ListItem, List } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            background: 'rgb(158, 140, 80)',
          }}
        >
          <Cell className="resume-right-col" col={10}>
            <h4>Summary Of Qualifications</h4>
            <List style={{ fontWeight: 'bold' }}>
              <ListItem>
                <ListItemContent>
                  •>Over 3 years of experience in developing various
                  applications using React Native, ReactJs, Node.js, JavaScript,
                  Redux, ASP.Net ,C# etc.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Working Experience with frontend framework :React Native,
                  ReactJs.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Currently upgrading technical knowledge of Android and IOS
                  application development.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Developed mobile applications and created portfolio with
                  React framework.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Proficient communication and passion to learn innovative
                  technologies.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Proficient communication and eager to learn new
                  technologies.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Highly organized, innovative thinking, good learner and
                  organizational skills.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Proven ability to learn independently: recently completed
                  C++, Python through Udemy.
                </ListItemContent>
              </ListItem>
            </List>

            <hr style={{ borderTop: '2px solid black' }}></hr>
            <h4>Technical Skills</h4>
            <List style={{ fontWeight: 'bold' }}>
              <ListItem>
                <ListItemContent>
                  •>Programming Languages: React JS, React Native, NodeJs,C#,
                  ASP.NET, Python.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>IDE's:Visual Studio 2019, Visual Studio Code, Android
                  Studio, Postman, MS SQL Server 2019, MongoDB, Turbo C++.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Data: Entity Framework, LINQ, ADO.NET, JsQuery, JavaScript.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Development Style: Object-Oriented Programming, ADO.NET
                  ,MVC.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Version Control: GIT,GitLab,BitBucket.
                </ListItemContent>
              </ListItem>
            </List>
            <hr style={{ borderTop: '2px solid black' }}></hr>
            <h4>Experience</h4>
            <Experience
              startYear={'April 2020'}
              endYear={'Present'}
              jobName={'Full Stack Application Developer'}
              companyName={'Union Strathegies Inc.,Vaughan'}
              jobdescription="•>Working with an established team of developers.
                        •>Developing cross-platform mobile application using React Native, NodeJs, GrapgQL.
                        •>Hands on server-side experience with javascript,JSON,express.
                        •>Coding, Compiling, Web Scraping, Integration and Deployment of various Mobile applications.
                        •>Experience with deployment on AWS, to app stores
                       "
            />
            <Experience
              startYear={'May 2019'}
              endYear={'March 2020'}
              jobName={'Software Developer'}
              companyName={'Xccelerata,Toronto'}
              jobdescription="•>Developed applications for Android and IOS devices and ensure applications are properly integrated with the API’s.
                        •>	Used NPM for installing required modules.
                        •>	Develop UI and worked with CSS ,JavaScript, HTML, firebase, NPM
                        •>	Knowledge of DevOps tooling capabilities i.e. BitBucket
                        •>	Following SCRUM technology.
                        Frontend: - React Native, Javascript
                        Backend: - Node.js"
            />
            <Experience
              startYear={'July 2017'}
              endYear={'Feb 2018'}
              jobName={'Junior Software Developer'}
              companyName={'SPIC,India'}
              jobdescription="•>Developed web and desktop applications for various clients (Projects showcased below).
                        •>Analyzing and understanding requirements and working with team for integration of code
                        •>Responsibilities include creation of scenarios, creation of project modules, designing, execution, testing, 
                        •>Involved in resolving problems and issues which arise.
                        •>Ensuring all records are entered and updated correctly.
                        Frontend: - .Net Framework
                        Backend: - MySQL "
            />

            <hr style={{ borderTop: '2px solid black' }}></hr>
            <h4>Education</h4>
            <Education
              startYear={2019}
              endYear={'Ongoing'}
              schoolName="Udemy Online"
              description="Certification in Complete React Native"
            />
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
    );
  }
}

export default Resume;

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
            marginLeft: 30,
            marginRight: 'auto',
            background: '#b8cbd3',
          }}
        >
          <Cell className="resume-right-col" col={10}>
            <h4 style={{padding:10}}>Summary Of Qualifications</h4>
            <List style={{ fontWeight: 'bold' ,padding:20}}>
              <ListItem >
                <ListItemContent >
                  •>Over 3 years of experience in developing various
                  applications using React Native, ReactJs, Node.js, JavaScript,
                  Redux etc.
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
                  •>Proven ability to learn independently.
                </ListItemContent>
              </ListItem>
            </List>

            <hr style={{ borderTop: '2px solid black' }}></hr>
            <h4 style={{padding:10}}>Technical Skills</h4>
            <List style={{ fontWeight: 'bold',padding:20 }}>
              <ListItem>
                <ListItemContent>
                  •>Languages: React JS, React Native, NodeJs, C#, ASP.NET,
                  Python, and HTML/CSS.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>IDE’s: Visual Studio Code, Android Studio, Postman, MS SQL
                  Server 2019, MongoDB and MongoDB Atlas, Robo 3T, Altair ,
                  GraphQL.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Data Entity:JsQuery, JavaScript,JSON.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Development Style: Object-Oriented Programming.
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent>
                  •>Version Control: GIT,GitLab,BitBucket.
                </ListItemContent>
              </ListItem>
            </List>
            <hr style={{ borderTop: '2px solid black' }}></hr>
            <h4 style={{padding:10}}>Experience</h4>
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
              jobName={'Mobile App Developer'}
              companyName={'Xccelerata,Toronto'}
              jobdescription="•>Developed applications for Android and IOS devices and ensure applications are properly integrated with the API’s.
                        •>	Used NPM for installing required modules.
                        •>	Develop UI and worked with CSS ,JavaScript, HTML, firebase, NPM
                        •>	Knowledge of DevOps tooling capabilities i.e. BitBucket
                        •>	Following SCRUM technology.
                        Frontend: - React Native, Javascript
                        Backend: - Node.js"
            />
            {/* <Experience
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
            /> */}

            <hr style={{ borderTop: '2px solid black' }}></hr>
            <h4 style={{padding:10}}>Education</h4>
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
              description="Mobile and mWeb development"
            />

            {/* <Education
              startYear={2018}
              endYear={2019}
              schoolName="Udemy Online"
              description="Certification in Python"
            /> */}

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

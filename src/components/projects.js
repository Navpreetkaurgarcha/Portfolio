import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  IconButton,
  CardText,
} from 'react-mdl';
import Image from '../Image/Humber_project.PNG';
import Image1 from '../Image/Web3.PNG';
import Image2 from '../Image/Desktop.PNG';
import pdf from '../Image/Calculator App.pdf';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
     
          {/*Project 1 */}
          <Card
            shadow={5}
            style={{ width: '400px', height: '360px', margin: 10 }}
          >
            <CardTitle style={{ backgroundColor: '#556e75' }}>
              Personal Portfolio App
            </CardTitle>
            <CardTitle
              style={{
                color: 'Darkblack',
                fontWeight: 'bolder',
                height: '210px',
                background:
                  'url(https://bluewhaleapps.com/wp-content/uploads/2019/03/react-native-ios-android.jpg) center / cover',
              }}
            ></CardTitle>
            <CardText style={{ fontSize: 15, color: 'black' }}>
              Developed Mobile Apps using react native. Tools/Libraries used:
              react native,expo,mongoDB. Deployed on AppleStore and PlayStore.
            </CardText>
            <CardActions border>
              <a
                href="https://xd.adobe.com/view/90de14a6-5e45-42fe-92b0-790859495cb3-c58d/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adobe XD Link
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 2 */}
          <Card
            shadow={5}
            style={{ width: '400px', height: '360px', margin: 10 }}
          >
            <CardTitle style={{ backgroundColor: '#556e75' }}>
              Personal Portfolio App
            </CardTitle>
            <CardTitle
              style={{
                color: 'Darkblack',
                fontWeight: 'bolder',
                height: '210px',
                background:
                  'url(https://www.hkinfosoft.com/wp-content/uploads/2018/11/react_banner_com.png) center / cover',
              }}
            ></CardTitle>
            <CardText style={{ fontSize: 15, color: 'black' }}>
              Developed Personal Portfolio App using create-react-app.
              Tools/Libraries used: create-react-app cli, React MDL material
              design. Deployed on github.
            </CardText>
            <CardActions border>
              <a
                href="https://navpreetxccelerata.github.io/react-gh-pages/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Deployed Link
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 3 */}
          <Card
            shadow={5}
            style={{ width: '400px', height: '360px', margin: 10 }}
          >
            <CardTitle style={{ backgroundColor: '#556e75' }}>
              To-Do React App
            </CardTitle>
            <CardTitle
              style={{
                color: 'black',
                fontWeight: 'bolder',
                height: '210px',
                background:
                  'url(https://lh3.googleusercontent.com/X0eQ71VHtMe5ipb9Aiw69YC6JiLh_2-o4U4W1TFL8dHS5eaZaPOcI3n9Z2ZP62eannQ=h500) center / cover',
              }}
            ></CardTitle>
            <CardText style={{ fontSize: 15, color: 'black' }}>
              Developed Personal Portfolio App using create-react-app.
              Tools/Libraries used: create-react-app cli, React MDL material
              design. Deployed on github.
            </CardText>
            <CardActions border>
              <a
                href="https://expo.io/@navpreet/To-Do-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expo Link
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 4 */}
          <Card
            shadow={5}
            style={{ width: '400px', height: '360px', margin: 10 }}
          >
            <CardTitle style={{ backgroundColor: '#556e75' }}>
              React-Native Calculator App{' '}
            </CardTitle>
            <CardTitle
              style={{
                color: 'black',
                fontWeight: 'bolder',
                height: '210px',
                background:
                  'url(https://i.morioh.com/c4ee175a73.png) center / cover',
              }}
            ></CardTitle>
            <CardText style={{ fontSize: 15, color: 'black' }}>
              Developed Personal Portfolio App using create-react-app.
              Tools/Libraries used: create-react-app cli, React MDL material
              design. Deployed on github.
            </CardText>
            <CardActions border>
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                View PDF
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
       
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/*Project 3*/}
          <Card
            shadow={5}
            style={{ width: '400px', height: '460px', margin: 'auto' }}
          >
            <CardTitle style={{ backgroundColor:  '#556e75' }}>
              Online Job Portal
            </CardTitle>
            <CardTitle
              style={{
                color: 'Darkblack',
                fontWeight: 'bolder',
                height: '270px',
                background:
                  'url(https://static.oc-static.com/prod/courses/illustrations/illu_apprendre-asp-net-mvc.png) center / cover',
              }}
            ></CardTitle>
            <CardText style={{ fontSize: 15, color: 'black' }}>
              Developed a multilayered project using Asp.Net. The design pattern
              MVC focuses on separating all the three different layers i.e.
              business logic,data layer and presentation layer which add
              flexibility to the application.
            </CardText>
            <CardActions border>
              <a href={Image} target="_blank" rel="noopener noreferrer">
                Project Image Link
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 4*/}
          <Card
            shadow={5}
            style={{ width: '400px', height: '460px', margin: 'auto' }}
          >
            <CardTitle style={{ backgroundColor: '#556e75' }}>
              Web Based Application
            </CardTitle>
            <CardTitle
              style={{
                color: 'Darkblack',
                fontWeight: 'bolder',
                height: '270px',
                background:
                  'url(https://visualstudiomagazine.com/-/media/ECG/visualstudiomagazine/Images/introimages/ASPNETtext.jpg) center / cover',
              }}
            ></CardTitle>
            <CardText style={{ fontSize: 15, color: 'black' }}>
              Built application using ASP.NET front-end and SQL SERVER as
              back-end. This is a recruitment portal where candidate search jobs
              according to their interest and helps recruiters to find and
              connect the best candidates for their organizations.
            </CardText>
            <CardActions border>
              <a href={Image1} target="_blank" rel="noopener noreferrer">
                Project Image Link
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/*Project 5*/}
          <Card
            shadow={5}
            style={{ width: '400px', height: '460px', margin: 'auto' }}
          >
            <CardTitle style={{ backgroundColor:  '#556e75' }}>
              C# Desktop Based Application
            </CardTitle>
            <CardTitle
              style={{
                color: 'Darkblack',
                fontWeight: 'bolder',
                height: '270px',
                background:
                  'url(https://i.udemycdn.com/course/750x422/700300_7d6b_4.jpg) center / cover',
              }}
            ></CardTitle>
            <CardText style={{ fontSize: 15, color: 'black' }}>
              Developed application Using C#.NET.This desktop based application
              includes modules for managing data of retailers, customers and
              stock available.
            </CardText>
            <CardActions border>
              <a href={Image2} target="_blank" rel="noopener noreferrer">
                Project Image Link
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="project-body">
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
              React Native
            </Tab>
            <Tab style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
              Asp .Net
            </Tab>
            <Tab style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
              C# .Net
            </Tab>
          </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()} </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;

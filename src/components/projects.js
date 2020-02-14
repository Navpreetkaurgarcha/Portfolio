import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

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
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://ourcodeworld.com/public-media/articles/articleocw-58b0909cde5f8.jpg) center / cover' }}>C# .Net Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    { /*Project 2 */}

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://ourcodeworld.com/public-media/articles/articleocw-58b0909cde5f8.jpg) center / cover' }}>Asp.Net Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 3*/}

                    <Card shadow={5} style={{ minWidth: '200', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '200px', background: 'url(https://ourcodeworld.com/public-media/articles/articleocw-58b0909cde5f8.jpg) center / cover' }}>React Native Project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/*Project 4 */}
                    <Card shadow={5} style={{ width: '400px',height:'400px', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '200px', background: 'url(https://www.hkinfosoft.com/wp-content/uploads/2018/11/react_banner_com.png) center / cover' }}>Personal Portfolio App</CardTitle>
                        <CardText style={{ fontSize:15,color:'black'}}>
                            Developed Personal Portfolio App using create-react-app.
                            Tools/Libraries used:
                            create-react-app cli,
                            React MDL material design.
                            Deployed on github.
                  </CardText>
                        <CardActions border>
                            <Button colored>Github Link:</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                     {/*Project 5 */}
                     <Card shadow={5} style={{ width: '400px', height:'400px', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '200px', background: 'url(https://lh3.googleusercontent.com/X0eQ71VHtMe5ipb9Aiw69YC6JiLh_2-o4U4W1TFL8dHS5eaZaPOcI3n9Z2ZP62eannQ=h500) center / cover' }}>To-Do React App</CardTitle>
                        <CardText style={{ fontSize:15,color:'black'}}>
                            Developed Personal Portfolio App using create-react-app.
                            Tools/Libraries used:
                            create-react-app cli,
                            React MDL material design.
                            Deployed on github.
                  </CardText>
                        <CardActions border>
                            <a href="https://navpreetxccelerata.github.io/react-gh-pages/" rel="noopener nonreferrer">Github Deployed Link</a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="project-body">
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })}
                    ripple>
                    <Tab>C# .Net</Tab>
                    <Tab>Asp .Net</Tab>
                    <Tab style={{color:'black',fontSize:14,fontWeight:'bold'}}>React Native</Tab>
                </Tabs>
                <Grid >
                    <Cell col={12}>
                        <div className="content"> {this.toggleCategories()} </div>
                    </Cell>
                </Grid>
            </div>
</div>
        )
    }
}

export default Projects;
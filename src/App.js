import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
//import Landing from './components/landingpage';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: 25,
                  fontWeight: 'bold',
                }}
                to="/"
              >
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/aboutme" style={{ color: 'black', fontSize: 20 }}>
                About Me
              </Link>
              <Link to="/resume" style={{ color: 'black', fontSize: 20 }}>
                Resume
              </Link>
              <Link to="/projects" style={{ color: 'black', fontSize: 20 }}>
                Projects
              </Link>
              <Link to="/contact" style={{ color: 'black', fontSize: 20 }}>
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: 25,
                  fontWeight: 'bold',
                }}
                to="/"
              >
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/aboutme"  style={{ color: 'black', fontSize: 20 }}>About Me</Link>
              <Link to="/resume"  style={{ color: 'black', fontSize: 20 }}>Resume</Link>
              <Link to="/projects"  style={{ color: 'black', fontSize: 20 }}>Projects</Link>
              <Link to="/contact"  style={{ color: 'black', fontSize: 20 }}>Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.css';
// import './App.less';


import { Card, Layout } from "antd";

const {
  Content
} = Layout

const testMenge = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content
          style={{
            backgroundColor: 'lightgray',
            height: '100vh',
            className:'grid-container'
          }}
        >
          {
            testMenge.map((v, id) =>{ 
              return (
                <Card
                  key={id}
                  className="grid-item"
                  title={"card "+ id}
                  style={{
                    width:300
                  }}
                >
                 {v}
                </Card>
              )
            })
          }
        </Content>
      </div>
    );
  }
}

export default App;

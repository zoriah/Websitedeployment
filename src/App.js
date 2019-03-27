import React, { Component } from 'react';

import './App.css';
// import './App.less';
import WrappedHorizontalLoginForm from "./TestForm";

import { Card, Layout } from "antd";

const {
  Content
} = Layout

const testMenge = [
  1, 2, 3
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
          <WrappedHorizontalLoginForm></WrappedHorizontalLoginForm>
        </Content>
      </div>
    );
  }
}

export default App;

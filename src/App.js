import React, { Component } from 'react';

import './App.css';
// import './App.less';
// import WrappedHorizontalLoginForm from "./TestForm";

// import { Layout } from "antd";

// const {
// } = Layout

// const testMenge = [
//   1, 2, 3
// ]

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Content
      //     style={{
      //       backgroundColor: 'lightgray',
      //       height: '100vh',
      //       className:'grid-container'
      //     }}
      //   >
      //     <WrappedHorizontalLoginForm></WrappedHorizontalLoginForm>
      //   </Content>
      // </div>

      <div>
        <Container context={""}>
          <Checkbox w={100} h={100}></Checkbox>
        </Container>
      </div>
    );
  }
}

export default App;

class Container extends Component {
  constructor() {
    super()

    this.testAenderung = this.testAenderung.bind(this)

    this.state = {
      context: 'Falls kein Text zur Verfügung gestellt wurde, ist dieser standardmäßig gesetzt.'
    }
  }

  testAenderung() {
    this.setState({
      context: !this.state.context
    })
  }

  render() {
    return (
      <div>
        <p>
          {
            this.props.context === '' ? 
              this.state.context : 
              this.props.context
          }
        </p>
        {this.props.children}
      </div>
    )
  }
}

class Checkbox extends Component {
  constructor() {
    super()

    this.test = this.test.bind(this)

    this.state = {
      checked: false
    }
  }

  test() {
    console.log("bla")
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <input type="checkbox" style={{
        width: this.props.w,
        height: this.props.h
      }}
        checked={this.state.checked}
        onChange={this.test}
      />
    )
  }
}
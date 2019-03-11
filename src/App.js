import React, { Component } from 'react';
import {
  Input,
  Button,
  message,
  Modal,
} from 'antd';

import './App.css';

class InputMustBeNumber extends React.Component {
  onChange = e => {
    const { value } = e.target;
    const reg = /^-?([0-9]*)(\[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      this.props.onChange(value);
    }
  };
  render() {
    return (
      <Input
        {...this.props}
        onChange={this.onChange}
        placeholder="Input your number"
        maxLength="4"
        size="large"
        className="input"
      />
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: '',
      value: '',
      show: '0A0B',
      count: 1,
    };
  }

  componentDidMount() {
    this.setState({
      init: this.randomNum(),
    });
  }

  randomNum = () => {
    let arr = [];
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = 0; i < 4; i++) {
      let r = Math.floor(Math.random() * (nums.length - i));
      arr.push(nums.splice(r, 1)[0]);
    }
    return `${arr[0]}${arr[1]}${arr[2]}${arr[3]}`;
  }

  get_A_B = () => {
    const { init, value } = this.state;
    let _A = 0;
    let _B = 0;
    let nums = new Array(10);
    for (let i = 0; i < 10; i++) {
      nums[i] = 0;
    }
    for (let i = 0; i < init.length; i++) {
      let s = init.charCodeAt(i) - 48;
      let g = value.charCodeAt(i) - 48;
      if (s === g) {
        _A++;
      } else {
        if (nums[s] < 0) {
          _B++;
        }
        if (nums[g] > 0) {
          _B++;
        }
        nums[s]++;
        nums[g]--;
      }
    }
    return `${_A}A${_B}B`;
  }

  onChange = (value) => {
    this.setState({ value });
  }

  handleClick = () => {
    let self = this;
    const { init, value, count } = this.state;
    if (value.length < 4) {
      message.warning('Please enter 4 numbers');
    } else {
      this.setState({
        show: this.get_A_B(),
        count: count + 1,
      });
      if (init === value) {
        Modal.success({
          okText: 'Try again',
          title: 'Congratulations!',
          content: (
            <div>
              <div style={{ fontSize: '20px' }}>{ init }</div>
              <p>your counts: { count }</p>
            </div>
          ),
          onOk() {
            self.setState({
              count: 1,
              init: self.randomNum(),
              value: '',
              show: '0A0B',
            });
          },
          keyboard: false,
        });
      }
    }
  }

  render() {
    const { show } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div>xAxB</div>
          <div
            className="xaxb"
          >
            { show }
          </div>
          <InputMustBeNumber
            value={ this.state.value }
            onChange={ this.onChange }
          />
          <Button
            type="primary"
            size="large"
            className="btn"
            onClick={ this.handleClick }
          >
            SUBMIT
          </Button>
        </div>
      </div>
    );
  }
}

export default App;

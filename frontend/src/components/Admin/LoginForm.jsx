import React from 'react';
import {
    Form,
    Input,
    Button,
  } from 'antd';
import { layout_form, tailLayout } from '../UI/layouts';
class LoginForm extends React.Component {
    state = {
      username: '',
      password: ''
    };
  
    handle_change = e => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState(prevstate => {
        const newState = { ...prevstate };
        newState[name] = value;
        return newState;
      });
    };
  
    render() {
    return (
        <Form onSubmitCapture={e => this.props.handle_login(e, this.state)}
            {...layout_form}
            name="basic"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input  value={this.state.username} onChange={this.handle_change}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password  value={this.state.password} onChange={this.handle_change}/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    );
}
}

export default LoginForm;
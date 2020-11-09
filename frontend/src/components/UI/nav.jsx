import PropTypes from 'prop-types';
import { Button } from 'antd';
import {
    LoginOutlined,
    LogoutOutlined,
    UserAddOutlined,
  } from '@ant-design/icons';
import React from 'react';
import "../../css/layout.css";

function NavBar(props) {
    const logged_out_nav = (
        <div className="nav-bar">
          <Button className="button-color"onClick={() => props.display_form('login')} icon={<LoginOutlined />} size="medium" >Login</Button>
          <Button className="button-color" onClick={() => props.display_form('signup')}icon={<UserAddOutlined />} size="medium" >Signup</Button>
        </div>
      );
    return (
        <div className="nav-bar">
            {props.logged_in ?  <Button  className="button-color" onClick={props.handle_logout} icon={<LogoutOutlined />} size="medium">Logout</Button> 
                :logged_out_nav}
        </div>

    )
}
export default NavBar;

NavBar.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handle_logout: PropTypes.func.isRequired
};
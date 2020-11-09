import React from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  UserAddOutlined,
  FileAddOutlined
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from '../screens/home.jsx';
import Exam from '../screens/Exam/examList.jsx';
import PageNotFound from '../screens/pagenotfound.jsx';
import CustomForm from '../screens/Exam/examform.jsx';
import ExamDetail from '../screens/Exam/examDetail.jsx';
import "../css/layout.css"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        
        <Layout style={{ minHeight: '100vh' }}>
          <Header >
            <div className="logo" ><p textAlign="center">OES</p></div>
            <Menu style={{ position: "right" }} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider className="slider-color" collapsible collapsed={collapsed} onCollapse={this.onCollapse}  >

              <Menu className="slider-color" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}><Link to="/" />
                  Home
                </Menu.Item>
                <Menu.Item key="2" icon={<FileAddOutlined />} ><Link to="/exams/create" > Add Exams</Link></Menu.Item>
                <Menu.Item key="3" icon={<UserAddOutlined />} ><Link to="/exams" /> Exam List</Menu.Item>
                <Menu.Item key="4" icon={<SearchOutlined />} > <Link to="/qnas" ></Link>Search Students</Menu.Item>
              </Menu>
            </Sider>
            <Layout >
              <Content style={{ margin: '5px 10px' }}>

                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path="/exams" component={Exam} />
                    <Route path="/qnas" />
                    <Route path='/exams/create' component={CustomForm} />
                    <Route path="/exams/update/:examId" component={ExamDetail} />
                    <Route path="*" component={PageNotFound} />
                  </Switch>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>OES ©2020 Created by LOLcode</Footer>
            </Layout>
          </Layout>
        </Layout>

      </Router>
    );
  }
}

export default SiderDemo;



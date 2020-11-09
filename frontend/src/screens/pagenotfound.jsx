import React from 'react';
import {
    Link,
  } from "react-router-dom";
import { Result, Button } from 'antd';
const PageNotFound = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, you visited does not exist."
            extra={<Link to= "/"><Button type="primary" >Back Home</Button></Link>}
        />
    );
}    

export default PageNotFound;

import { Button } from 'antd';
import React from 'react';
const ExamDetail = ({match})=>{
    const showStatus =() =>{
        console.log(match)
    }
    return(
    <Button onClick={showStatus}>Show the value</Button>
    )
}
 
export default ExamDetail;

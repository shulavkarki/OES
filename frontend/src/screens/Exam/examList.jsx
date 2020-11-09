import React, { useEffect, useState } from 'react';
import {
    List,
    Card,
    Divider,
} from 'antd';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import { DeleteFilled, EditFilled, } from '@ant-design/icons';
import Axios from 'axios';
import Meta from 'antd/lib/card/Meta';
import BreadTitle from '../../components/UI/breadTitle';

const Exam = ({ match }) => {
    const [examlist, setExam] = useState([]);

    useEffect(() => {
        fetch(
            "http://127.0.0.1:8000/api/exams/",
            {
                method: "GET",
                headers: {
                    'Authorization': 'Token e4aaaebedbf95b9121928204cadb154b7a0ad02c'
                }
            }
        ).then(res => res.json())
            .then(res => setExam(res))
            .then(res => console.log(match))
            .catch(error => console.log(error))
    })
    const handleDelete = (id) => {

        Axios.delete(`http://127.0.0.1:8000/api/exams/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <Router>
            <div>
                <BreadTitle title="Total Exams" />
                <List
                    grid={{ gutter: 15, column: 3 }}
                    dataSource={examlist}
                    renderItem={exam => (
                        <List.Item>
                                    <Card 
                                        hoverable
                                        type="inner"
                                        title={<h2>{exam.exam_name}</h2>}
                                        actions={[
                                            <EditFilled/>,
                                            <DeleteFilled onClick={() => handleDelete(exam.id)} />,
                                        ]}>
                                        <Meta title="Marks" description={exam.exam_marks}></Meta>
                                        <Divider />
                                        <Meta title="Questions" description={exam.no_question}></Meta>
                                        <Divider />
                                        <Meta title="Time" description={exam.exam_time}></Meta>
                                        <Divider />
                                        <Meta title="Published Date" description={exam.exam_date}></Meta>
                                    </Card>
                        </List.Item>
                    )}
                />,
            </div>
        </Router>
    )
}
export default Exam;

import React from 'react';
import {
  Form,
  Input,
  DatePicker,
  InputNumber,
  Button,
} from 'antd';
import axios from 'axios';
import {layout_form, tailLayout} from '../../components/UI/layouts';
import BreadTitle from '../../components/UI/breadTitle';
function CustomForm() {


  const handleFormSubmit = (e) => {
    e.preventDefault();
    let exam_name= e.target[0].value;
    let exam_marks= e.target[1].value;
    let exam_questions= e.target[2].value;
    let exam_time= e.target[3].value;
    let exam_date= e.target[4].value;

    axios.post(`http://127.0.0.1:8000/api/exams/`, {
      exam_name: exam_name,
      exam_marks: exam_marks,
      no_question: exam_questions,
      exam_time: exam_time,
      exam_date: exam_date,
    }, {
      headers: {
        'Authorization': "Token e4aaaebedbf95b9121928204cadb154b7a0ad02c", 
      }
    }).then((res) => {
      console.log(res.data)
    }).catch(err => console.error(err))
    

    
  }

  return (
    <div>
      <BreadTitle title="Add an Exam"/>
      <Form onSubmitCapture={handleFormSubmit}
        {...layout_form}
        layout="horizontal"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input exam name."
            }
          ]}
        >
          <Input name="title" placeholder="Exam Name"  />

        </Form.Item>
        <Form.Item
          label="Marks"
          name="mark"
          rules={[
            {
              required: true,
              message: "Please input exam name."
            }
          ]}
        >
          <InputNumber name="marks" placeholder="Exam mark"  />
        </Form.Item>
        <Form.Item
          label="Total Questions"
          name="question"
          rules={[
            {
              required: true,
              message: "Please input exam name."
            }
          ]}
        >
          <InputNumber name="questions" placeholder="Total question"  />
        </Form.Item>
        <Form.Item
          label="Total Time"
          name="time"
          rules={[
            {
              required: true,
              message: "Please input exam name."
            }
          ]}>
          <InputNumber name="times" placeholder="Exam time period"  />
        </Form.Item>
        <Form.Item label="Date" >
          <DatePicker name="dates" />
        </Form.Item>
        <Form.Item {...tailLayout}> 
          <div id='button'>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>

    </div>
  );
}



export default CustomForm;
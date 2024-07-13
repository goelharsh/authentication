import React, { useState } from 'react'
import { DatePicker, Form, Input, Select } from "antd"
import "./Auth.css"
const { TextArea } = Input;

const Auth = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [option, setOption] = useState(null);
    const [message, setMessage] = useState("");
    const onChange = (date, dateString) => {
        console.log(date, dateString);
        setDate(date)
    };
    const onSelectChange = (value) => {
        console.log(`selected ${value}`);
        setOption(value)
    };
    const handleSubmit = () => {
        const formData = {
            name, email, date, option, message
        }
        console.log(formData)
    }
    return (
        <div className='container'>

            <div className='container-info'>
                <h5 className='contact-us'>Contact Us</h5>
                <h2 className='appointment'>Make an Appointment</h2>

                <div className='form-container'>
                    <Form onSubmitCapture={handleSubmit}>
                        <div className='name-email' style={{gap: '20px', marginBottom:'20px' }}>
                            <Input type='text' placeholder='Full Name*' className='input' value={name} onChange={(e) => setName(e.target.value)} style={{ marginLeft: '20px' }} />
                            <Input type='email' placeholder='Email*' className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='name-email' style={{ marginTop: '40px', gap: '20px', marginBottom:'30px' }}>
                            <Select className='input' placeholder="Please select" options={[
                                { value: 'CSE' },
                                { value: 'ME' }
                            ]}
                            style={{ marginLeft: '20px' }}
                                onChange={onSelectChange}>
                            </Select>
                            <DatePicker className='input' rows={4} onChange={onChange} placeholder="4:00 Available"/>
                        </div>
                        <div>
                            <TextArea className='textarea' value={message} onChange={(e) => setMessage(e.target.value)} style={{marginBottom:'30px'}} placeholder='Message'/>
                        </div>
                        <button type='submit' className='btn'>Book Appointment</button>
                    </Form>
                </div>



            </div>
        </div>
    )
}

export default Auth

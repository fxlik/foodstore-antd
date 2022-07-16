import * as React from 'react'
import {
    LockOutlined,
    UserOutlined,
    MailOutlined
} from '@ant-design/icons'
import { 
    Typography, 
    Row, 
    Col, 
    Form, 
    Input, 
    Button,
    Card,
    Space 
} from 'antd'
import './index.css'
const { Title } = Typography

export default function Register() {
    return (
        <Row type="flex" justify='center' align='middle' style={{minHeight: '100vh'}}>
            <Col span={6}>
                <Card size="large">
                    <div align="center">
                        <Title level={3}>Foodstore</Title>
                    </div>
                    <Form
                        name='basic'
                        initialValues={{remember: true}}
                    >
                        <Form.Item
                            name="full_name"
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder='Nama Lengkap' />
                        </Form.Item>

                        <Form.Item
                            name='email'
                        >
                            <Input 
                                prefix={<MailOutlined className='site-form-item-icon'/>}
                                type='email'
                                placeholder='email'
                            />
                        </Form.Item>

                        <Form.Item name='password'>
                            <Input 
                                prefix={<LockOutlined className='site-form-item-icon' />} 
                                type='password' 
                                placeholder='Password'
                            />
                        </Form.Item>

                        <Form.Item name='konfirmasi_password' >
                            <Input 
                                prefix={<LockOutlined className='site-form-item-icon' />}
                                type='password'
                                placeholder='Konfirmasi Password' 
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type='primary' htmlType='submit' className='login-form-button'
                            >
                                Register
                            </Button>
                        </Form.Item>
                        Sudah punya akun? <a href=''>Masuk Sekarang</a>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}
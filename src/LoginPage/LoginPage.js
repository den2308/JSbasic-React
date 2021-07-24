import { useDispatch } from 'react-redux'
import { Form, Input, Button, Checkbox, Row, Col, notification } from 'antd';
import { useHistory } from "react-router-dom";

import { getUser } from '../store/actions/user'

const LoginPage = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const onFinish = () => {
        dispatch(getUser({ autToken: 'autToken' }))
        history.push("/weather");
    };

    const onFinishFailed = (errorInfo) => {
        notification.error({
            message: 'Login fail',
            description:
                'Please fill the data',
        });
    };

    return (
        <Row align='middle' justify='center'>
            <Col xs={10}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default LoginPage
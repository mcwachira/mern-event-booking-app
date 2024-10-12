
import WelcomeContent from "../components/WelcomeContent.tsx";

import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";

function RegisterPage(props) {

    const onFinish = (value:never) => {
        console.log(values)
    }
    return (
       <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
           <div className="col-span-1 lg:flex hidden">
               <WelcomeContent/>

           </div>

           <div className="h-screen flex items-center justify-center">
            <Form className="flex flex-col gap-5 w-96" layout="vertical" onFinish={onFinish}>

                <h1 className="text-2xl font-bold text-gray-600">
                    Register your accounts
                </h1>

                <Form.Item name='name' required label="Name"
                rules={[{required:true}]}
                >
                    <Input placeholder="Name"/>
                </Form.Item>
                <Form.Item name='email' required label="Email"
                           rules={[{required:true}]}
                >
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item name='password' required label="Password"
                           rules={[{required:true}]}
                >
                    <Input.Password placeholder="Password"/>
                </Form.Item>

                <Button type="primary" htmlType="submit" block>
                    Register
                </Button>

                <Link to='/'>
                        Already have an account ? Login
                </Link>
            </Form>
           </div>
       </div>
    );
}

export default RegisterPage;
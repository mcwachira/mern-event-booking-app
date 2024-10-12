import React from 'react';
import {Button , Input} from 'antd'
import ThemeProvider from "./theme";

function App(props) {
    return (
        <ThemeProvider>
            <div className="h-screen flex justify-center items-center  flex-col gap-5">

                <h1 className=" text-gray-500 text-3xl font-bold leading-tight">
                    Home page
                </h1>

                <Button type="primary">
                    Primary
                </Button>
                <Button type="default">
                    Default
                </Button>

                <Input/>
            </div>
        </ThemeProvider>

    );
}

export default App;
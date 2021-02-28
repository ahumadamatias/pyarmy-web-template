import { TextField } from '@material-ui/core'
import React from 'react'

const Login = () => {
    return (
        <div>
            <form style={{padding: '24px', display: "flex", flexDirection: "column", width: "70%", margin: 'auto'}}>
                <TextField variant="outlined" label="Username"/>
                <TextField type="password" variant="outlined" label="Password"/>
            </form>
        </div>
    )
}

export default Login;

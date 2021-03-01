import { FormControl, TextField,Button} from '@material-ui/core'
import React from 'react'


const Login = () => {
    return (
        <div className="wrapper">
            <div className="mat-card">
                <h1>Sign In</h1>
                <FormControl className ="login-input">
                    <TextField className="item-card" variant="outlined" label="Username"/>
                    <TextField className="item-card" type="password" variant="outlined" label="Password"/>
                </FormControl>
                <div className="btn-submit">
                    <Button variant="contained" color="primary">Sign In</Button>
                </div>
                
            </div>
        </div>
    )
}

export default Login;

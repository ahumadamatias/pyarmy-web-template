import React, { useState } from 'react'
import { FormControl, TextField,Button} from '@material-ui/core'
import { AuthenticationService } from '../../services/authentication.service'

const Register = () => {
    let userModel = {
        username: '',
        email: '',
        fist_name: '',
        last_name: '',
        password: '',
    }

    const [user, setUser] = useState(userModel)

    const handleChange = (e) => {
        e.preventDefault();
        console.log({[e.target.name]: e.target.value})
        setUser({
            ...userModel,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        new AuthenticationService().register(user)
            .then( (data) => {
                localStorage.setItem('jwt', JSON.stringify(data.token));
            })
    }

    return (
        <div className="wrapper">
            <div className="mat-card">
                <h1>SigNup</h1>
                <FormControl className ="login-input" >
                    <TextField className="item-card" name="username" variant="outlined" onChange={handleChange} label="Username"/>
                    <TextField className="item-card" name="email" variant="outlined" onChange={handleChange} label="Email" />
                    <TextField className="item-card" name="first_name" variant="outlined" onChange={handleChange} label="First Name"/>
                    <TextField className="item-card" name="last_name" variant="outlined" onChange={handleChange} label="Last Name"/>
                    <TextField className="item-card" name="password" type="password" variant="outlined" onChange={handleChange} label="Password"/>
                </FormControl>
                <div className="btn-submit">
                    <Button onClick={handleSubmit} variant="contained" color="primary">SigNup</Button>
                </div>

            </div>
        </div>
    )
}

export default Register;

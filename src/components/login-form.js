import React from 'react';
import Password from './password';
import SubmitButton from './submitbutton';
import Username from './username';
import Navbar from './navbar';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <div className="row">
                    <div className="col-sm-4 d-flex align-items-sm-center" id="center">
                        <h3 className="display-4 background">Login</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6" id="centerform">
                        
                        <Username /> 
                        <Password />
                        <br></br>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <SubmitButton />
                </div>
            </div>
        </div>
        )
    }
}
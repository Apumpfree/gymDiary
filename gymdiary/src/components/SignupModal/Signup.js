import React, { Component } from "react";
import API from "../../utils/API";


class Signup extends Component {

    // toDO
    // change state to display and close modal.

    state = {
        name: "",
        email: "",
        emailVerify: "",
        password: "",
        passwordVerify: ""
    };

    // modalState = event => {
    //     const modalState = false;
    //     if(modalState === false){function(){

    //     }}
    // }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Login form submitted");
        console.log("name: " + this.state.name);
        console.log("email: " + this.state.email);
        console.log("emailV: " + this.state.emailVerify);
        console.log("password: " + this.state.password);
        console.log("passwordV: " + this.state.passwordVerify);
        
        API.createUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }).then(    
            this.setState({
                name: "",
                email: "",
                emailVerify: "",
                password: "",
                passwordVerify: "",
            })            
        )
    };
    render() {
        return (
            <div id="signupModal" class="modal ">
                <div class="modal-background "></div>
                <div class="modal-content has-background-white-ter">
                    <div class="field">
                        <label class="label ">Name</label>
                        <div class="control has-icons-left">
                            <input
                                class="input"
                                type="text"
                                placeholder="Jane Doe"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left">
                            <input
                                class="input"
                                type="email"
                                placeholder="Weight@TargetRep.com"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />

                        </div>
                        <p class="help">We will never release your email without permission.</p>
                    </div>
                    <div class="field">
                        <label class="label has-icons-left">Verify Email</label>
                        <div class="control">
                            <input
                                class="input"
                                type="email"
                                placeholder="Weight@TargetRep.com"
                                name="emailVerify"
                                value={this.state.emailVerify}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label has-icons-left">Password</label>
                        <div class="control">
                            <input
                                class="input"
                                type="text"
                                placeholder="******"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />

                        </div>
                        <p class="help">Must be at least 6 characters long.</p>
                    </div>
                    <div class="field">
                        <label class="label has-icons-left">Verify password</label>
                        <div class="control">
                            <input
                                class="input"
                                type="text"
                                placeholder="******"
                                name="passwordVerify"
                                value={this.state.passwordVerify}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div class="control">
                    <button class="button is-primary" onClick={this.handleFormSubmit} value="submit" >Submit</button>
                </div>
                <button id="closeModalButton" class="modal-close is-large" aria-label="close"></button>
            </div>
        );
    };
}

export default Signup;
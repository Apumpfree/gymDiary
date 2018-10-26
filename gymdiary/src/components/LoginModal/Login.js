import React, { Component } from "react";

class Login extends Component {

    // toDO
    // change state to display and close modal.

    state = {
        email: "",
        password: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Login form submitted");
        console.log("email: " + this.state.email);
        console.log("password: " + this.state.password);
        this.setState({ email: "", password: "" });
    };

    render() {
        return (
            <div id="loginModal" class="modal">
                <div class="modal-background"></div>
                <div class="modal-content has-background-white-ter">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left" action="auth/Login" method="post">
                            <input
                                class="input"
                                type="email"
                                placeholder="Weight@TargetRep.com"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                            </span>
                            
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control has-icons-left">
                            <input
                                class="input"
                                type="password"
                                placeholder="******"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="control">
                    <button class="button is-primary" onClick={this.handleFormSubmit} value="submit" >Submit</button>
                </div>
                <button id="closeButtonModal" class="modal-close is-large" aria-label="close"></button>
            </div>

        );
    }
}
export default Login;
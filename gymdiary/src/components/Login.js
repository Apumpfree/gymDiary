import React from "react";


const Login = () => (

    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                    <input class="input" type="email" placeholder="Weight@TargetRep.com"></input>
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="******"></input>
                </div>
            </div>
        </div>
        <div class="control">
            <button class="button is-primary">Submit</button>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>

);

export default Login;
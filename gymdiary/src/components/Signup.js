import React from "react";


const Signup = () => (

    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="field">
                <label class="label ">Name</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Jane Doe"></input>
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                    <input class="input" type="email" placeholder="Weight@TargetRep.com"></input>
                </div>
                <p class="help">We will never release your email without permission.</p>
            </div>
            <div class="field">
                <label class="label has-icons-left">Verify Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="Weight@TargetRep.com"></input>
                </div>
            </div>
            <div class="field">
                <label class="label has-icons-left">Password</label>
                <div class="control">
                    <input class="input" type="text" placeholder="******"></input>
                </div>
                <p class="help">Must be at least 6 characters long.</p>
            </div>
            <div class="field">
                <label class="label has-icons-left">Verify password</label>
                <div class="control">
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

export default Signup;
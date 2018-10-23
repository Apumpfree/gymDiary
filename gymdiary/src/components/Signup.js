import React from "react";


const Signup = () => (

    <div class="modal fade" id="signup" tabindex="-1" role="dialog" aria-labelledby="signupTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="signupTitle">Signup</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputName">Name</label>
                            <input type="text" class="form-control" id="exampleInputName" aria-describedby="textHelp" placeholder="Enter Name"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Verify Email address</label>
                            <input type="email" class="form-control" id="verifyEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Verify Password</label>
                            <input type="password" class="form-control" id="verifyPassword" placeholder="Verify Password"></input>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">I am not a robot</label>
                        </div>
                        
                    </form>
                </div>
                <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>

);

export default Signup;
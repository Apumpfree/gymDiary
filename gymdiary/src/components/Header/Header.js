import React from "react";


const Header = () => (
    <nav class="navbar has-background-grey" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <strong>Target Rep</strong>
                <br></br>
                <img src="/images/benchPressIcon.png"></img>
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                {/* needs navbar-start and navbar end */}
                    
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a id="signupButton" class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a id="loginButton" class="button is-light">
                            <strong>Log in</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    
);

export default Header;
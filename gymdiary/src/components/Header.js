import React from "react";


const Header = () => (
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Target Rep</span>
        <form class="form-inline float-right">
            <button class="btn btn-outline-success" data-toggle="modal" data-target="#login" type="button">Login</button>
            <button class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#signup" type="button">Sign Up!</button>
        </form>
    </nav>

);

export default Header;
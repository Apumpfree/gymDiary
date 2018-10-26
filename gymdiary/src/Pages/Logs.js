import React, { Component } from "react";



class Logs extends Component {

    render() {
        return (
            <div>
                <div class="columns">
                    <div class="box column">
                        <figure class="image is-128x128">
                            <img src="../images/chest.jpg" />
                        </figure>
                    </div>
                    <div class="box column">
                        <figure class="image is-128x128">
                            <img src="../images/runner.jpg" />
                        </figure>
                    </div>
                    <div class="box column">
                        <figure class="image is-128x128">
                            <img src="../images/back.jpg" />
                        </figure>
                    </div>
                </div>
                <br/>
                <div class="columns">
                    <div class="box column">
                        <figure class="image is-128x128">
                            <img src="../images/legs.jpg" />
                        </figure>
                    </div>
                    <div class="box column">
                        <figure class="image is-128x128">
                            <img src="../images/arms2.jpg" />
                        </figure>
                    </div>
                    <div class="box column">
                        <figure class="image is-128x128">
                            <img src="../images/core.jpg" />
                        </figure>
                    </div>
                </div>
            </div>
        );
    };
}
export default Logs;
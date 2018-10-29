import React, { Component } from "react";



class Logs extends Component {

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="box column">
                        <figure className="image is-128x128">
                            <img src="../images/chest.jpg" alt="" />
                        </figure>
                    </div>
                    <div className="box column">
                        <figure className="image is-128x128">
                            <img src="../images/runner.jpg" alt="" />
                        </figure>
                    </div>
                    <div className="box column">
                        <figure className="image is-128x128">
                            <img src="../images/back.jpg" alt="" />
                        </figure>
                    </div>
                </div>
                <br/>
                <div className="columns">
                    <div className="box column">
                        <figure className="image is-128x128">
                            <img src="../images/legs.jpg" alt="" />
                        </figure>
                    </div>
                    <div className="box column">
                        <figure className="image is-128x128">
                            <img src="../images/arms2.jpg" alt="" />
                        </figure>
                    </div>
                    <div className="box column">
                        <figure className="image is-128x128">
                            <img src="../images/core.jpg" alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        );
    };
}
export default Logs;
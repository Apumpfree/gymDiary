import React, { Component } from "react";


class Courses extends Component {

    render() {
        return (
            <div class="column">
                {/* row 1 */}
                <div class="level">
                    <div class="box column is-one-third">
                        <img src="/images/benchPressIcon.png"></img>
                    </div>
                    <div class="box column is-one-third">
                        box 2
                            </div>
                    <div class="box column is-one-third">
                        <img src="/images/benchPressIcon.png"></img>
                    </div>
                </div>
                {/* row 2 */}
                <div class="level">
                    <div class="box column is-one-third">
                        <img src="/images/benchPressIcon.png"></img>
                    </div>
                    <div class="box column is-one-third">
                        <img src="/images/benchPressIcon.png"></img>
                    </div>
                    <div class="box column is-one-third">
                        <img src="/images/benchPressIcon.png"></img>
                    </div>
                </div>
                {/* row 3 */}
                <div class="level">
                </div><div class="level">
                    <div class="box column is-one-third">
                        <img src="/images/icons8-ereader-50.png"></img>
                    </div>
                    <div class="box column is-one-third">
                        <img src="/images/icons8-ereader-50.png"></img>
                    </div>
                    <div class="box column is-one-third">
                        <img src="/images/icons8-ereader-50.png"></img>
                    </div>
                </div>
            </div>               
        );
    };
}
export default Courses;
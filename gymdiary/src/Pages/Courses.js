import React, { Component } from "react";


class Courses extends Component {

    

    render() {
        return (
            // <div class="column">
            //     {/* row 1 */}
            //     <div class="level">
            //         <div class="box column is-one-third">
            //             <img src="/images/benchPressIcon.png"></img>
            //         </div>
            //         <div class="box column is-one-third">
            //         <img src="/images/benchPressIcon.png"></img>
            //         </div>
            //         <div class="box column is-one-third">
            //             <img src="/images/benchPressIcon.png"></img>
            //         </div>
            //     </div>
            //     {/* row 2 */}
            //     <div class="level">
            //         <div class="box column is-one-third">
            //             <img src="/images/benchPressIcon.png"></img>
            //         </div>
            //         <div class="box column is-one-third">
            //             <img src="/images/benchPressIcon.png"></img>
            //         </div>
            //         <div class="box column is-one-third">
            //             <img src="/images/benchPressIcon.png"></img>
            //         </div>
            //     </div>
            //     {/* row 3 */}
            //     <div class="level">
            //     </div><div class="level">
            //         <div class="box column is-one-third">
            //             <img src="/images/icons8-ereader-50.png"></img>
            //         </div>
            //         <div class="box column is-one-third">
            //             <img src="/images/icons8-ereader-50.png"></img>
            //         </div>
            //         <div class="box column is-one-third">
            //             <img src="/images/icons8-ereader-50.png"></img>
            //         </div>
            //     </div>
            // </div>
        <div class="column">
            <div class='carousel carousel-animated carousel-animate-slide' data-size="5">
                <div class='carousel-container'>
                    <div class='carousel-item is-active'>
                        <div class="box column is-one-third">
                            <img src="/images/benchPressIcon.png"></img>
                        </div>
                    </div>
                    <div class='carousel-item'>
                        <div class="box column is-one-third">
                            <img src="/images/benchPressIcon.png"></img>
                            
                        </div>
                    </div>
                    <div class='carousel-item'>

                    </div>
                    <div class='carousel-item'>
                    
                    </div>
                    <div class='carousel-item'>
                    
                    </div>
                    <div class='carousel-item'>
                    
                    </div>
                    <div class='carousel-item'>
                    
                    </div>
                </div>
                <div class="carousel-navigation is-centered">
                    <div class="carousel-nav-left">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </div>
                    <div class="carousel-nav-right">
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        );
    };
}
export default Courses;
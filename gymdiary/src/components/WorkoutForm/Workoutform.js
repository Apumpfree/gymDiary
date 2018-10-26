import React from "react";

// toDO
    // change state to display and close modal.
    // change to component react setup

const Workoutlog = () => (

    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">

            <label class="label">Target Muslce Group</label>
            {/* Muscle dropdown */}
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Target Muscle</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            {/* use another component to create differnt muscle listings */}
                            <div class="select">
                                <select>
                                    <option>Muscle 1</option>
                                    <option>Muscle 2</option>
                                    <option>Muscle 3</option>
                                    <option>Muscle 4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* reps */}
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Reps</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="100"></input>
                        </div>
                        <p class="help">Total repetitions.</p>
                    </div>
                </div>
            </div>
            {/* weight */}
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Weight</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="100"></input>
                        </div>
                        <p class="help">Weight in kgs.</p>
                    </div>
                </div>
            </div>

            {/* submit / cancel buttons */}
            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                    <a class="button is-primary">
                        Submit
                    </a>
                </p>
                <p class="control">
                    <a class="button is-light">
                        Cancel
                    </a>
                </p>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>

);

export default Workoutlog;
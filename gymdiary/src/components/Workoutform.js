import React from "react";


const Workoutlog = () => (

    <div class="modal fade" id="workout" tabindex="-1" role="dialog" aria-labelledby="workoutTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="workoutTitle">Workout Log</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Target Muscles</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <input type="integer" class="form-control" placeholder="10">Repetitions</input>
                            </div>
                            <div class="col">
                                <input type="integer" class="form-control" placeholder="5">Sets</input>
                            </div>
                            <div class="col">
                                <input type="integer" class="form-control" placeholder="50 kgs">Weight (kgs)</input>
                            </div>
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

export default Workoutlog;
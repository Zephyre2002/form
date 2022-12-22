import React from "react";

function Password() {
    return (
        <div>
            <h1>Cosmopolitan Portal</h1>
            <div className="class col-md-5 my-3 p-5">
                <form>
                    <div className="cla mb-3">
                        <label for="exampleInputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="email" required />
                    </div>
                    <div className=" cla mb-3">
                        <label for="exampleInputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="password" required />
                    </div>
                    <div className=" cla mb-3">
                        <label for="exampleInputPassword" className="form-label">Re-enter Password</label>
                        <input type="password" className="form-control" id="password" placeholder="password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Password;
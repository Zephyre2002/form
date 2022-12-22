import React, { useState } from "react";
import swal from "sweetalert";
import { Link } from 'react-router-dom'

function Login() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(({ ...inputs, [name]: value }))
    };

    const checkForm = (inputs) => {
        let exists = JSON.parse(localStorage.getItem("formDatas"));
        if (exists !== null) {
            let check = exists.find(rec => rec.Email === inputs.Email || rec.Telephone === inputs.Telephone);
            if (!check) {
                clearField();
                swal("Successful login", "Welcome", "success");
            } else {
                swal("Wrong Credentials", "Please try again", "error");
            };
        } else {
            swal("Successful login", "Welcome", "success");
        };
    };

    const clearField = () => {
        document.querySelector('#email').value = "";
        document.querySelector('#password').value = "";
    }

    const handleValidate = (e) => {
        e.preventDefault();
        checkForm();
    }

    return (
        <div className="App-header">
            <h1>Cosmopolitan Portal</h1>
            <div className="class col-md-5 my-3 p-5">
                <form onSubmit={handleValidate}>
                    <div className="cla mb-3">
                        <label for="exampleInputEmail" className="form-label">Email</label>
                        <input type="email" name="Email" value={inputs.Email || ""} className="form-control" id="email" placeholder="email" onChange={handleChange} required />
                    </div>
                    <div className=" cla mb-3">
                        <label for="exampleInputPassword" className="form-label">Password</label>
                        <input type="password" name="Password" value={inputs.Password || ""} className="form-control" id="password" placeholder="password" onChange={handleChange} required />
                    </div>
                    <span className="psw"><Link to='/create'>Create Account</Link></span>|
                    <span className="psw"><Link to='/password'>Forgot password</Link></span>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
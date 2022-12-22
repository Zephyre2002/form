import React, { useState } from "react";
import swal from "sweetalert";
// import {Link} from 'react-router-dom';

function Create() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(({ ...inputs, [name]: value }))
    }

    const clearField = () => {
        document.querySelector('#fname').value = "";
        document.querySelector('#lname').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#password').value = "";
        document.querySelector('#phone').value = "";
    }

    const storeData = () => {
        let formDatas;
        if (localStorage.getItem("formDatas") === null) {
            formDatas = [];
        } else {
            formDatas = JSON.parse(localStorage.getItem("formDatas"));
        };

        formDatas.push(inputs);

        localStorage.setItem("formDatas", JSON.stringify(formDatas));
    };

    const checkForm = (inputs) => {
        let exists = JSON.parse(localStorage.getItem("formDatas"));
        if (exists !== null) {
            let check = exists.find(rec => rec.Email === inputs.Email || rec.Telephone === inputs.Telephone);
            if (!check) {
                storeData(inputs);
                clearField();
                swal("Account Created", "Welcome", "success");
            } else {
                swal("Account already exists", "Please try again", "error");
            };
        } else {
            storeData(inputs);
            swal("Account Created", "Welcome", "success");
        };
    };

    const handleValidate = (e) => {
        e.preventDefault();
        console.log(inputs);
        checkForm(inputs);
    }

    return (
        <div className="">
            <h1>Cosmopolitan Portal</h1>
            <div className="class col-md-5 my-3 p-5">
                <form onSubmit={handleValidate}>
                    <div className="cla mb-3">
                        <label for="exampleInputFirstName" className="form-label">FirstName</label>
                        <input type="text" name="FirstName" value={inputs.FirstName || ""} className="form-control" id="fname" placeholder="firstname" onChange={handleChange} required />
                    </div>
                    <div className="cla mb-3">
                        <label for="exampleInputLastName" className="form-label">LastName</label>
                        <input type="text" name="LastName" value={inputs.LastName || ""} className="form-control" id="lname" placeholder="lastname" onChange={handleChange} required />
                    </div>
                    <div className="cla mb-3">
                        <label for="exampleInputEmail" className="form-label">Email</label>
                        <input type="email" name="Email" value={inputs.Email || ""} className="form-control" id="email" placeholder="email" onChange={handleChange} required />
                    </div>
                    <div className=" cla mb-3">
                        <label for="exampleInputPassword" className="form-label">Password</label>
                        <input type="password" name="Password" value={inputs.Password || ""} className="form-control" id="password" placeholder="password" onChange={handleChange} required />
                    </div>
                    <div className="cla mb-3">
                        <label for="exampleInputPhone" className="form-label">Telephone</label>
                        <input type="tel" name="Telephone" value={inputs.Telephone || ""} className="form-control" id="phone" placeholder="phone" onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;
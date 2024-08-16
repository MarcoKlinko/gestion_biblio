import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";

const RegisterPage = () => {

    document.title = "Register"
    
    return <div className={`${style.register__container}`}>
                <form className="border border-success rounded p-5">
                    <fieldset className="w-100">
                        <legend className="text-center">Register</legend>
                        <div>
                            <label for="full_name" className="form-label mt-4">Full name</label>
                            <input type="text" className="form-control" id="full_name"  placeholder="Votre nom complet" />
                        </div>
                        <div>
                            <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
                        </div>
                        <div>
                            <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off" />
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="form-control btn btn-md btn-info mb-2" >Register now</button>
                            <span className="mt-2">Already have an account ? <Link to="/login" className="text-success nav-link d-inline "> <b>Sign in</b>  </Link></span>
                        </div>
                    </fieldset> 
                </form>
            </div>
}

export default RegisterPage;
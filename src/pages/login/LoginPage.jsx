import React from "react";

import { Link } from "react-router-dom";
import style from "./style.module.css";

const LoginPage = () => {

    document.title = "Login | ZOZY EEEEE"
    
    return  <div className={`${style.login__container}`}>
                <form className="border border-success rounded p-5">
                    <fieldset className="w-100">
                        <legend className="text-center">Se connecter</legend>
                        <div>
                            <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
                        </div>
                        <div>
                            <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off" />
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="form-control btn btn-md btn-info mb-2" >Sign in</button> 
                            <span>Don't have an account ? <Link to="/register" className="text-info nav-link d-inline"><b> SingUp </b></Link></span>
                        </div>
                    </fieldset> 
                </form>
        </div>
}

export default LoginPage;
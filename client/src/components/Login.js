import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] =useState("");
    const [passwod,setPassword] =useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, passwod });
      };
  return (
    <div><h1>Task Manager</h1>
       <section class="vh-100">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid" alt="image"/>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form onSubmit={handleSubmit}>
                        <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p class="lead fw-normal mb-3 me-3">Sign In</p>
                        </div>
                        <div class="form-outline mb-3">
                            <label class="form-label" for="input-email">Email Address</label>
                            <input type="email"  value={email}
                  onChange={(e) => setEmail(e.target.value)} id="input-email" name="email" class="form-control form-control-lg"
                                placeholder="Enter a valid email address" />
                        </div>
                        <div class="form-outline mb-3">
                            <label class="form-label" for="input-passwod">Password</label>
                            <input type="password" value={passwod} onChange={(e)=>setPassword(e.target.value)} id="input-passwod" name="password"
                                class="form-control form-control-lg" placeholder="Enter password" />

                        </div>
                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" class="btn btn-primary btn-lg"
                            style={{paddingLeft:"2.5rem",paddingRight:"2.5rem"}}
                                >Login</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/sign-up"
                                    class="link-danger">Register</a></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>

  )
}

export default Login
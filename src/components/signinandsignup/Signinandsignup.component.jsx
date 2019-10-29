
import React from "react"

import "./signinandsignup.styles.scss"

import Signin from "../../components/signin/Signin.component.jsx"

import Signup from "../../components/signup/SignUp.component"

const Signinandsignup =() => {
    return(
<div className = "sign-in-and-sign-up">
<Signin/> 
<Signup/>
</div>
    )
}

export default Signinandsignup ;
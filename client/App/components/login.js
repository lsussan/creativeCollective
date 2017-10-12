
import React, { Component } from "react"


const login = () => (
 
  <div className="container">
  <div className="field">
    <h3 className="loginHeader">Log in</h3> 
    <label>E-mail</label>
    <input type="text" name="e-mail" placeholder="E-mail">
  </input>
  </div>
  
 

  <div className="field">
    <label>Last Name</label>
    <input type="text" name="last-name" placeholder="Last Name">
  </input>
  </div>

  <div className="field">
    <div className="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden">
      <label>I agree to the Terms and Conditions</label>
    </input>
  </div>
  <button className="ui button" type="submit">Submit</button>
  </div>
</div>
)


export default login
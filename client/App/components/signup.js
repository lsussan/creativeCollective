
import React from 'react'

import Nav from './Nav'

const signup = () => (
<div className="signup-container">
  <Nav/>
    <div className="three fields">
        <label>First name</label>
        <input type="text" placeholder="First Name">
      </input>
        <label>Middle name</label>
        <input type="text" placeholder="Middle Name">
      </input>
        <label>Last name</label>
        <input type="text" placeholder="Last Name">
      </input>
  <label>Username</label>
   <input type="text" placeholder="Username">
      </input>
        <label>Password</label>
       <input type="password">
      </input>
    </div>
   <div className="inline fields">
      <label for="fruit">Select your favorite fruit:</label>
        <div className="ui radio checkbox">
          <input type="radio" name="fruit" checked="" tabindex="0" class="hidden">
          <label>Apples</label>
        </input>
          <input type="radio" name="fruit" tabindex="0" class="hidden">
          <label>Oranges</label>
        </input>
          <input type="radio" name="fruit" tabindex="0" class="hidden">
          <label>Pears</label>
        </input>
         </div>
      </div>
    </div>

)

    
 export default signup
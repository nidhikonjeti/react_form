
import './App.css';
import { validateEmail } from './utils';
import {useState} from "react";

const PasswordErrorMessage=()=>{
  return (
    <p className='FieldError'>password should have atleast 8 characters</p>
  )
}

function App() {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState(
    {
      value:"",
      isTouched:false
    }
  );
  const [role,setRole]=useState("role");

  const getIsFormValid=()=>{

  return (
    firstName &&
    validateEmail(email) &&
    password.value.length >=8 &&
    role!=='role'
  );

  };

  const clearForm=()=>{
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword({
      value:"",
      isTouched:false
    })
    setRole("role");
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("account created");
    clearForm();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          <div className='Field'>
            <label>
              First Name<sup>*</sup>
            </label>
            <input type="text"
            value={firstName}
            onChange={e=>setFirstName(e.target.value)}
            placeholder="First Name"/>
            </div>


            <div className='Field'>
              <label>Last name</label>
            <input 
            type="text"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Last Name"/>
            </div>


            <div className='Field'>
              <label>Email<sup>*</sup></label>
              <input 
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              placeholder="Email address"/>
          </div>


          <div className='Field'>
            <label>
              password<sup>*</sup>

            </label>
            <input
            type="password"
            value={password.value}
            onChange={(e)=>{
              setPassword({...password,value:e.target.value});

            }}
            onBlur={()=>{
              setPassword({...password,isTouched:true})
            }}
            placeholder="password"/>
            {password.isTouched && password.value.length<8 ? (<PasswordErrorMessage/>) : null}
          </div>


          <div className='Field'>
            <label>Role <sup>*</sup></label>
            <select value={role} onChange={(e)=>setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">individual</option>
              <option value="business">business</option>
            </select>
          </div>


          <button type="submit" disabled={!getIsFormValid}>
            create account
          </button>
        </fieldset>
      </form>
    
    </div>
  );
}

export default App;

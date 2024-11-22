import { useState } from "react";
import "../Styles/LoginSignup.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
    });
  
    const navigate = useNavigate(); // React Router's hook for navigation
  
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      console.log(`Name: ${name}, Value: ${value}`); // Debugging
    
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async () => {
      console.log("Form data:", formData);
        try {
          if (action === "Login") {
            // Send login request
            const response = await axios.post("http://localhost:5000/api/login", {
              email: formData.email,
              password: formData.password,
            });
      
            if (response.status === 200) {
              // Login successful, navigate to dashboard
              navigate("/dashboard");
            }
          } else {
            // Send registration request
            const response = await axios.post("http://localhost:5000/api/register", {
              username: formData.username,
              email: formData.email,
              password: formData.password,
            });
      
            if (response.status === 201) {
              // Registration successful
              alert("Registration successful! Please log in.");
              setAction("Login"); // Switch to login view
            }
          }
        } catch (error: unknown) {
          if (axios.isAxiosError(error)) {
            // Narrowed down to AxiosError
            alert(error.response?.data.message || "An error occurred. Try again.");
          } else if (error instanceof Error) {
            // Handle generic errors
            alert(error.message);
          } else {
            // Handle unexpected errors
            alert("An unexpected error occurred. Please try again later.");
          }
        }
      };
      
    return (
      <div className="container">
        <div className="header">
          <div className="text"> {action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
          )}
  
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
  
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
  
        {action === "Login" && (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}
  
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
  
        <button className="action-button" onClick={handleSubmit}>
          {action === "Login" ? "Login" : "Register"}
        </button>
      </div>
    );
  };
  
  export default LoginSignup;

// const LoginSignup = () => {

//     const [action, setAction] = useState("Login");
    


//     return (
//         <div className="container">
//             <div className="header">
//                 <div className="text"> {action}</div>
//                 <div className="underline"> </div>
//             </div>
//             <div className="inputs">

//                 {action === "Login" ? <div> </div> : <div className="input">
//                     <img src={user_icon} alt="" />
//                     <input type="email" placeholder="Username" />
//                 </div>}



//                 <div className="input">
//                     <img src={email_icon} alt="" />
//                     <input type="email" placeholder="Email address" />
//                 </div>
               
//                 <div className="input">
//                     <img src={password_icon} alt="" />
//                     <input type="password" placeholder="Password" />
//                 </div>
               
//             </div>
                    
//             {action==="Sign Up"? <div> </div>: <div className="forgot-password"> Lost Password? <span> Click Here!</span>
//                 </div>}
                
//             <div className="submit-container">
//                 <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction('Sign Up') }}> Sign Up</div>
//                 <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction('Login') }}> Login </div>
//             </div>
//         </div>
//     );
// };



// export default LoginSignup;



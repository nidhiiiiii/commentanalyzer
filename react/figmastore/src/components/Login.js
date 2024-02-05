// import React,{useState,useEffect} from "react";
// import LoadingButton from "./Loginbutton";
// async function Login(){
//     try{
//         await fetch('http://localhost:3000/login')
//     }catch{
//         console.log("error")
//     }
//     return(
//         <>
//         <section>
//         <div id="qrcode-container"></div>
//         <img id="qrImage" className="qr-image" alt="qr-code"/>
//         </section>
//         <LoadingButton/>
//         <div className="login">
//             <h1>
//                 hello
//             </h1>
//         </div>
//         </>
        
//     )
// }
// export default Login;
// import React, { useEffect } from 'react';

// function Login() {
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('http://localhost:3000/login');
//         // Do something with the response data if needed
//         console.log('Login API call successful');
//       } catch (error) {
//         console.error('Error occurred:', error);
//       }
//     }

//     fetchData();
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <div class="login-card">
//         <button type=' 
//         submit' onClick={fetchData}>Submit</button>
//     </div>
//   );
// }

// export default Login;
// import React, { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import '../components/Login.css'

// const Login = () => {
//         const navigate = useNavigate();
      
//         // useEffect(() => {
//         //   const timer = setTimeout(() => {
//         //     navigate("/message");
//         //   }, 20000);
      
//         //   return () => clearTimeout(timer);
//         // }, [navigate]);
//  const [qrCode, setQrCode] = useState("");

//   const handleLogin = async () => {
//     try {
//       await fetch('http://localhost:3000/login');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//       <div className="login-container">
//         <div className="main-container">
//           <h1>Login Page</h1>
//         </div>
//         <h1>Please scan your QR code to login.</h1>
//       </div>
      
//       {qrCode && <img src={qrCode} alt="QR Code" />}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import '../components/Login.css';
import LoadingButton from "./Loginbutton";
// import { getQR } from './whatsapp';

const Login = () => {
  // const navigate = useNavigate();
  const [qrCode, setQrCode] = useState(""); 
  
  const handleLogin = async () => {
    try {
    console.log("handleLogin is working")
      const response = await fetch('http://localhost:3000/login');
      if (response.ok) {
        const data = await response.json();
        setQrCode(data.qrCode); 
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="container">
      <div className="login-container">
        <br/>
      <div className="scan-qr">Please scan your QR code to login.</div>
      <br/>
        <div className="main-container"> 
          {/* <h1>Login Page</h1> */}
        </div>
        <br/>
        <LoadingButton/>
      </div>
      {qrCode && <img src={qrCode} alt="QR Code" />} 
    </div>
  );
};

export default Login;


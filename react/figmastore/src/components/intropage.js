import React , {useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';
// function IntroPage(){
    
//         const[showWelcome,setShowWelcome]=useState(true);
//         useEffect(()=>{
//           const timer =setTimeout(()=>{
//             setShowWelcome(false);
//           },5000);
//           return()=>clearTimeout(timer);
//         },[]);
//         return (
//         <div className="welcome">
//       {showWelcome ? (
//         <div>
//           <p>Welcome to headless WhatsApp</p>
//         </div>
//       ) : (
//         <Redirect to="/login" />
//       )}
//     </div>
//   );
      
// }
// export default IntroPage;

import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="welcome">
      <p>hello welcome to  headless whatsapp</p>
    </div>
  );
};

export default IntroPage;

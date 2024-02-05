// import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import './Login.css'
// import handleLogin from './Login'
// function LoadingButton() {
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     function simulateNetworkRequest() {
//       return new Promise((resolve) => setTimeout(resolve, 2000));
//     }

//     if (isLoading) {
//       simulateNetworkRequest().then(() => {
//         setLoading(false);
//       });
//     }
//   }, [isLoading]);

//   const handleClick = () => setLoading(true);

//   return (
//     <Button className='loading-button'
//       variant="primary"
//       disabled={isLoading}
//       onClick={!isLoading ? handleClick : handleLogin}
//       // onClick={handleLogin}
//     >
//       {isLoading ? 'logging you in' : 'login'}
//     </Button>
//   );
// }

// export default LoadingButton;
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const LoadingButton = ({ handleLogin }) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    handleLogin(); // Call handleLogin function from the Login component
  };

  return (
    <Button
      className='loading-button'
      variant="primary"
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? 'logging you in' : 'login'}
    </Button>
  );
};

export default LoadingButton;
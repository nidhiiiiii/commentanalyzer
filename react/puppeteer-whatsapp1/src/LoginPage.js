// LoginPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginPage = () => {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await axios.get("http://localhost:3000/qr");
        setQrCode(response.data);
      } catch (error) {
        console.error("Error fetching QR code", error);
      }
    };
    fetchQRCode();
  }, []);

  return (
    <div className=".main-container">
      <h1>Login Page</h1>
      <button onClick={loginQR}>Login</button>
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>

  );
};

const loginQR = async () => {
  try {
    await axios.get("http://localhost:3000/login");
  } catch (error) {
    console.error("Error logging in", error);
  }
};

export default LoginPage;

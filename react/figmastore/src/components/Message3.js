import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './Message.css';
import axios from 'axios';

const Message = () => {
  const [individualMessage, setIndividualMessage] = useState('');
  const [bulkMessage, setBulkMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const sendMessage = async () => {
    const data = {
      customerMobile: document.getElementById("receiver").value,
      customMessage: document.getElementById("msg").value,
    };

    document.getElementById("alert-content").innerText = "Sending Message...";
    document.getElementById("successAlert").style.display = "block";
    setTimeout(() => {
      document.getElementById("successAlert").style.display = "none";
    }, 3000);

    var send_btn = document.getElementById("send");
    send_btn.style.display = "none";

    try {
      await axios.post("http://localhost:3000/message", data);
      console.log("Message sent successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBulkMessageSend = async () => {
    const array = document.getElementById("csv-data").value.split("\n");
    const header = array.split(",");
    if (header === "phone_number") {
      const data = { users: array, message_template: document.getElementById("msg-template").value, };
      console.log(data);

      try {
        document.getElementById("alert-content").innerText = "Message Sending Sequence Started!";
        document.getElementById("successAlert").style.display = "block";
        setTimeout(() => {
          document.getElementById("successAlert").style.display = "none";
        }, 3000);

        const response = await axios.post("http://localhost:3000/bulk-messages", data);
        console.log(response.data);
        document.getElementById("alert-content").innerText = "All Messages Sent!";
        document.getElementById("successAlert").style.display = "block";
        setTimeout(() => {
          document.getElementById("successAlert").style.display = "none";
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    } else {
      document.getElementById("fail-alert-content").innerText = "The csv data is not in the mentioned format :";
      document.getElementById("failAlert").style.display = "block";
      setTimeout(() => {
        document.getElementById("failAlert").style.display = "none";
      }, 3000);
    }
  };

  return (
    <div className='message-page-main'>
      <h1>hello this is message</h1>
      <div className='individual-msg'>
        <form>
          <label>Message <input type='text' placeholder='enter text'></input></label>
          <button type='submit'>send</button>
          <br/>
          <label>Messages <input type='text' placeholder='enter text'></input></label>
        </form>
        <div className='message'></div>
        <button id="send" onClick={sendMessage}> Send </button>
      </div>
      <div>
        <input type="text" id="receiver" placeholder="Enter receiver number" />
        <textarea id="msg" placeholder="Enter message"></textarea>
        <button id="send" onClick={sendMessage}> Send </button>
      </div>
      <div>
        <input type="file" id="file-upload" onChange={handleFileUpload} />
      </div>
      <div>
        <textarea id="csv-data" placeholder="Enter CSV data"></textarea>
        <textarea id="msg-template" placeholder="Enter message template"></textarea>
        <button id="upload" onClick={handleBulkMessageSend}> Send Bulk Messages </button>
        <div id="failAlert" className="alert fail">
          <span className="closebtn">&times;</span>
          <strong>Failed!</strong>
          <span id="fail-alert-content"></span>
        </div>
      </div>
    </div>
  );
};

export default Message;
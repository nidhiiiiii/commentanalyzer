import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import './Message.css'
// import { toast } from 'react-hot-toast';
import toast, { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = () => {
  const [receiver, setReceiver] = useState('');
  const [message, setMessage] = useState('');
  const [csvFile, setCsvFile] = useState(null);
  const [msgTemplate, setMsgTemplate] = useState('');
  const [individualAlert, setIndividualAlert] = useState('');
  const [bulkAlert, setBulkAlert] = useState('');

  const sendMessage = async () => {
    try {
      const data = {
        customerMobile: receiver,
        customMessage: message,
      };
      setIndividualAlert('Sending Message...');
      const response = await axios.post('http://localhost:3000/message', data);
      console.log(response.data);
      toast.success('Message sent successfully!');
      // setTimeout(() => {
      //   setIndividualAlert('');
      // }, 3000);
    } catch (error) {
      console.error('Error sending message', error);
      toast.error('Failed to send message');
      setTimeout(() => {
        setIndividualAlert('');
      }, 3000);
    }
  };

  const handleBulkMessageSend = async () => {
    if (!csvFile) {
      setBulkAlert('The CSV file is not uploaded :(');
      setTimeout(() => {
        setBulkAlert('');
      }, 3000);
      return;
    }
    const formData = new FormData();
    formData.append('file', csvFile);
    try {
      setBulkAlert('Message Sending Sequence Started!');
      const response = await axios.post('http://localhost:3000/bulk-messages', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setBulkAlert('All Messages Sent!');
      setTimeout(() => {
        setBulkAlert('');
      }, 3000);
    } catch (error) {
      console.error('Error sending bulk messages', error);
      setBulkAlert('Failed to send bulk messages');
      setTimeout(() => {
        setBulkAlert('');
      }, 3000);
    }
  };

  const handleFileUpload = (event) => {
    setCsvFile(event.target.files[0]);
  };

  return (
    <div className='message-main' id='message-main'>
    {/* <div>Message Page</div> */}
    <div>
    <h2>individual Message</h2>
    <div className='individual-message'>
        <input className='phn-number'
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          placeholder="Receiver's mobile number"/>
        <textarea className='individual-message-box'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message">
        </textarea>
        {/* <button onClick={sendMessage}>Send Message</button>
        {individualAlert && <div>{individualAlert}</div>} */}
      </div>
      {/* <div className='send-button'>
      </div> */}
      <button className='send-button' onClick={sendMessage}>Send Message</button>
        {individualAlert && <div>{individualAlert}</div>}
        <ToastContainer/>
    </div>
    <div>
    <h2>Bulk Message</h2>
    <div className='bulk-message'>
          <input className='csv-upload' type="file" accept=".csv" onChange={handleFileUpload} 
          /> 
          <textarea className='bulk-message'
            value={msgTemplate}
            onChange={(e) => setMsgTemplate(e.target.value)}
            placeholder="Enter message template"
          ></textarea>
          {/* <button onClick={handleBulkMessageSend}>Send Bulk Messages</button>
          {bulkAlert && <div>{bulkAlert}</div>} */}
      </div>
      <button className='send-button' onClick={handleBulkMessageSend}>Send Bulk Messages</button>
          {bulkAlert && <div>{bulkAlert}</div>}
          <ToastContainer/>
    </div>
    </div>
  );
};

export default Message;


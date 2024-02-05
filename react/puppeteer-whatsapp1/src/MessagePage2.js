import React, { useState } from 'react';
import axios from 'axios';


const Message = () => {
  const [receiver, setReceiver] = useState('');
  const [message, setMessage] = useState('');
  const [csvFile, setCsvFile] = useState(null);
  const [msgTemplate, setMsgTemplate] = useState('');
  const [alert, setAlert] = useState('');

  const sendMessage = async () => {
    try {
      const data = {
        customerMobile: receiver,
        customMessage: message,
      };
      setAlert('Sending Message...');
      const response = await axios.post('http://localhost:3000/message', data);
      console.log(response.data);
      setAlert('Message sent successfully!');
      setTimeout(() => {
        setAlert('');
      }, 3000);
    } catch (error) {
      console.error('Error sending message', error);
      setAlert('Failed to send message');
      setTimeout(() => {
        setAlert('');
      }, 3000);
    }
  };

  const handleBulkMessageSend = async () => {
    if (!csvFile) {
      setAlert('The CSV file is not uploaded :(');
      setTimeout(() => {
        setAlert('');
      }, 3000);
      return;
    }
    const formData = new FormData();
    formData.append('file', csvFile);
    try {
      setAlert('Message Sending Sequence Started!');
      const response = await axios.post('http://localhost:3000/bulk-messages', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setAlert('All Messages Sent!');
      setTimeout(() => {
        setAlert('');
      }, 3000);
    } catch (error) {
      console.error('Error sending bulk messages', error);
      setAlert('Failed to send bulk messages');
      setTimeout(() => {
        setAlert('');
      }, 3000);
    }
  };

  const handleFileUpload = (event) => {
    setCsvFile(event.target.files[0]);
  };

  return (
    <div>
      <h1>Message Page</h1>
      <div>
        <input
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          placeholder="Receiver's mobile number"
        />
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        ></input>
        <button onClick={sendMessage}>Send Message</button>
        {alert && <div>{alert}</div>}
      </div>
      <div>
        <h2>Bulk Message</h2>
        <div>
          <input type="file" accept=".csv" onChange={handleFileUpload} />
          <input
            value={msgTemplate}
            onChange={(e) => setMsgTemplate(e.target.value)}
            placeholder="Enter message template"
          ></input>
          <button onClick={handleBulkMessageSend}>Send Bulk Messages</button>
          {alert && <div>{alert}</div>}
        </div>
      </div>
    </div>
  );
};

export default Message;

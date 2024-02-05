import React, { useState } from 'react';
import axios from 'axios';

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
      setIndividualAlert('Message sent successfully!');
      setTimeout(() => {
        setIndividualAlert('');
      }, 3000);
    } catch (error) {
      console.error('Error sending message', error);
      setIndividualAlert('Failed to send message');
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
    <div>
      <h1>Message Page</h1>
      <div>
        <input
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          placeholder="Receiver's mobile number"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        ></textarea>
        <button onClick={sendMessage}>Send Message</button>
        {individualAlert && <div>{individualAlert}</div>}
      </div>
      <div>
        <h2>Bulk Message</h2>
        <div>
          <input type="file" accept=".csv" onChange={handleFileUpload} />
          <textarea
            value={msgTemplate}
            onChange={(e) => setMsgTemplate(e.target.value)}
            placeholder="Enter message template"
          ></textarea>
          <button onClick={handleBulkMessageSend}>Send Bulk Messages</button>
          {bulkAlert && <div>{bulkAlert}</div>}
        </div>
      </div>
    </div>
  );
};

export default Message;

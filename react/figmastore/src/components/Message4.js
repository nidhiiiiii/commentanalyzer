// Message2.js

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
    <div className='message-main'>
        <p>1</p>
    </div>
  );
};

export default Message;

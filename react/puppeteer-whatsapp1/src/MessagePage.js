// // MessagePage.js
// import React, { useState } from "react";
// import axios from "axios";

// const MessagePage = () => {
//   const [receiver, setReceiver] = useState("");
//   const [message, setMessage] = useState("");
//   const [alert, setAlert] = useState("");

//   const sendMessage = async () => {
//     try {
//       const data = {
//         customerMobile: receiver,
//         customMessage: message,
//       };
//       setAlert("Sending Message...");
//       const response = await axios.post("http://localhost:3000/message", data);
//       console.log(response.data);
//       setAlert("Message sent successfully!");
//       setTimeout(() => {
//         setAlert("");
//       }, 3000);
//     } catch (error) {
//       console.error("Error sending message", error);
//       setAlert("Failed to send message");
//       setTimeout(() => {
//         setAlert("");
//       }, 3000);
//     }
//   };

//   return (
//     <div>
//       <h1>Message Page</h1>
//       <input
//         type="text"
//         value={receiver}
//         onChange={(e) => setReceiver(e.target.value)}
//         placeholder="Receiver's mobile number"
//       />
//       <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Enter your message"
//       ></textarea>
//       <button onClick={sendMessage}>Send Message</button>
//       {alert && <div>{alert}</div>}
//     </div>
//   );
// };

// export default MessagePage;
import React, { useState } from 'react';
import axios from 'axios';

const Message = () => {
  const [receiver, setReceiver] = useState('');
  const [message, setMessage] = useState('');
  const [csvData, setCsvData] = useState('');
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
    const array = csvData.split('\n').map((row) => row.split(','));
    const header = array[0];
    if (header[0] === 'phone_number') {
      const data = {
        users: array,
        message_template: msgTemplate,
      };
      try {
        setAlert('Message Sending Sequence Started!');
        const response = await axios.post('http://localhost:3000/bulk-messages', data);
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
    } else {
      setAlert('The CSV data is not in the mentioned format :(');
      setTimeout(() => {
        setAlert('');
      }, 3000);
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = async (e) => {
      const csv = e.target.result;
      const array = CSVToArray(csv);
      setCsvData(array);
    };
    reader.readAsText(file);
  };

  const CSVToArray = (data, delimiter = ',', omitFirstRow = false) => {
    const lines = data.split('\n');
    const result = [];
    lines.forEach((line) => {
      const values = line.split(delimiter);
      if (omitFirstRow) {
        values.shift();
      }
      result.push(values);
    });
    return result;
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };
//   return (
//     <div>
//       <h1>Message Page</h1>
//       <div>
//         <input
//           type="text"
//           value={receiver}
//           onChange={(e) => setReceiver(e.target.value)}
//           placeholder="Receiver's mobile number"
//         />
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Enter your message"
//         ></textarea>
//         <button onClick={sendMessage}>Send Message</button>
//         {alert && <div>{alert}</div>}
//       </div>
//       <div>
//         <textarea
//           value={csvData}
//           onChange={(e) => setCsvData(e.target.value)}
//           placeholder="Enter CSV data"
//         ></textarea>
//         <textarea
//           value={msgTemplate}
//           onChange={(e) => setMsgTemplate(e.target.value)}
//           placeholder="Enter message template"
//         ></textarea>
//         <button onClick={handleBulkMessageSend}>Send Bulk Messages</button>
//         {alert && <div>{alert}</div>}
//       </div>
//     </div>
//   );
// };
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
      {alert && <div>{alert}</div>}
    </div>
    <div>
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
      {/* <textarea
        value={csvData}
        onChange={(e) => setCsvData(e.target.value)}
        placeholder="Enter CSV data"
      ></textarea> */}
      <textarea
        value={msgTemplate}
        onChange={(e) => setMsgTemplate(e.target.value)}
        placeholder="Enter message template"
      ></textarea>
      <button onClick={handleBulkMessageSend}>Send Bulk Messages</button>
      {alert && <div>{alert}</div>}
    </div>
    {/* <div>
      <input type="file" onChange={handleFileUpload} />
    </div> */}
    {/* <div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border border-dashed border-gray-300 rounded-md px-4 py-2 text-gray-500 cursor-pointer"
      >
        Drag and drop CSV file here or click to upload
      </div>
    </div> */}
  </div>
);
};

export default Message;


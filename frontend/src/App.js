import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [url, setUrl] = useState('');
  const [download, setDownload] = useState(false);
  const [commentsData, setCommentsData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const handleUrlChange = (event) => {
  //   setUrl(event.target.value);
  // };
  const handleUrlChange = (event) => {
    const url = event.target.value;
    const regex = /https?:\/\/(www\.)?instagram\.com\/p\/[a-zA-Z0-9_\-]+\/?/;
    if (!regex.test(url)) {
      alert('Please enter a valid Instagram URL');
      return;
    }
    setUrl(url);
  };
  const handleDownloadChange = (event) => {
    setDownload(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (url === '') {
      alert('Please enter URL');
      return;
    }
    setIsLoading(true);
    setIsSubmitted(true);
  };
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8000/api/analyze', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ url, download }),
  //       });
  //       const data = await response.json();
  //       setCommentsData(data.result);
  //     } catch (error) {
  //       console.error('Error fetching analysis results', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   if (isSubmitted) {
  //     fetchData();
  //     setIsSubmitted(false);
  //   }
// }, [isSubmitted, url, download]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url, download }),
        });
        const data = await response.json();
        setCommentsData(data.result);
        if (download) {
          // Create a link to download the CSV file
          const link = document.createElement('a');
          link.href = 'http://localhost:8000/static/analysis_results.csv';
          link.download = 'analysis_results.csv';
          link.click();
        }
      } catch (error) {
        console.error('Error fetching analysis results', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    if (isSubmitted) {
      fetchData();
      setIsSubmitted(false);
    }
  }, [isSubmitted, url, download]);



  return (
    <div>
      <div className='header'>
        <h1>INSTAGRAM COMMENT SENTIMENT ANALYZER</h1>
        <div className='main'>
          <form onSubmit={handleSubmit}>
            <input type='text' className='url-input' placeholder='enter url here...' onChange={handleUrlChange}></input>
            <label className='download'>
              Download:
              <input type="checkbox" checked={download} onChange={handleDownloadChange} />
            </label>
            <button type='submit' className='button'>submit</button>
          </form>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Comment</th>
                  <th>Sentiment</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(commentsData).map(([comment, sentiment] ) => (
                  <tr key={comment} className='table-row'>
                    <td>{comment}</td>
                    <td>{sentiment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

  // const [commentsData, setCommentsData] = useState([
  //   { comment: '🔥👏', sentiment: 'neutral' },
  //   { comment: '🔥', sentiment: 'neutral' },
  //   { comment: 'How exact', sentiment: 'positive' },
  //   { comment: 'Truth 🔥', sentiment: 'neutral' },
  //   { comment: 'Your an inspiration @discodeta', sentiment: 'neutral' },
  //   { comment: '👏👏👏', sentiment: 'neutral' },
  //   { comment: '@sturdybeerenovations', sentiment: 'neutral' },
  //   { comment: 'Yes. They should always build you up.', sentiment: 'neutral' },
  //   { comment: 'Powerful words! 🥹♥️ It’s all about surrounding yourself with people who lift you higher!! Time to evaluate and elevate your circle. 🙏🏼✨', sentiment: 'positive' },
  // ]);

import React, { useState } from 'react';
import ChatGPT from '../utils/ChatGPT';

function AnalysisComponent() {
  const [response, setResponse] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const chatbot = new ChatGPT();
    const response = await chatbot.getRecruiterEmail(process.env.REACT_APP_DUMMY_RESUME, process.env.REACT_APP_DUMMY_JOB_APPLICATION);
    setResponse(response);
  }

  return (
        //Connor put the text fields inbetween the opening Form tag and the
    <div>
      <form onSubmit={handleSubmit}>

        <button className='btn btn-primary'>Get Response</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default AnalysisComponent;
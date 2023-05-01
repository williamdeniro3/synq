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
    <div>
      <form onSubmit={handleSubmit}>
        <div class="row d-flex align-items-center">
          <div class="col-sm-6 pr-sm-1">
            <textarea class="form-control-lg" rows="10" placeholder='Resume Detail'></textarea>
            <textarea class="form-control-lg" rows="10" placeholder='Job Description'></textarea>
          </div>
          <div class="col-sm-4 pl-sm-1">
            <button class='btn btn-primary btn-block'>Get Response</button>
          </div>
        </div>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default AnalysisComponent;
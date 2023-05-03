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
        <div class="container">
          <div class="row">
            <div class="col-md-6">
            <label>Resume</label>
              <div class="form-group">
                <textarea class="form-control-lg" id="resume_area" rows="10" placeholder='Copy and paste your resume Here.'></textarea>
              </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Job Description</label>
                    <textarea class="form-control-lg" id="jd_area" rows="10" placeholder='Copy and paste the job description you are applying for here.'></textarea>
                </div>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col-lg-12 d-flex align-items-center justify-content-center mb-5">
                <button class='btn btn-primary'>Get Response</button>
            </div>
          </div>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default AnalysisComponent;
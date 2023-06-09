import React, { useState } from 'react';
import ChatGPT from '../utils/ChatGPT';

function AnalysisComponent() {
  const [response, setResponse] = useState('');

  async function handleSubmit(event, type) {
    event.preventDefault();
    const chatbot = new ChatGPT();
    if (type === 'recruiterEmail'){
      var response = await chatbot.getRecruiterEmail(process.env.REACT_APP_DUMMY_RESUME, process.env.REACT_APP_DUMMY_JOB_APPLICATION);
    }else if(type === 'linkedInSummary'){
       response = await chatbot.getLinkedInSummary(process.env.REACT_APP_DUMMY_RESUME, process.env.REACT_APP_DUMMY_JOB_APPLICATION);
    }else if(type ==='resumeBullets'){
       response = await chatbot.getTailoredBulletPoints(process.env.REACT_APP_DUMMY_RESUME, process.env.REACT_APP_DUMMY_JOB_APPLICATION);
    }
    else if (type === 'coverLetter'){
       response = await chatbot.getCoverLetter(process.env.REACT_APP_DUMMY_RESUME, process.env.REACT_APP_DUMMY_JOB_APPLICATION);
    }
    
    
      setResponse(response);

  }

  return (
    <div>
      <form >
        <div class="container">
          <div class="row">
            <div class="col-md-5">
            <label className='text-white display-5 text-center mb-5'>Resume</label>
              <div class="form-group">
                <textarea class="form-control-lg" id="resume_area" rows="10" placeholder='Copy and paste your resume Here.'></textarea>
              </div>
            </div>
            <div class="col-md-5">
                <div class="form-group">
                    <label className='text-white display-5 mb-5 text-nowrap'>Job Description</label>
                    <textarea class="form-control-lg" id="jd_area" rows="10" placeholder='Copy and paste the job description you are applying for here.'></textarea>
                </div>
            </div>
            <div class="col-md-2 mt-5">
                <div class="row">
                  <div class="col-lg-12 d-flex align-items-center justify-content-center mb-5">
                    <button class='btn btn-primary' onClick={(e) => handleSubmit(e,'recruiterEmail')}>Recruiter Email</button>
                </div>
              </div>
              <div class="row">
                  <div class="col-lg-12 d-flex align-items-center justify-content-center mb-5">
                  <button class='btn btn-primary' onClick={(e) => handleSubmit(e,'linkedInSummary')}>LinkedIn Summary</button>
                </div>
              </div>
              <div class="row">
                  <div class="col-lg-12 d-flex align-items-center justify-content-center mb-5">
                  <button class='btn btn-primary' onClick={(e) => handleSubmit(e,'resumeBullets')}>Resume Optimization</button>
                </div>
              </div>
              <div class="row">
                  <div class="col-lg-12 d-flex align-items-center justify-content-center mb-5">
                  <button class='btn btn-primary' onClick={(e) => handleSubmit(e,'coverLetter')}>Cover Letter</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </form>
      {response &&
      <div className='custom-light-purple p-5'>
        <p className='text-white'>{response}</p>
      </div>
      }
    </div>
  );
}

export default AnalysisComponent;
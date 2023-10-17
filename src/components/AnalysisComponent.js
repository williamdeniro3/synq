import React, { useState } from 'react';
import ChatGPT from '../utils/ChatGPT';
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import {
  FormGroup,
  Label,
  Input,
  Spinner,

} from "reactstrap";

function AnalysisComponent() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [resumeText, setResumeText] = useState(''); // State variable for resume input
  const [jobDescription, setJobDescription] = useState(''); // State variable for job description input

  async function handleSubmit(event, type) {
    setResponse("");
    setLoading(true);
    event.preventDefault();
    scrollToBottom();

    const chatbot = new ChatGPT();
    if (type === 'recruiterEmail') {
      var response = await chatbot.getRecruiterEmail(resumeText, jobDescription);
    } else if (type === 'linkedInSummary') {
      response = await chatbot.getLinkedInSummary(resumeText, jobDescription);
    } else if (type === 'resumeBullets') {
      response = await chatbot.getTailoredBulletPoints(resumeText, jobDescription);
      console.log('got the response')
    }
    else if (type === 'coverLetter') {
      response = await chatbot.getCoverLetter(resumeText, jobDescription);
    }
    setResponse(response);
    setLoading(false);
    scrollToBottom();

  }

  const parseContent = (content) => {
    const sections = content.split('\n\n');
    
    return sections.map((section, index) => {
      const lines = section.trim().split('\n');
      
      return (
        <div key={index}>
           {lines[0] && <h4>{lines[0]}</h4>}
          <ul>
            {lines.slice(1).map((line, i) => (
              <li key={i}>{line.trim().startsWith('- ') ? line.trim().substring(2) : line.trim()}</li>
            ))}
          </ul>
        </div>
      );
    });
  };

  const scrollToBottom = (ref) => {
    setTimeout(function () {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 250);
  }

  return (
    <div>
     <IndexNavbar />

      <form >
        <div class="container pt-5">
          <div class="row pt-5">
            <div class="col-md-5">
              <FormGroup className="form-group-lg" style={{ height: '800px' }} >
                <Label for="exampleText">Resume</Label>
                <Input type="textarea" name="text" rows="20" onChange={(e) => setResumeText(e.target.value)} // Update the state variable
                />
              </FormGroup>
            </div>
            <div class="col-md-5">
              <FormGroup>
                <Label for="exampleText">Job Description</Label>
                <Input type="textarea" name="text" rows="20" id="exampleText" onChange={(e) => setJobDescription(e.target.value)} // Update the state variable
                />
              </FormGroup>
            </div>
            <div class="col-md-2 mt-5">
              <div class="row">
                <div class="col-lg-12 d-flex align-items-center justify-content-center mb-5">
                  <button class='btn btn-primary' onClick={(e) => handleSubmit(e, 'recruiterEmail')}>Recruiter Email</button>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 d-flex align-items-center justify-content-center mb-5">
                  <button class='btn btn-primary' onClick={(e) => handleSubmit(e, 'linkedInSummary')}>LinkedIn Summary</button>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 d-flex align-items-center justify-content-center mb-5">
                  <button class='btn btn-primary' onClick={(e) => handleSubmit(e, 'resumeBullets')}>Resume Optimization</button>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 d-flex align-items-center justify-content-center mb-5">
                  <button class='btn btn-primary' onClick={(e) => handleSubmit(e, 'coverLetter')}>Cover Letter</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {loading === true &&
        <div>
          <div className='custom-light-purple p-5'>
            <h1 className='text-white'>GENERATING RESPONSE ....</h1>
          </div>
          <Spinner>
            Loading...
          </Spinner>
        </div>
      }
      {response &&
        <div className="p-5">
          <blockquote className="blockquote btn-primary">
            <p className="mb-0">{parseContent(response)}</p>
          </blockquote>
          Not what you were looking for? Try generating again!
        </div>
      }
    </div>
  );
}

export default AnalysisComponent;
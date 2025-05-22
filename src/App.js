import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [resume, setResume] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');

    try {
      const response = await axios.post('http://localhost:5000/analyze', {
        resume,
        jobDesc
      });
      setFeedback(response.data.feedback);
    } catch (error) {
      setFeedback('Something went wrong. Try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>JobGenie - AI Resume Screener</h1>
      <form onSubmit={handleSubmit}>
        <label>Paste your Resume:</label>
        <textarea
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          placeholder="Enter your resume text..."
          required
        />
        <label>Paste the Job Description:</label>
        <textarea
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          placeholder="Enter the job description..."
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Get Feedback'}
        </button>
      </form>
      {feedback && (
        <div className="results">
          <h2>AI Feedback</h2>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}

export default App;

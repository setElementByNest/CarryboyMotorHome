import React, { useState } from 'react';
import axios from 'axios';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('/api/send-email', {
        email,
        subject,
        body
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to send email');
    }
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Recipient Email" required />
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Email Body (HTML)" required />
        <button type="submit" disabled={isLoading}>Send Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EmailForm;

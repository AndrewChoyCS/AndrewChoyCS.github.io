import React from 'react';

const Contact = () => {
  const handleEmailClick = () => {
    const emailAddress = 'your-email@example.com';
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>You can reach me via email:</p>
      <button onClick={handleEmailClick}>Send Email</button>
    </div>
  );
};

export default Contact;
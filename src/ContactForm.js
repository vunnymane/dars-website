import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you for reaching out! We will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: '0 auto', background: 'rgba(255,255,255,0.95)', padding: 24, borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h2 style={{ color: '#FFD76A', marginBottom: 16 }}>Contact Us</h2>
      <div style={{ marginBottom: 18, color: '#181818', fontSize: 16, lineHeight: 1.6 }}>
        <div><b>Phone:</b> <a href="tel:+1234567890" style={{ color: '#FFD76A', textDecoration: 'none' }}>+1 (234) 567-890</a></div>
        <div><b>Email:</b> <a href="mailto:info@darsinitiative.org" style={{ color: '#FFD76A', textDecoration: 'none' }}>info@darsinitiative.org</a></div>
      </div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #FFD76A', marginBottom: 12 }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #FFD76A', marginBottom: 12 }}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        rows={5}
        style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #FFD76A', marginBottom: 12, resize: 'vertical' }}
      />
      <button type="submit" style={{ background: '#FFD76A', color: '#181818', fontWeight: 'bold', border: 'none', borderRadius: 6, padding: '10px 24px', fontSize: 18, cursor: 'pointer', width: '100%' }}>
        Send
      </button>
      <div style={{ marginTop: 16, color: '#181818', fontSize: 15 }}>{status}</div>
    </form>
  );
} 
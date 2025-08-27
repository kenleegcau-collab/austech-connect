'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '', business: '', website: '', suburb: '', email: '', mobile: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const tokenResponse = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY, { action: 'submit' });
      const payload = { ...form, recaptcha: tokenResponse };

      const res = await fetch('/.netlify/functions/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setMessage('Thanks — we received your request. Check your email for next steps.');
        setForm({ name: '', business: '', website: '', suburb: '', email: '', mobile: '' });
        if (window.fbq) window.fbq('track', 'Lead');
        if (window.gtag) window.gtag('event', 'conversion', { send_to: 'GA_MEASUREMENT_ID' });
      } else {
        setMessage(json.error || 'There was an issue — try again.');
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error — try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 max-w-lg mx-auto" id="lead-form">
      <h3 className="text-xl font-bold mb-4">Get listed — $247 AUD</h3>
      <div className="grid grid-cols-1 gap-4">
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="border p-2 rounded"/>
        <input name="business" placeholder="Business Name" value={form.business} onChange={handleChange} required className="border p-2 rounded"/>
        <input name="website" placeholder="Website URL" value={form.website} onChange={handleChange} className="border p-2 rounded"/>
        <input name="suburb" placeholder="Suburb" value={form.suburb} onChange={handleChange} className="border p-2 rounded"/>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="border p-2 rounded"/>
        <input name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} className="border p-2 rounded"/>
      </div>
      <button type="submit" disabled={loading} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
        {loading ? 'Submitting…' : 'Submit'}
      </button>
      {message && <p className="mt-3 text-center text-green-600">{message}</p>}
    </form>
  );
}

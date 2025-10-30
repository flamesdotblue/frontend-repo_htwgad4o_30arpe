import React, { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import TemplateControls from './components/TemplateControls.jsx';
import OtpEmailPreview from './components/OtpEmailPreview.jsx';
import Footer from './components/Footer.jsx';

function buildEmailHTML({ name, company, support, otp, expiresIn, brandColor, dark }) {
  const bg = dark ? '#0b1220' : '#f5f7fb';
  const card = dark ? '#121a2b' : '#ffffff';
  const text = dark ? '#e5e7eb' : '#111827';
  const sub = dark ? '#9ca3af' : '#6b7280';

  const safe = (v, fallback = '') => (v == null || v === '' ? fallback : String(v));
  const _name = safe(name, 'there');
  const _company = safe(company, 'Your Company');
  const _support = safe(support, 'support@example.com');
  const _otp = safe(otp, '123456');

  return `<!doctype html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${_company} verification code</title>
</head>
<body style="margin:0;background:${bg};font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${bg};padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="background:${card};border-radius:16px;box-shadow:${dark ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.08)'};overflow:hidden;">
          <tr>
            <td style="padding:32px 32px 8px 32px;text-align:center;">
              <div style="display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:12px;background:${brandColor}20;color:${brandColor};font-weight:900;font-size:18px;">${_company[0]}</div>
              <div style="font-weight:600;margin-top:10px;color:${text};font-size:18px;">${_company}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 32px 32px;">
              <p style="margin:0;color:${sub};font-size:14px;">Hi ${_name},</p>
              <h2 style="margin:8px 0 0 0;color:${text};font-size:20px;font-weight:700;">Your one-time passcode</h2>
              <p style="margin:8px 0 0 0;color:${sub};font-size:14px;">Use the code below to securely continue. It expires in ${expiresIn} minutes.</p>
              <div style="margin:24px 0 0 0;text-align:center;border:1px solid ${brandColor}55;border-radius:12px;background:${brandColor}10;padding:16px;">
                <div style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-weight:800; color:${brandColor}; font-size:28px; letter-spacing:0.35em;">${_otp}</div>
              </div>
              <p style="margin:24px 0 0 0;color:${sub};font-size:12px;line-height:1.6;">If you didn’t request this code, you can safely ignore this email or contact us at ${_support}.</p>
              <p style="margin:24px 0 0 0;color:${sub};font-size:12px;text-align:center;">© ${new Date().getFullYear()} ${_company}. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export default function App() {
  const [name, setName] = useState('Jamie');
  const [company, setCompany] = useState('Acme Inc');
  const [support, setSupport] = useState('support@acme.com');
  const [otpLength, setOtpLength] = useState(6);
  const [otp, setOtp] = useState('482913');
  const [expiresIn, setExpiresIn] = useState(10);
  const [brandColor, setBrandColor] = useState('#4f46e5');
  const [dark, setDark] = useState(false);

  const subject = useMemo(() => `${company} verification code: ${otp}`, [company, otp]);

  const handleCopyHTML = async () => {
    const html = buildEmailHTML({ name, company, support, otp, expiresIn, brandColor, dark });
    await navigator.clipboard.writeText(html);
    alert('Email HTML copied to clipboard');
  };

  const handleCopySubject = async () => {
    await navigator.clipboard.writeText(subject);
    alert('Subject copied to clipboard');
  };

  return (
    <div className={dark ? 'min-h-screen bg-[#0b1220] text-white' : 'min-h-screen bg-gray-50 text-gray-900'}>
      <Header />
      <TemplateControls
        name={name}
        setName={setName}
        company={company}
        setCompany={setCompany}
        support={support}
        setSupport={setSupport}
        otp={otp}
        setOtp={setOtp}
        otpLength={otpLength}
        setOtpLength={setOtpLength}
        expiresIn={expiresIn}
        setExpiresIn={setExpiresIn}
        brandColor={brandColor}
        setBrandColor={setBrandColor}
        dark={dark}
        setDark={setDark}
        onCopyHTML={handleCopyHTML}
        onCopySubject={handleCopySubject}
      />

      <OtpEmailPreview
        name={name}
        company={company}
        support={support}
        otp={otp}
        expiresIn={expiresIn}
        brandColor={brandColor}
        dark={dark}
      />

      <Footer />
    </div>
  );
}

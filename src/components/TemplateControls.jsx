import React from 'react';
import { RefreshCw, Copy, Sun, Moon } from 'lucide-react';

export default function TemplateControls({
  name,
  setName,
  company,
  setCompany,
  support,
  setSupport,
  otp,
  setOtp,
  otpLength,
  setOtpLength,
  expiresIn,
  setExpiresIn,
  brandColor,
  setBrandColor,
  dark,
  setDark,
  onCopyHTML,
  onCopySubject,
}) {
  const generateOTP = () => {
    const length = Number(otpLength) || 6;
    const digits = '0123456789';
    let code = '';
    for (let i = 0; i < length; i++) code += digits[Math.floor(Math.random() * digits.length)];
    setOtp(code);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 pt-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Brand</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="text-xs text-gray-500 dark:text-gray-400">Company</label>
              <input value={company} onChange={e => setCompany(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" placeholder="Acme Inc" />
            </div>
            <div>
              <label className="text-xs text-gray-500 dark:text-gray-400">Primary color</label>
              <input type="color" value={brandColor} onChange={e => setBrandColor(e.target.value)} className="mt-1 h-10 w-full cursor-pointer rounded-lg border border-gray-300 bg-white p-1 dark:border-gray-700 dark:bg-gray-800" />
            </div>
            <div>
              <label className="text-xs text-gray-500 dark:text-gray-400">Theme</label>
              <button onClick={() => setDark(!dark)} className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                {dark ? <Moon size={16} /> : <Sun size={16} />} {dark ? 'Dark' : 'Light'}
              </button>
            </div>
            <div className="col-span-2">
              <label className="text-xs text-gray-500 dark:text-gray-400">Support email</label>
              <input value={support} onChange={e => setSupport(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" placeholder="support@acme.com" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Content</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="text-xs text-gray-500 dark:text-gray-400">Recipient name</label>
              <input value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" placeholder="Jamie" />
            </div>
            <div>
              <label className="text-xs text-gray-500 dark:text-gray-400">OTP length</label>
              <select value={otpLength} onChange={e => setOtpLength(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
                {[4,5,6,7,8].map(n => <option key={n} value={n}>{n} digits</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 dark:text-gray-400">Expires in</label>
              <select value={expiresIn} onChange={e => setExpiresIn(Number(e.target.value))} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
                {[5,10,15,20,30].map(n => <option key={n} value={n}>{n} minutes</option>)}
              </select>
            </div>
            <div className="col-span-2 grid grid-cols-[1fr_auto] gap-2">
              <div>
                <label className="text-xs text-gray-500 dark:text-gray-400">Current OTP</label>
                <input value={otp} onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, otpLength))} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 tracking-[0.3em] text-center text-lg font-semibold outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" />
              </div>
              <button onClick={generateOTP} className="self-end inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 active:bg-indigo-800">
                <RefreshCw size={16} /> Generate
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button onClick={onCopySubject} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800">
          <Copy size={16} /> Copy subject
        </button>
        <button onClick={onCopyHTML} className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black dark:bg-white dark:text-gray-900">
          <Copy size={16} /> Copy HTML
        </button>
      </div>
    </section>
  );
}

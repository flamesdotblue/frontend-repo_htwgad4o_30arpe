import React from 'react';

export default function OtpEmailPreview({ name, company, support, otp, expiresIn, brandColor, dark }) {
  const bg = dark ? '#0b1220' : '#f5f7fb';
  const card = dark ? '#121a2b' : '#ffffff';
  const text = dark ? '#e5e7eb' : '#111827';
  const sub = dark ? '#9ca3af' : '#6b7280';

  return (
    <section className="mx-auto max-w-5xl px-6 py-6">
      <div className="rounded-2xl border border-gray-200 bg-white/70 p-4 dark:border-gray-800 dark:bg-gray-900/70">
        <div className="rounded-xl" style={{ backgroundColor: bg }}>
          <div className="mx-auto max-w-2xl px-6 py-10">
            <div className="mb-6 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: brandColor + '20' }}>
                <span className="text-xl font-black" style={{ color: brandColor }}>{company?.[0]?.toUpperCase() || 'C'}</span>
              </div>
              <h2 className="mt-3 text-lg font-semibold" style={{ color: text }}>{company || 'Your Company'}</h2>
            </div>

            <div className="rounded-2xl shadow" style={{ backgroundColor: card, boxShadow: dark ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.08)' }}>
              <div className="px-6 py-8">
                <p className="text-sm" style={{ color: sub }}>Hi {name || 'there'},</p>
                <h3 className="mt-2 text-xl font-semibold" style={{ color: text }}>Your one-time passcode</h3>
                <p className="mt-2 text-sm" style={{ color: sub }}>Use the code below to securely continue. It expires in {expiresIn} minutes.</p>

                <div className="mt-6 rounded-xl border px-5 py-4 text-center" style={{ borderColor: brandColor + '55', background: brandColor + '10' }}>
                  <div className="font-mono text-3xl tracking-[0.35em]" style={{ color: brandColor, fontWeight: 800 }}>{otp || '123456'}</div>
                </div>

                <p className="mt-6 text-xs" style={{ color: sub }}>
                  If you didn’t request this code, you can safely ignore this email or contact us at {support || 'support@example.com'}.
                </p>

                <div className="mt-8 text-center text-xs" style={{ color: sub }}>
                  © {new Date().getFullYear()} {company || 'Your Company'}. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Mail, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/70 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow">
          <Mail size={20} />
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100 flex items-center gap-2">
            OTP Email Template Builder <Sparkles className="text-yellow-500" size={18} />
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Design and copy a polished one-time passcode email in seconds.</p>
        </div>
      </div>
    </header>
  );
}

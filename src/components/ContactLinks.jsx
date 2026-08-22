import React, { useState } from 'react';
import gemail from  '../assets/socials/email.png';
import github from  '../assets/socials/github.png';
import linked_in from  '../assets/socials/linked_in.png';




export default function ContactLinks() {
  const email = 'joresonmark@gmail.com';
  const githubUrl = 'https://github.com/your-username';
  const linkedinUrl = 'https://linkedin.com/in/your-username';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      // fallback for environments without clipboard permission
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-transparent px-10 py-10 flex items-center justify-center gap-[clamp(0.85rem,12.3vw,12.2rem)]">
      {/* Github */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 group"
      >
        <img src={github} alt="" />
        <p className="text-white font-semibold text-sm">Github</p>
        <p className="text-neutral-400 text-xs group-hover:text-white transition-colors flex items-center gap-1">
          View My Profile <span>↗</span>
        </p>
      </a>

      {/* Gmail */}
      <button
        type="button"
        onClick={handleCopyEmail}
        className="flex flex-col items-center gap-2 group focus:outline-none"
      >
        <div className="w-12 h-12 flex items-center justify-center">
           <img src={gemail} alt="" />
        </div>
        <p className="text-white font-semibold text-sm">Gmail</p>
        <p className="text-neutral-400 text-xs group-hover:text-white transition-colors">
          {copied ? 'Copied!' : email}
        </p>
      </button>

      {/* LinkedIn */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 group"
      >
        <div className="w-12 h-12 rounded-md bg-[#0A66C2] flex items-center justify-center">
           <img src={linked_in} alt="" />
        </div>
        <p className="text-white font-semibold text-sm">Linked In</p>
        <p className="text-neutral-400 text-xs group-hover:text-white transition-colors flex items-center gap-1">
          View My Profile <span>↗</span>
        </p>
      </a>
    </div>
  );
}
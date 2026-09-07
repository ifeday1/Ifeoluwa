/* eslint-disable react/prop-types */
import { useState } from 'react';

const CopyEmailButton = ({ email, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={handleCopy}
      className={`bg-linear-to-r from-coral to-amber text-[#1A0E06] font-sans text-[13px] font-bold px-6 py-3 rounded-full transition-transform duration-200 hover:scale-[1.04] ${className}`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

export default CopyEmailButton;

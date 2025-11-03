'use client';

import { useMemo, useState } from 'react';
import { CopySimple, Check, ShareNetwork, TwitterLogo, LinkedinLogo, FacebookLogo, LinkSimple } from 'phosphor-react';

interface ShareBarProps {
  title?: string;
  url?: string;
  className?: string;
}

export default function ShareBar({ title = '', url = '', className = '' }: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = useMemo(() => {
    if (url) return url;
    if (typeof window !== 'undefined') return window.location.href;
    return '';
  }, [url]);

  const shareText = useMemo(() => title || 'Check out this article', [title]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const tryNativeShare = async () => {
    if ((navigator as any).share) {
      try {
        await (navigator as any).share({ title: shareText, url: shareUrl });
      } catch (e) {
        // user cancelled
      }
    }
  };

  const openShare = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const twitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <div className={`border border-gray-200 rounded-lg p-4 bg-white ${className}`}>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 text-gray-700">
          <ShareNetwork size={20} />
          <span className="font-semibold">Share The Post Now:</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={tryNativeShare} className="px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-50 text-sm flex items-center gap-2">
            <ShareNetwork size={16} /> Share
          </button>
          <button onClick={() => openShare(twitter)} className="px-3 py-2 rounded-md bg-[#1DA1F2] hover:opacity-90 text-white text-sm flex items-center gap-2">
            <TwitterLogo size={16} /> Twitter
          </button>
          <button onClick={() => openShare(linkedin)} className="px-3 py-2 rounded-md bg-[#0A66C2] hover:opacity-90 text-white text-sm flex items-center gap-2">
            <LinkedinLogo size={16} /> LinkedIn
          </button>
          <button onClick={() => openShare(facebook)} className="px-3 py-2 rounded-md bg-[#1877F2] hover:opacity-90 text-white text-sm flex items-center gap-2">
            <FacebookLogo size={16} /> Facebook
          </button>
          <button onClick={copyToClipboard} className="px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-50 text-sm flex items-center gap-2">
            {copied ? <Check size={16} className="text-green-600" /> : <CopySimple size={16} />}
            {copied ? 'Copied' : 'Copy Link'}
          </button>
        </div>
      </div>
      {shareUrl && (
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
          <LinkSimple size={16} />
          <span className="truncate max-w-full">{shareUrl}</span>
        </div>
      )}
    </div>
  );
}
"use client"
import React, { useMemo } from 'react'
import { FacebookLogo, TwitterLogo, LinkedinLogo, RedditLogo } from 'phosphor-react'

interface ShareButtonProps {
  className?: string
  url?: string
  title?: string
}

export default function ShareButton({ className = '', url, title }: ShareButtonProps) {
  // Avoid SSR/client mismatch: compute solely from props, not window/document
  const shareUrl = useMemo(() => (typeof url === 'string' ? url : ''), [url])
  const shareTitle = useMemo(() => (typeof title === 'string' ? title : ''), [title])

  const encoded = (s: string) => encodeURIComponent(s || '')

  const hrefs = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encoded(shareUrl)}&text=${encoded(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded(shareUrl)}`,
    reddit: `https://www.reddit.com/submit?url=${encoded(shareUrl)}&title=${encoded(shareTitle)}`,
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <a
        href={hrefs.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="分享到 Facebook"
        className="p-1 rounded hover:bg-gray-100 hover:scale-125 transition-all duration-300 ease-out transform"
        title="Facebook"
      >
        <FacebookLogo size={20} />
      </a>
      <a
        href={hrefs.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="分享到 X/Twitter"
        className="p-1 rounded hover:bg-gray-100 hover:scale-125 transition-all duration-300 ease-out transform"
        title="X/Twitter"
      >
        <TwitterLogo size={20} />
      </a>
      <a
        href={hrefs.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="分享到 LinkedIn"
        className="p-1 rounded hover:bg-gray-100 hover:scale-125 transition-all duration-300 ease-out transform"
        title="LinkedIn"
      >
        <LinkedinLogo size={20} />
      </a>
      <a
        href={hrefs.reddit}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="分享到 Reddit"
        className="p-1 rounded hover:bg-gray-100 hover:scale-125 transition-all duration-300 ease-out transform"
        title="Reddit"
      >
        <RedditLogo size={20} />
      </a>
    </div>
  )
}
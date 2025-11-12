"use client"
import { useState } from 'react'
import { Play } from 'phosphor-react'

type Props = {
  embedUrl: string
  title?: string
  poster?: string
}

export default function YouTubeLite({ embedUrl, title = 'YouTube', poster }: Props) {
  const [playing, setPlaying] = useState(false)
  const url = playing ? `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1` : ''
  return (
    <div className="relative pt-[55%]">
      {!playing && (
        <button onClick={() => setPlaying(true)} className="absolute inset-0 w-full h-full bg-transparent focus:outline-none focus:ring-0">
          {poster ? (
            <img src={poster} alt={title} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="w-full h-full bg-black/20 rounded-lg" />
          )}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-black text-white grid place-items-center shadow-lg transition-transform duration-200 hover:scale-105"><Play size={28} weight="fill" /></span>
          </span>
        </button>
      )}
      {playing && (
        <iframe
          src={url}
          title={title}
          className="absolute inset-0 w-full h-full rounded-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  )
}

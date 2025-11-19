"use client"
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full space-y-6 text-center">
        <h1 className="heading-main2">Something went wrong</h1>
        <p className="text text-hub">{error?.message || 'An unexpected error occurred.'}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt30">
          <button onClick={() => reset()} className="btn-secondary">Try again</button>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
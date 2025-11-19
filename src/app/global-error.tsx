"use client"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-xl w-full space-y-6 text-center">
            <h1 className="heading-main2">Application Error</h1>
            <p className="text text-hub">{error?.message || 'An unexpected error occurred.'}</p>
            <div className="mt30 flex justify-center">
              <button onClick={() => reset()} className="btn-secondary">Reload</button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
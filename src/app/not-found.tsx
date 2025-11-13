import Link from 'next/link'

export async function generateMetadata() {
  return {
    title: '404 - Page Not Found',
    description: 'The page you are looking for could not be found.',
  }
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-foreground flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-extrabold text-primary">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="text text-gray-600">
            Sorry, the page you are looking for could not be found. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-secondary inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
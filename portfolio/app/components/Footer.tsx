import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-base-100 border-t border-gray-200">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 p-8 text-center md:flex-row">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Your Name Here.
        </p>
        <div className="flex items-center gap-6">
          <Link 
            href="mailto:your-email@example.com" 
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-start"
          >
            Email
          </Link>
          <Link 
            href="#" // Add your GitHub link
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-start"
          >
            GitHub
          </Link>
          <Link 
            href="#" // Add your LinkedIn link
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-start"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
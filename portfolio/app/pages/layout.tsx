import Header from '@/components/Header' // '@/' is an alias for the root of the app
import Footer from '@/components/Footer'

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-gray-900">
      <Header />
      {/* This main element provides padding and centers the content */}
      <main className="container mx-auto max-w-4xl flex-grow px-6 py-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}
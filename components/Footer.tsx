export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Hari Varsan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


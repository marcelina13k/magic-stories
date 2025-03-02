import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Magic Stories</h3>
            <p className="text-gray-600">Personalized audio adventures for children</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">Email: magicstories13@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.tiktok.com/@_magicstories"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  TikTok
                </Link>
              </li>
              <li>
                <span className="text-gray-400">Instagram (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; 2024 Magic Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


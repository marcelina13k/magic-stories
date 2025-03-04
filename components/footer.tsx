import { Instagram, Mail, InstagramIcon as BrandTiktok } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Magic Stories</h3>
            <p className="text-gray-600">Personalized audio adventures for children</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-5 w-5 transition-transform hover:-translate-y-1" />
              <a href="mailto:magicstories13@gmail.com" className="hover:text-orange-500 transition-colors">
                magicstories13@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@_magicstories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <BrandTiktok className="h-6 w-6 transition-transform hover:-translate-y-1" />
                <span className="sr-only">TikTok</span>
              </a>
              <a
                href="https://www.instagram.com/magicstories.ai/"
                target="_blank"
                rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <Instagram className="h-6 w-6 transition-transform hover:-translate-y-1" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; 2024 Magic Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


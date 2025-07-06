import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 pt-10 pb-4 mt-auto">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-base text-gray-700">
      <div>
        <h4 className="font-bold mb-4 text-primary uppercase tracking-wide text-lg">FormatX</h4>
        <ul className="space-y-3 text-left">
          <li><a href="#" className="hover:text-primary">Home</a></li>
          <li><a href="#" className="hover:text-primary">Pricing</a></li>
          <li><a href="#" className="hover:text-primary">Security</a></li>
          <li><a href="#" className="hover:text-primary">Tools</a></li>
          <li><a href="#" className="hover:text-primary">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-primary uppercase tracking-wide text-lg">PRODUCT</h4>
        <ul className="space-y-3 text-left">
          <li><a href="#" className="hover:text-primary">FormatX Desktop</a></li>
          <li><a href="#" className="hover:text-primary">FormatX Mobile</a></li>
          <li><a href="#" className="hover:text-primary">Developers</a></li>
          <li><a href="#" className="hover:text-primary">Features</a></li>
          <li><a href="#" className="hover:text-primary">FormatX.com</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-primary uppercase tracking-wide text-lg">SOLUTIONS</h4>
        <ul className="space-y-3 text-left">
          <li><a href="#" className="hover:text-primary">Business</a></li>
          <li><a href="#" className="hover:text-primary">Education</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-primary uppercase tracking-wide text-lg">COMPANY</h4>
        <ul className="space-y-3 text-left">
          <li><a href="#" className="hover:text-primary">Our Story</a></li>
          <li><a href="#" className="hover:text-primary">Blog</a></li>
          <li><a href="#" className="hover:text-primary">Press</a></li>
          <li><a href="#" className="hover:text-primary">Legal & Privacy</a></li>
          <li><a href="#" className="hover:text-primary">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-end mt-8 pt-8 border-t border-gray-200 gap-6">
      <div className="flex items-center gap-2 text-gray-600 text-base mb-4 md:mb-0">
        <span className="text-xl text-gray-900"><FaGlobe /></span>
        <span className="text-gray-900">English</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12" />
        </div>
        <div className="flex gap-3 text-2xl">
          <a href="#" aria-label="Twitter" className="hover:text-primary"><FaTwitter /></a>
          <a href="#" aria-label="Facebook" className="hover:text-primary"><FaFacebookF /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary"><FaLinkedinIn /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary"><FaInstagram /></a>
          <a href="#" aria-label="TikTok" className="hover:text-primary"><FaTiktok /></a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-base mt-6">
      © FormatX 2025 ® - Your PDF Editor by Yasir G.
    </div>
  </footer>
);

export default Footer; 
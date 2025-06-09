
const Footer = () => {
  return (
    <footer className="bg-jacaranda text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="https://i.ibb.co/hx7GypKG/image-removebg-preview-3-1.png" 
              alt="Jacaranda Media Logo" 
              className="h-12 mx-auto"
            />
          </div>
          
          {/* Contact Info */}
          <div className="font-open-sans text-lg mb-6">
            <a 
              href="mailto:contact@jacarandamedia.com" 
              className="hover:text-jacaranda-200 transition-colors duration-300"
            >
              contact@jacarandamedia.com
            </a>
            <span className="mx-3">|</span>
            <a 
              href="tel:+27123456789" 
              className="hover:text-jacaranda-200 transition-colors duration-300"
            >
              +27 12 345 6789
            </a>
          </div>
          
          {/* Tagline */}
          <div className="font-open-sans text-sm mb-6 opacity-90 italic">
            "Speed closes deals - and we make speed happen."
          </div>
          
          {/* Links */}
          <div className="font-open-sans mb-6 space-x-6">
            <a href="#" className="hover:text-jacaranda-200 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-jacaranda-200 transition-colors duration-300">
              Terms of Use
            </a>
          </div>
          
          {/* Copyright */}
          <div className="font-open-sans text-sm opacity-75">
            © 2025 Jacaranda Media. All rights reserved. | Proudly South African
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Header() {
  const [showEnterButton, setShowEnterButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featuresElement = document.getElementById('features');
      if (featuresElement) {
        const { top } = featuresElement.getBoundingClientRect();
        setShowEnterButton(top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-30 bg-black bg-opacity-5 backdrop-blur-md shadow-md transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-16 mt-2">
          {/* Logo ajustado */}
          <Link href="/" aria-label="Cruip">
            <Image
              src="/images/academywhite.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </Link>

          {/* Botones de redes sociales siempre visibles */}
          <div className="flex items-center space-x-4">
            {/* Botones de redes sociales */}
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-color3bs transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-color3bs transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-color3bs transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            {/* Botón Entrar visible al llegar a Features */}
            {showEnterButton && (
              <a
                className="btn text-white bg-color3bs hover:bg-color3bsdarker px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg fade-in-animation"
                href="https://academia.MullenPeluqueros.com"
              >
                Entrar
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-animation {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </header>
  );
}

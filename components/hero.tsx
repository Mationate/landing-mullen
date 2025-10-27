import { CircleArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen mb-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero content */}
        <div className="relative pt-28 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[6rem] text-white tracking-tight font-perfecto leading-tight"
              data-aos="fade-up"
            >
              <span className="block">ACADEMIA</span>
              <span className="block">ANDRES MULLEN</span>
            </h1>

            <p
              className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed px-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Una comunidad de barberos que buscan crecer y mejorar en el mundo de la
              barbería.
            </p>

            {/* Botones */}
            <div className="py-6 max-w-md mx-auto sm:max-w-none flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-6 gap-4">
              {/* Botón principal */}
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white bg-color3bs hover:bg-color3bsdarker w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl text-center block"
                  href="https://academia.andresmullen.com"
                >
                  Entrar
                </a>
              </div>

              {/* Link Aprende más */}
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="flex items-center justify-center space-x-3 cursor-pointer group"
              >
                <a
                  className="text-white text-base sm:text-lg md:text-xl hover:text-color3bs transition-colors duration-300 font-medium"
                  href="#video"
                >
                  Aprende más
                </a>
                <CircleArrowDown className="w-6 h-6 sm:w-7 sm:h-7 text-color3bs group-hover:animate-bounce transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

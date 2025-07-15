import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-3xl"></div>

        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-20">
          {/* Animated floating elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Title with gradient */}
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
              TAEKWONDO
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-12">
              The Art of Kicking and Punching
            </p>

            {/* Content Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">태</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                  Philosophy
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Taekwondo emphasizes mental discipline, respect, and
                  self-control alongside physical techniques. The five tenets
                  guide practitioners: courtesy, integrity, perseverance,
                  self-control, and indomitable spirit.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">권</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">
                  Techniques
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Known for spectacular high kicks, fast hand techniques, and
                  jumping/spinning kicks. Practitioners develop flexibility,
                  balance, and explosive power through systematic training.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">도</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  Sport
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  An official Olympic sport since 2000, Taekwondo combines
                  traditional martial arts with modern competitive elements,
                  emphasizing speed, agility, and precision.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  1955
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Founded
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  100M+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Practitioners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  210+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Countries
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                TAEKWONDO
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Discover the beauty and power of Taekwondo - a martial art that
                develops not just physical strength, but mental fortitude and
                spiritual growth.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Learn More</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Techniques
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Rankings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Competition
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Training Centers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Taekwondo World. Dedicated to the art and spirit of
              Taekwondo.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">WTF</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">ITF</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

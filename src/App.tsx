import React, { useEffect, useState } from 'react';
import { Heart, Gift, Sparkles, Cake, Star } from 'lucide-react';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 animate-bounce delay-100">
          <Heart className="w-6 h-6 text-pink-400 opacity-60" fill="currentColor" />
        </div>
        <div className="absolute top-20 right-20 animate-bounce delay-300">
          <Star className="w-8 h-8 text-rose-400 opacity-50" fill="currentColor" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-500">
          <Gift className="w-7 h-7 text-pink-500 opacity-40" />
        </div>
        <div className="absolute bottom-32 right-16 animate-bounce delay-700">
          <Sparkles className="w-6 h-6 text-rose-500 opacity-60" />
        </div>
        <div className="absolute top-1/3 left-1/4 animate-pulse">
          <div className="w-3 h-3 bg-pink-300 rounded-full opacity-30"></div>
        </div>
        <div className="absolute top-2/3 right-1/3 animate-pulse delay-1000">
          <div className="w-4 h-4 bg-rose-400 rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${
                i % 4 === 0 ? 'from-pink-400 to-rose-400' :
                i % 4 === 1 ? 'from-rose-400 to-pink-500' :
                i % 4 === 2 ? 'from-pink-300 to-rose-300' :
                'from-rose-300 to-pink-400'
              } animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block animate-bounce mb-6">
            <Cake className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            ¡Feliz Cumpleaños!
          </h1>
          
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold text-rose-600 mb-2">
              Pamela
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-pink-400" fill="currentColor" />
              <span className="text-2xl md:text-3xl font-medium text-pink-700">
                19 años de magia
              </span>
              <Star className="w-6 h-6 text-pink-400" fill="currentColor" />
            </div>
          </div>

          <div className="flex justify-center gap-3 mb-8">
            <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-rose-400 rounded-full animate-pulse delay-200"></div>
            <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-400"></div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-200 overflow-hidden">
            {/* Decorative Header */}
            <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 p-6">
              <div className="flex items-center justify-center gap-4">
                <Heart className="w-8 h-8 text-white animate-pulse" fill="currentColor" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Un día especial para alguien especial
                </h3>
                <Heart className="w-8 h-8 text-white animate-pulse" fill="currentColor" />
              </div>
            </div>

            {/* Letter Content Area */}
            <div className="p-8 md:p-12">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border-2 border-dashed border-pink-300 min-h-[400px]">
                <div className="text-center text-pink-600 mb-6">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 text-rose-400" />
                  <h4 className="text-2xl font-semibold mb-2">Unas Palabras</h4>
                  <p className="text-lg opacity-75">So no es de gantel jajaja</p>
                </div>

                {/* Este es el área limpia donde puedes escribir tu carta */}
                <div className="bg-white rounded-xl p-6 shadow-inner min-h-[250px] border border-pink-200">
                  <div className="text-pink-600 text-center mt-20">
                    <p className="text-lg italic">
                    Hoy no solo es tu día especial, también es el día de mi persona favorita, la chica que sin saber ni pensarlo se volvió mi luz, no soy tanto de hablar o decir cosas bonitas, pero el día de hoy es más que necesario, contigo siempre lo es.

Pam en realidad creo que nunca me cansare de darte las gracias por todo, aunque no siempre estemos bien, molestos, peleados y demás, no dimensiono el momento en que te volviste esa persona para mí, mi lugar feliz, todos los días solo espero tu mensaje, el hablar contigo, el sonreírle a la pantalla como tonto, estoy demasiado feliz y agradecido con la vida de habernos cruzado.

Se que tu cumpleaños es algo que disfrutas mucho y lo esperas con ansias así que yo igual, estoy aquí feliz por celebrar un año más de vida de mi niña, la niña que me hizo ver que realmente se puede ser feliz.

Me sacaste de una depresión sin saberlo, sé que no estábamos en los mejores momentos ambos, pero te juro que nadie había echo algo similar por mí, sin interés tu estuviste, escuchaste, jamás juzgaste y me entregaste tu amor, gracias por todo y disculpa por tan poco

Te amo mucho más de lo que imaginas, ahora y siempre.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Gift className="w-6 h-6 text-pink-600" />
                  <span className="text-lg font-medium text-pink-700">
                    Con Amor tu Nerrito
                  </span>
                  <Gift className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart 
                      key={i} 
                      className="w-4 h-4 text-rose-400 animate-pulse" 
                      fill="currentColor"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 border border-pink-200 shadow-lg">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <span className="text-xl font-medium bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              ¡Que tengas el día más hermoso, te amo ahora y siempre!
      
            </span>
            <Sparkles className="w-6 h-6 text-pink-500" />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
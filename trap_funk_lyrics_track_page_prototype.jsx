import React, { useState } from 'react';

// TrapFunkLyrics - Track Page Prototype
// Default export is a React component suitable to drop into a Next.js page.
// Uses Tailwind CSS classes. Install Tailwind in your Next.js project to render.

export default function TrackPrototype() {
  const [activeAnnotation, setActiveAnnotation] = useState(null);

  const track = {
    id: 'or-01',
    title: 'Prévia - Oruam (Prototype)',
    artist: 'Oruam (exemplo)',
    cover: '/cover-sample.jpg', // replace with real URL in your project
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?start=30&end=60',
    lyrics: [
      { id: 1, text: 'Eu vim da quebrada, correndo no escuro', start: 0 },
      { id: 2, text: 'No beat um sopro, o estalo no muro', start: 1 },
      { id: 3, text: 'Minhas rimas cortam como navalha', start: 2 },
      { id: 4, text: 'A rua é a escola e a vida é batalha', start: 3 }
    ],
    annotations: {
      1: '“Vim da quebrada” refere-se ao bairro do artista — contexto social e origem.',
      2: '“Estalo no muro” é uma referência à vibração do beat e grafites locais.',
      3: 'Comparação forte: rimas = navalha (metáfora de impacto).',
      4: 'Linha que fala sobre aprendizado na rua; muito comum no funk/trap local.'
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-gray-100 font-sans p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={track.cover} alt="cover" className="w-full h-full object-cover opacity-90" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-wide">{track.title}</h1>
            <p className="text-sm text-gray-300">{track.artist} • Prévia exclusiva</p>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Player */}
          <section className="md:col-span-2 bg-[#0f1113] p-4 rounded-lg shadow-lg">
            <div className="aspect-video bg-black rounded overflow-hidden">
              <iframe
                src={track.embedUrl}
                title="player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <button className="px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-sm font-semibold">Seguir artista</button>
                <button className="px-3 py-1 border border-gray-700 rounded-full text-sm">Curtir</button>
              </div>
              <div className="text-xs text-gray-400">Prévia — 30s</div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-2">Letra</h3>
              <div className="space-y-3">
                {track.lyrics.map(line => (
                  <div key={line.id} className="flex items-start gap-3">
                    <div className="w-8 text-right text-sm text-gray-400">{line.id}.</div>
                    <div className="flex-1">
                      <p className="text-base leading-relaxed">
                        <span className="cursor-pointer hover:underline" onClick={() => setActiveAnnotation(line.id)}>
                          {line.text}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Side panel */}
          <aside className="bg-[#0f1113] p-4 rounded-lg shadow-lg h-fit">
            <h4 className="font-bold text-lg mb-2">Anotações</h4>
            <p className="text-sm text-gray-300 mb-3">Clique em qualquer verso pra ver a explicação (IA + comunidade).</p>

            <div className="space-y-2">
              {Object.keys(track.annotations).map(key => (
                <div key={key} className="p-2 bg-[#0d0f11] rounded border border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Linha {key}</div>
                    <button onClick={() => setActiveAnnotation(Number(key))} className="text-xs px-2 py-1 bg-purple-600 rounded">Ver</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-semibold mb-2">Compartilhar</h5>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-[#121214] rounded">Instagram</button>
                <button className="flex-1 px-3 py-2 bg-[#121214] rounded">TikTok</button>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">Beta • Acesso por convite</div>
          </aside>
        </main>

        {/* Annotation modal */}
        {activeAnnotation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-lg bg-[#0b0b0d] p-6 rounded-lg border border-gray-800 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">Linha {activeAnnotation} — Explicação</h3>
                  <p className="text-sm text-gray-400 mt-1">Origem: comunidade + IA</p>
                </div>
                <button onClick={() => setActiveAnnotation(null)} className="text-gray-300">Fechar</button>
              </div>

              <div className="mt-4 text-gray-200">
                {track.annotations[activeAnnotation]}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded">Curtir anotação</button>
                <button className="px-4 py-2 border border-gray-700 rounded" onClick={() => alert('Sugerir edição - implementação futura')}>Sugerir edição</button>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-8 text-center text-gray-500 text-sm">TrapFunkLyrics • Prototype — não contém áudio completo</footer>
      </div>
    </div>
  );
}

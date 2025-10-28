"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const videos = [
  {
    id: "1131090484",
    title: "Técnicas Avanzadas de Corte",
    description: "Domina las técnicas profesionales de corte clásico",
    embedUrl: "https://player.vimeo.com/video/1131090484",
  },
  {
    id: "1131090399",
    title: "Estilizado y Acabado Premium",
    description: "Aprende los secretos del acabado perfecto",
    embedUrl: "https://player.vimeo.com/video/1131090399",
  },
  {
    id: "1131090453",
    title: "Barbería Moderna: Tendencias",
    description: "Descubre las últimas tendencias en barbería",
    embedUrl: "https://player.vimeo.com/video/1131090453",
  },
]

export default function VideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const goToVideo = (index: number) => {
    setCurrentVideo(index)
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Play className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Formación Profesional</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Masterclass de Barbería
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Contenido exclusivo diseñado por expertos para elevar tu técnica al siguiente nivel
          </p>
        </div>

        {/* Main Video Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Video Player Card */}
          <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50 backdrop-blur-sm">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative">
              {/* Video Display */}
              <div className="relative aspect-video bg-black rounded-t-3xl overflow-hidden">
                <iframe
                  key={videos[currentVideo].id}
                  className="w-full h-full"
                  src={videos[currentVideo].embedUrl}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={videos[currentVideo].title}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevVideo}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md hover:bg-accent text-foreground hover:text-accent-foreground p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl opacity-0 group-hover:opacity-100 border border-border/50"
                  aria-label="Video anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextVideo}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md hover:bg-accent text-foreground hover:text-accent-foreground p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl opacity-0 group-hover:opacity-100 border border-border/50"
                  aria-label="Siguiente video"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Video Counter Badge */}
                <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-md text-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-border/50">
                  <span className="text-accent">{currentVideo + 1}</span>
                  <span className="text-muted-foreground mx-1">/</span>
                  <span className="text-muted-foreground">{videos.length}</span>
                </div>
              </div>

              {/* Video Info Section */}
              <div className="relative p-8 md:p-10 bg-gradient-to-b from-card to-card/50">
                {/* Current Video Details */}
                <div className="text-center mb-10 space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{videos[currentVideo].title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    {videos[currentVideo].description}
                  </p>
                </div>

                {/* Video Thumbnails Grid */}
                <div className="flex justify-center gap-4 md:gap-6 mb-8">
                  {videos.map((video, index) => (
                    <button
                      key={video.id}
                      onClick={() => goToVideo(index)}
                      className={`relative group/thumb transition-all duration-500 ${
                        index === currentVideo ? "scale-110" : "hover:scale-105 opacity-60 hover:opacity-100"
                      }`}
                    >
                      {/* Thumbnail Card */}
                      <div
                        className={`relative w-32 md:w-40 h-20 md:h-24 rounded-xl overflow-hidden transition-all duration-500 ${
                          index === currentVideo
                            ? "ring-4 ring-accent shadow-2xl shadow-accent/50"
                            : "ring-2 ring-border/50 hover:ring-accent/50"
                        }`}
                      >
                        {/* Gradient Background */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ${
                            index === currentVideo
                              ? "bg-gradient-to-br from-accent via-accent/80 to-primary"
                              : "bg-gradient-to-br from-muted via-muted-foreground/20 to-muted-foreground/40 group-hover/thumb:from-accent/50 group-hover/thumb:to-primary/50"
                          }`}
                        />

                        {/* Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {index === currentVideo ? (
                            <Pause className="w-8 h-8 text-accent-foreground drop-shadow-lg" />
                          ) : (
                            <Play className="w-8 h-8 text-background drop-shadow-lg group-hover/thumb:scale-110 transition-transform" />
                          )}
                        </div>

                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/thumb:translate-x-full transition-transform duration-1000" />
                      </div>

                      {/* Video Number Label */}
                      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span
                          className={`text-xs md:text-sm font-semibold transition-colors duration-300 ${
                            index === currentVideo
                              ? "text-accent"
                              : "text-muted-foreground group-hover/thumb:text-foreground"
                          }`}
                        >
                          Video {index + 1}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center items-center gap-3 mt-12">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToVideo(index)}
                      className="group/dot relative"
                      aria-label={`Ir al video ${index + 1}`}
                    >
                      <div
                        className={`relative transition-all duration-500 ${
                          index === currentVideo
                            ? "w-12 h-3 bg-accent rounded-full"
                            : "w-3 h-3 bg-muted-foreground/30 rounded-full hover:bg-accent/50 hover:scale-125"
                        }`}
                      >
                        {/* Glow effect for active dot */}
                        {index === currentVideo && (
                          <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-50" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

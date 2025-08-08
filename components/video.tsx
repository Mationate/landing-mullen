export default function Video() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">


        <iframe
                id="video" 
                className="w-full h-full aspect-video"
                src="https://player.vimeo.com/video/1009713665?autoplay=1"
                frameBorder="0"
                allow="autoplay; picture-in-picture"
                allowFullScreen
              />
        </div>

    </section>
  )
}

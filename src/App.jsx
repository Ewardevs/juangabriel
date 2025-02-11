import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlayIcon } from '@heroicons/react/24/solid';
import { Phone } from "lucide-react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import audio1 from "../public/audios/1.mp3"
import audio2 from "../public/audios/2.mp3"
import audio3 from "../public/audios/3.mp3"

import images from "../public/imgs/images.json"

function App() {
  const phoneNumber = "123456789"; // Reemplaza con tu número de WhatsApp
  const message = "Hola, quiero más información!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const audios = [
    {
      "name":"Nuestro amor es oro",
      "music":audio1,
      "image":images[0]
    },
    {
      "name":"Te amo",
      "music":audio2,
      "image":images[3]
    },
    {
      "name":"Casarme contigo",
      "music":audio3,
      "image":images[5]
    }
  ]

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="bg-primary text-white overflow-hidden">
      {/* Hero Section with Carousel */}
      <div className="h-screen">
        <Slider {...carouselSettings}>
          <div className="h-screen relative">
            <img
              src={images[4].url}
              alt="Concert 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">Juan Gabriel Py</h1>
                <div className="w-44 m-auto bg-green-600 rounded-2xl shadow-md hover:bg-green-700 transition-all duration-300">
                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-white font-semibold"
                  >
                    <Phone size={24} />
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen relative">
            <img
              src={images[2].url}
              alt="Concert 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">Juan gabriel Py</h1>
                <div className="w-44 m-auto bg-green-600 rounded-2xl shadow-md hover:bg-green-700 transition-all duration-300">
                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-white font-semibold"
                  >
                    <Phone size={24} />
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img
                src={image.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-secondary px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/x7iO-yuxMn0"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/m-FY3KMW14M"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Musicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audios.map((item,index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg transition-colors">
              <div className="relative mb-4">
                <img
                  src={item.image.url}
                  alt={`Album ${item.name}`}
                  className="w-full aspect-square object-cover rounded-md"
                />
                <button className="absolute inset-0 m-auto w-16 h-16 flex items-center justify-center bg-accent rounded-full hover:bg-opacity-80 transition-colors">
                  <PlayIcon className="w-8 h-8 text-white" />
                </button>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <AudioPlayer
                autoPlay
                src={item.music}
                onPlay={e => console.log("onPlay")}
                className='bg-secondary shadow-none'
                loop={false}
              // other props here
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 f">
          <div>
            <h3 className="text-2xl font-bold mb-4">Juan gabriel py</h3>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">

              <li><a href="#" className="hover:text-accent">Whatsapp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-accent">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-accent">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Artist Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
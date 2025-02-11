"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaHandsHelping, FaLinkedin, FaStar } from 'react-icons/fa';
import { FaGithub, FaLeaf, FaRecycle } from 'react-icons/fa6';

const About = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const team = [
    {
      id: 1,
      name: "Carlos Malissia",
      role: "Desarrollador Full Stack",
      description: "Experiencia en desarrollo de software, especialmente en React y Next.js",
      image: "/images/nosotros/carlosmalissia.jpg",
      social: { linkedin: "https://www.linkedin.com/in/carlos-malissia-30ab76272/", github: 'https://github.com/carlosmalissia' }
    },
    {
      id: 2,
      name: "Guerre Pablo Agustin",
      role: "Desarrollador Frontend",
      description: "Experiencia en desarrollo de software, especialmente en React y Next.js",
      image: "/images/nosotros/pabloguerre.jpeg",
      social: {  linkedin: "https://www.linkedin.com/in/guerre-pablo-agustin/", github: "https://github.com/Guerre-Pablo-Agustin" }
    }
  ];



  return (
    <div>
       <section className={`relative h-screen flex items-center justify-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className="absolute inset-0">
          <Image
          width={1920}
          height={1080}
            src="https://images.unsplash.com/photo-1513519245088-0e12902e35a6"
            alt="Dar Mas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Dar Mas</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Artesanía sostenible para una vida consciente</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-stone-800">¡Bienvenidos a Dar Mas!</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            Nos alegra que te unas a nuestra comunidad. Aquí encontrarás productos únicos y sostenibles, creados con dedicación por artesanos talentosos. Explora nuestra tienda, descubre piezas exclusivas y ayuda a apoyar la artesanía local.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-stone-800 text-center">¿Qué es Dar Mas?</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            Dar Mas es un e-commerce dedicado a la venta de artesanías de madera. Nuestro objetivo es ofrecer productos únicos y sostenibles al mismo tiempo que apoyamos a los artesanos locales. En Dar Mas, nos esforzamos por proporcionar una experiencia de compra agradable, permitiendo a los clientes explorar y adquirir piezas personalizadas que aportan un toque especial a sus hogares.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-stone-800 text-center">Propósito</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            El propósito de EcoWood es conectar a los amantes de la madera con artesanos talentosos que crean productos únicos y sostenibles. De esta forma queremos:
          </p>
          <ul className="text-lg text-stone-600 leading-relaxed list-disc pl-6 mb-8">
            <li className="flex items-center">
              <FaLeaf className="mr-2 text-green-700" />
              <span>Promover el uso de materiales naturales y técnicas artesanales.</span>
            </li>
            <li className="flex items-center text-blue-700">
              <FaRecycle className="mr-2" />
              <span>Contribuir a un estilo de vida más ecológico y responsable.</span>
            </li>
            <li className="flex items-center">
              <FaHandsHelping className="mr-2" />
              <span>Apoyar a los artesanos locales y preservar las tradiciones artesanales.</span>
            </li>
            <li className="flex items-center">
              <FaStar className="mr-2 text-yellow-400" />
              <span>Ofrecer a nuestros clientes productos de alta calidad.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-stone-800 text-center">Colaboradores</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            Este proyecto ha sido posible gracias a la colaboración de diversas personas comprometidas con su desarrollo y mejora continua. Agradecemos sinceramente a todos aquellos que han contribuido con su tiempo, conocimientos y esfuerzo para hacer de EcoWood una realidad.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            Si deseas unirte como colaborador o explorar cómo puedes contribuir, no dudes en contactarnos. ¡Estamos entusiasmados de trabajar juntos para llevar este proyecto aún más lejos!
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-stone-800">Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="w-48 h-48 mb-6 relative group">
                <Image
                  width={200}
                  height={100}
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-stone-300" />
                    </a>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-white text-2xl cursor-pointer hover:text-stone-300" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-800">{member.name}</h3>
              <p className="text-stone-600 mb-2">{member.role}</p>
              <p className="text-stone-500 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About
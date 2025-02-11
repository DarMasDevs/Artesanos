"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaHandsHelping, FaLinkedin, FaStar } from "react-icons/fa";
import { FaGithub, FaLeaf, FaRecycle } from "react-icons/fa6";

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
      description:
        "Experiencia en desarrollo de software, especialmente en React y Next.js",
      image: "/images/nosotros/carlosmalissia.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/carlos-malissia-30ab76272/",
        github: "https://github.com/carlosmalissia",
      },
    },
    {
      id: 2,
      name: "Guerre Pablo Agustin",
      role: "Desarrollador Frontend",
      description:
        "Experiencia en desarrollo de software, especialmente en React y Next.js",
      image: "/images/nosotros/pabloguerre.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/guerre-pablo-agustin/",
        github: "https://github.com/Guerre-Pablo-Agustin",
      },
    },
  ];

  return (
    <div>
      <section
        className={`relative flex h-screen items-center justify-center ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
      >
        <div className="absolute inset-0">
          <Image
            width={1920}
            height={1080}
            src="/images/banner/about.png"
            alt="Dar Mas"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative px-4 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Dar Mas</h1>
          <p className="mx-auto max-w-2xl text-xl md:text-2xl">
            Artesanía sostenible para una vida consciente
          </p>
        </div>
      </section>

      <section className="bg-stone-100 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold text-stone-800">
            ¡Bienvenidos a Dar Mas!
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-stone-600">
            Nos alegra que te unas a nuestra comunidad. Aquí encontrarás
            productos únicos y sostenibles, creados con dedicación por artesanos
            talentosos. Explora nuestra tienda, descubre piezas exclusivas y
            ayuda a apoyar la artesanía local.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-4xl font-bold text-stone-800">
            ¿Qué es Dar Mas?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-stone-600">
            Dar Mas es un e-commerce dedicado a la venta de artesanías de
            madera. Nuestro objetivo es ofrecer productos únicos y sostenibles
            al mismo tiempo que apoyamos a los artesanos locales. En Dar Mas,
            nos esforzamos por proporcionar una experiencia de compra agradable,
            permitiendo a los clientes explorar y adquirir piezas personalizadas
            que aportan un toque especial a sus hogares.
          </p>
        </div>
      </section>

      <section className="bg-stone-100 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-4xl font-bold text-stone-800">
            Propósito
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-stone-600">
            El propósito de Dar Mas es conectar a los amantes de la madera con
            artesanos talentosos que crean productos únicos y sostenibles. De
            esta forma queremos:
          </p>
          <ul className="mb-8 list-disc pl-6 text-lg leading-relaxed text-stone-600">
            <li className="flex items-center">
              <FaLeaf className="mr-2 text-green-700" />
              <span>
                Promover el uso de materiales naturales y técnicas artesanales.
              </span>
            </li>
            <li className="flex items-center ">
              <FaRecycle className="mr-2 text-blue-700" />
              <span>
                Contribuir a un estilo de vida más ecológico y responsable.
              </span>
            </li>
            <li className="flex items-center">
              <FaHandsHelping className="mr-2" />
              <span>
                Apoyar a los artesanos locales y preservar las tradiciones
                artesanales.
              </span>
            </li>
            <li className="flex items-center">
              <FaStar className="mr-2 text-yellow-400" />
              <span>
                Ofrecer a nuestros clientes productos de alta calidad.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-4xl font-bold text-stone-800">
            Colaboradores
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-stone-600">
            Este proyecto ha sido posible gracias a la colaboración de diversas
            personas comprometidas con su desarrollo y mejora continua.
            Agradecemos sinceramente a todos aquellos que han contribuido con su
            tiempo, conocimientos y esfuerzo para hacer de Dar Mas una realidad.
          </p>
          <p className="text-lg leading-relaxed text-stone-600">
            Si deseas unirte como colaborador o explorar cómo puedes contribuir,
            no dudes en contactarnos. ¡Estamos entusiasmados de trabajar juntos
            para llevar este proyecto aún más lejos!
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-stone-800">
          Equipo
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="group relative mb-6 h-48 w-48">
                <Image
                  width={200}
                  height={100}
                  src={member.image}
                  alt={member.name}
                  className="h-48 w-48 rounded-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="cursor-pointer text-2xl text-white hover:text-stone-300" />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="cursor-pointer text-2xl text-white hover:text-stone-300" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-800">
                {member.name}
              </h3>
              <p className="mb-2 text-stone-600">{member.role}</p>
              <p className="text-center text-stone-500">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

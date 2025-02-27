"use client";
import Carrousel from "@/components/Home/Carrousel/Carrousel";
import Hero from "@/components/Home/Hero";
import { data } from "../../public/data";
import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useRouter } from "next/navigation";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = data.categories;

  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/store?q=${searchTerm}`);
  };
  return (
    <main>
      <section>
        <Hero />
      </section>
      {/* buscador de productos */}
      <section className="my-10 flex w-full items-center justify-center">
        <div className="relative flex w-[90%] items-center justify-center md:w-[50%]">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative w-full">
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-blue-500 focus:ring-blue-500 w-full rounded-full border p-3 pl-5 pr-12 shadow-sm focus:border-transparent focus:outline-none focus:ring-2"
                type="text"
                placeholder="Buscar productos..."
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <HiMagnifyingGlass className="text-gray-400 hover:text-amber-500 h-6 w-6" />
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-cream pt-10" id="products">
        {categories.map(({ name }, index) => (
          <Carrousel key={index} categoryName={name} />
        ))}
      </section>
    </main>
  );
}

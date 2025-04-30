import { Products } from "@/types/types";
import React, { useMemo, useState } from "react";
import Filtros from "./Filtros";
import Cards from "./Cards";
import Search from "./Search";
import { FaFilter } from "react-icons/fa";

type Props = {
  categoryName: string | string[];
  products: Products[];
  queryParam?: string | null;
};

const Store = ({ categoryName, products, queryParam }: Props) => {
  const [search, setSearch] = React.useState(queryParam || "");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [quantityProducts, setQuantityProducts] = useState(8);

  const maxPrice = products.length > 0 ? Math.max(...products.map((product) => product.price)) : 0

  const [filters, setFilters] = React.useState({
    priceRange: { min: 0, max: maxPrice },
    materials: [] as string[],
    rating: [] as number[],
  });

  
  const filteredProducts = useMemo(() => {
    const searchFilteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

   
    return searchFilteredProducts.filter((product) => {
      const matchesPrice =
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max;

      const matchesMaterial =
        filters.materials.length === 0 ||
        filters.materials.includes(product.material);

      const matchesRating =
        filters.rating.length === 0 ||
        filters.rating.includes(
          product.rating >= 4.7 ? 5 : Math.floor(product.rating)
        );

      return matchesPrice && matchesMaterial && matchesRating;
    });
  }, [products, filters, search]);

  const handleResetFilters = () => {
    setFilters({
      priceRange: { min: 0, max: maxPrice },
      materials: [],
      rating: [],
    });
  };



  const handleChangeQuantityProducts = () => {
    setQuantityProducts(quantityProducts + 8);
  };

  const sliceProducts = filteredProducts.slice(0, quantityProducts);

  // Calcular la cantidad de productos por material
  const materialCounts = products.reduce((acc, product) => {
    acc[product.material] = (acc[product.material] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const availableMaterials = Object.keys(materialCounts);

  // Calcular la cantidad de productos por categoría de estrellas
  const ratingCounts = products.reduce((acc, product) => {
    const roundedRating = product.rating >= 4.7 ? 5 : Math.floor(product.rating);
    acc[roundedRating] = (acc[roundedRating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const availableRatings = [1, 2, 3, 4, 5];

  console.log("products", sliceProducts);

  return (
    <main>
      <header className="flex items-center justify-between">
        <h1>{categoryName}</h1>
      </header>
      <section className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-1/4">
          <button
            onClick={() => setIsMobileFiltersOpen(true)}
            className="mb-4 flex items-center gap-2 rounded-md bg-white px-4 py-2 shadow-sm md:hidden"
          >
            <FaFilter /> Filtros
          </button>
          <Filtros
            filters={filters}
            setFilters={setFilters}
            ismobile={isMobileFiltersOpen}
            setIsMobileFiltersOpen={setIsMobileFiltersOpen}
            resetFilters={handleResetFilters}
            availableMaterials={availableMaterials}
            maxPrice={maxPrice}
            availableRatings={availableRatings}
            materialCounts={materialCounts}
            ratingCounts={ratingCounts}
          />
        </div>
        <div className="flex flex-col gap-4 md:w-3/4">
          <Search searchProducts={search} setSearch={setSearch} />
          <Cards products={sliceProducts} />
          {sliceProducts.length < filteredProducts.length && (
            <div className="flex w-full justify-center">
              <button
                onClick={handleChangeQuantityProducts}
                className="rounded-md bg-light-brown px-4 py-2 text-white shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-brown hover:shadow-lg"
              >
                Cargar más
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Store;

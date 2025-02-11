import { Products } from "@/types/types";
import React, { useMemo, useState } from "react";
import Filtros from "./Filtros";
import Cards from "./Cards";
import Search from "./Search";
import { FaFilter } from "react-icons/fa";

type Props = {
  categoryName: string | string[];
  products: Products[];
};

const Store = ({ categoryName, products }: Props) => {
  const [search, setSearch] = React.useState("");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const maxPrice = Math.max(...products.map((product) => product.price));

  const [filters, setFilters] = React.useState({
    priceRange: { min: 0, max: maxPrice },
    materials: [] as string[],
    rating: [] as number[],
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });

      const matchesPrice =
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max;

      const matchesMaterial =
        filters.materials.length === 0 ||
        filters.materials.includes(product.material);

      const matchRating =
        filters.rating.length === 0 || filters.rating.includes(product.rating);

      return matchesPrice && matchesMaterial && matchRating && searchProducts;
    });
  }, [products, filters, search]);

  const handleResetFilters = () => {
    setFilters({
      priceRange: { min: 0, max: maxPrice },
      materials: [],
      rating: [],
    });
  };

  const availableMaterials = Array.from(new Set(products.map(product => product.material)));

  const availableRatings = Array.from(new Set(products.map(product => product.rating)));

  return (
    <main>
      <header className="flex items-center justify-between">
        <h1>{categoryName}</h1>
      </header>
      <section className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-1/4">
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="md:hidden mb-4 flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-sm"
        >
          <FaFilter /> Filtros
        </button>
          <Filtros filters={filters} setFilters={setFilters} ismobile={isMobileFiltersOpen} setIsMobileFiltersOpen={setIsMobileFiltersOpen} resetFilters={handleResetFilters} availableMaterials={availableMaterials} maxPrice={maxPrice} availableRatings={availableRatings} />
        </div>
        <div className="flex flex-col gap-4 md:w-3/4">
          <Search searchProducts={search} setSearch={setSearch} />
          <Cards products={filteredProducts}  />
        </div>
      </section>
    </main>
  );
};

export default Store;

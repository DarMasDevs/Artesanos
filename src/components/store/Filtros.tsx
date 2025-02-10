import React from 'react'
import { FaTimes } from 'react-icons/fa';

interface Props {
    filters: {
        priceRange: { min: number; max: number };
        materials: string[];
        rating: number[];
      };
      setFilters: React.Dispatch<React.SetStateAction<{
        priceRange: { min: number; max: number };
        materials: string[];
        rating: number[];
      }>>;
    ismobile : boolean
    setIsMobileFiltersOpen : React.Dispatch<React.SetStateAction<boolean>>
    resetFilters : () => void
    availableMaterials : string[]
    maxPrice : number
}

const Filtros = ({ filters, setFilters, ismobile,setIsMobileFiltersOpen, resetFilters, availableMaterials, maxPrice }: Props) => {
  return (
    <div className={`${ismobile ? "block" : "hidden"} md:block bg-white p-4 rounded-lg shadow-md`}>
    <div className="flex justify-between items-center mb-4 md:hidden">
      <h2 className="text-lg font-semibold">Filtros</h2>
      <button
        onClick={() => setIsMobileFiltersOpen(false)}
        className="text-gray-500 hover:text-gray-700"
      >
        <FaTimes />
      </button>
    </div>

    <div className="mb-6">
      <h3 className="font-medium mb-3">Precio</h3>
      <input
        type="range"
        min="0"
        max={maxPrice}
        value={filters.priceRange.max}
        onChange={(e) => setFilters(prev => ({
          ...prev,
          priceRange: { ...prev.priceRange, max: parseInt(e.target.value) }
        }))}
        className="w-full"
      />
      <div className="flex justify-between mt-2">
        <span>${filters.priceRange.min}</span>
        <span>${filters.priceRange.max}</span>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="font-medium mb-3">Materiales</h3>
      {availableMaterials.map(material => (
        <label key={material} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={filters.materials.includes(material)}
            onChange={(e) => {
              setFilters(prev => ({
                ...prev,
                materials: e.target.checked
                  ? [...prev.materials, material]
                  : prev.materials.filter(m => m !== material)
              }));
            }}
            className="mr-2"
          />
          {material}
        </label>
      ))}
    </div>

    <div className="mb-6">
      <h3 className="font-medium mb-3">Material</h3>
      {["Madera", "Metal", "Cuero"].map(material => (
        <label key={material} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={filters.materials.includes(material)}
            onChange={(e) => {
              setFilters(prev => ({
                ...prev,
                materials: e.target.checked
                  ? [...prev.materials, material]
                  : prev.materials.filter(m => m !== material)
              }));
            }}
            className="mr-2"
          />
          {material}
        </label>
      ))}
    </div>

    <button
      onClick={resetFilters}
      className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors"
    >
      Resetear Filtros
    </button>
  </div>
  )
}

export default Filtros
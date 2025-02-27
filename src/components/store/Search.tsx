import React from 'react'

type Props = {
    searchProducts: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ searchProducts, setSearch }: Props) => {
  return (
    <div className="flex justify-center items-center">
    <div className="w-full max-w-md">
      <input
        value={searchProducts}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Buscar..."
        className="w-full border border-blue-500 rounded-l-md pl-10 pr-4 py-2 text-tertiary bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
  )
}

export default Search
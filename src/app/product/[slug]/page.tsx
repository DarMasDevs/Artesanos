import { Products } from "@/types/types";
import { data } from "../../../../public/data";
import Details from "@/components/Details/Details";

// Función para simular una solicitud asíncrona
const fetchProductById = async (id: string): Promise<Products | undefined> => {
  return data.products.find((product) => product._id.toString() === id);
};

// Componente de la página
const ProductDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log(slug);

  const [id] = slug.split("-");
  const product = await fetchProductById(id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Details product={product} />
    </div>
  );
};

export default ProductDetail;

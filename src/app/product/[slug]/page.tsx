import { Products } from '@/types/types';
import { data } from '../../../../public/data';
import Details from '@/components/Details/Details';
import { Metadata } from 'next';

// Definir el tipo PageProps
interface PageProps {
  params: {
    slug: string;
  };
}

// Función para simular una solicitud asíncrona
const fetchProductById = async (id: string): Promise<Products | undefined> => {
  return data.products.find((product) => product._id.toString() === id);
};

// Función para generar metadatos
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const [id] = slug.split('-');
  const product = await fetchProductById(id);

  if (!product) {
    return {
      title: 'Producto no encontrado',
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

// Componente de la página
const ProductDetail = async ({ params }: PageProps) => {
  const { slug } = params;
  const [id] = slug.split('-');
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
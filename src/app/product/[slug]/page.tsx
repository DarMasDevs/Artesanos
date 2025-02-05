import { data } from '../../../../public/data';
import { Products } from '@/types/types';
import Details from '@/components/Details/Details';

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  const slug = params.slug;
  const [id] = slug.split('-');
  const product = data.products.find((product: Products) => product._id === id) || null;

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Details product={product} />
    </div>
  );
};

export async function generateStaticParams() {
  const paths = data.products.map((product) => ({
    slug: `${product._id}-${product.title.replace(/\s+/g, '-').toLowerCase()}`,
  }));

  return paths;
}

export default ProductDetail;
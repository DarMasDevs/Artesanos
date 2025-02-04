import { Products } from '@/types/types';
import { data } from '../../../../public/data';
import Details from '@/components/Details/Details';

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  //obtencion de slug  
  const { slug } = params;
  const [id] = slug.split('-');

  //obtencion de producto
  const product = data.products.find((product: Products) => product._id === id);

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
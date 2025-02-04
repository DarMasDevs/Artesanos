import { Products } from '@/types/types';
import { data } from '../../../../public/data';

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  const { slug } = params;

  const [id] = slug.split('-');

  const product = data.products.find((product: Products) => product._id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h1>Producto: {product.title}</h1>
      <p>ID del producto: {product._id}</p>
      <p>Descripción: {product.description}</p>
    </div>
  );
};

export default ProductDetail;
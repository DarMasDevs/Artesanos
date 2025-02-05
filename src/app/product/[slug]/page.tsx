import { Products } from "@/types/types";
import { data } from "../../../../public/data";
import Details from "@/components/Details/Details";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params;
  const [id] = slug.split("-");
  const product = data.products.find((product: Products) => product._id === id);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

const ProductDetail = ({ params }: PageProps) => {
  // Obtención del slug
  const { slug } = params;
  const [id] = slug.split("-");

  // Obtención del producto
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

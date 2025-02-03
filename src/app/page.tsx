import Carrousel from "@/components/Home/Carrousel/Carrousel";
import Hero from "@/components/Home/Hero";
import { data } from "../../public/data";

export default function Home() {
  const categories = data.categories;

  console.log(categories);

  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="bg-cream pt-10" id="products">
        {categories.map(({ name }, index) => (
          <Carrousel key={index} categoryName={name} />
        ))}
      </section>
    </main>
  );
}

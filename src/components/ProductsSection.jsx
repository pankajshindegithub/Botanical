import products from "../Data/Data";
import ProductCard from "../components/ProductCard";

const ProductsSection = () => {
  return (
    <section className="w-full py-10 mt-14">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-medium mb-8">
          Explore our popular collection of premium plants.
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {products.slice(0, 8).map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

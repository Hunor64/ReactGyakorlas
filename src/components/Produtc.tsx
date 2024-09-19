interface ProductData {
  name: string;
  price: number;
}

const Product: React.FC = () => {
  const product: ProductData = {
    name: "Thermonuclear Bomb",
    price: 0,
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Product;

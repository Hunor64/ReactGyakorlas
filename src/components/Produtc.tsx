type ProductData = {
  name: string;
  price: number;
};

const Product = (props:ProductData) => {
  return (
    <div>
      <h2>Terméknév: {props.name}</h2>
      <p>Ár: {props.price}</p>
    </div>
  );
};

export default Product;

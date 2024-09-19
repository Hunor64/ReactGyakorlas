type ShoppingItemProps = {
  name: string;
  quantity: number;
};
const ShoppingItem = (props: ShoppingItemProps) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <h3>{props.quantity}</h3>
    </div>
  );
};
export default ShoppingItem;

type ShoppingListItem = {
  name: string;
  quantity: number;
};

const ShoppingList = ({ props }: { props: ShoppingListItem[] }) => {
  return (
    <ul>
      {props.map((item) => (
        <li key={item.name}>
          {item.name} - {item.quantity}
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;

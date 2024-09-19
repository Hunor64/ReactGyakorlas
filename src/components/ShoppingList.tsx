type ShoppingListItem = {
  name: string;
  quantity: number;
};

const ShoppingList = ({ props }: { props: ShoppingListItem[] }) => {
  return (
    <ul>
      {props.map((item) => (
        <li>
          {item.name} - {item.quantity}
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;

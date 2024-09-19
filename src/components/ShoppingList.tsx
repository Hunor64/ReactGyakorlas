type ShoppingListItem = {
  name: string;
  quantity: number;
};

const ShoppingList = ({ data }: { data: ShoppingListItem[] }) => {
  return (
    <ul>
      {data.map((item) => (
        <li>
          {item.name} - {item.quantity}
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;

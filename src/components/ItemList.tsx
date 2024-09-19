const ItemList = () => {
  const items:string[] = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;

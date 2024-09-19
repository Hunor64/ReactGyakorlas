const ItemList = () => {
  const items:string[] = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      {items.map(item => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default ItemList;

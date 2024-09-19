const ItemList = () => {
  const items: string[] = [];
  for (let index = 1; index - 1 < 3; index++) {
    items.push("Item " + index);
  }

  return (
    <ul className="lista">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;

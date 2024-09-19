interface ShoppingListItem {
    name: string;
    quantity: number;
}

const ShoppingList = () => {
    const items: ShoppingListItem[] = [
        { name: "Apple", quantity: 5 },
        { name: "Banana", quantity: 3 },
        { name: "Orange", quantity: 2 },
    ];

    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;
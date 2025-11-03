import { useState } from "react";

const ShoppingList = () => {
	const [items, setItems] = useState([]);
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || quantity <= 0) return;
		const newItem = { name, quantity: parseInt(quantity) };
		setItems(prevItem => [...prevItem, newItem]);
		setName("");
		setQuantity(0);
	};

	return (
		<>
			<h1>Shopping List</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Item Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type='number'
					placeholder='Quantity'
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
				/>
				<button type='submit'>Add Item</button>
			</form>

			<ul>
				{
					items.map(item => (
						<li key={crypto.randomUUID()}>
							{item.name} - Quantity: {item.quantity}
						</li>
					))
				}
			</ul>
		</>
	);
};

export default ShoppingList;

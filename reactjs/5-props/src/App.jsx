const Cart = () => {
  const items = ['Wireless Earbuds', 'Power Bank', 'SSD', 'Hoodie'];

  return <>
    <h2>Cart🛒</h2>
    {items.length > 0 && <h2>You have {items.length} items in cart.</h2>}

    <h3>Products</h3>
    <ul>
      {items.map(item => <li key={crypto.randomUUID()}>{item}</li>)}
    </ul>
  </>;
};
const App = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default App;
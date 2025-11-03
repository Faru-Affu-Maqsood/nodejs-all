const Copy = () => {
  const copyHandler = (e) => {
    console.log(e);

    console.log('Stop stealing my content');
  };

  return (
    <p onCopy={copyHandler}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ipsam expedita iure blanditiis nihil? Perspiciatis nostrum dolorem sed ratione quos architecto eius dignissimos itaque deserunt voluptatem distinctio, delectus temporibus illo quae ad soluta totam libero eveniet recusandae officia modi voluptas. Totam eveniet praesentium amet. Omnis consectetur quis saepe sequi assumenda.</p>
  );
};

function App () {
  return (
    <>
      <Copy />
    </>
  );
}

export default App;

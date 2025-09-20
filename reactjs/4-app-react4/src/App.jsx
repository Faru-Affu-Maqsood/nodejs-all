function App () {
  const usersInfo = [
    {
      username: 'Ahad',
      email: 'ahad@theonlineguru.com',
      location: 'Universe'
    },
  ];
  return (
    <>
      <ul>
        {
          numbers.map((n) => (
            <li key={crypto.randomUUID()}>Num: {n}</li>
          ))
        }
      </ul>
    </>
  );
}

export default App;

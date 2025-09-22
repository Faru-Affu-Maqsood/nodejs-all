function App () {
  const usersInfo = [
    {
      username: 'Ahad',
      email: 'ahad@theonlineguru.com',
      location: 'Universe'
    },
    {
      username: 'Mohammed',
      email: 'mohammed@theuniversalguru.com',
      location: 'Mecca & Medina'
    },
    {
      username: 'Maqsood',
      email: 'maqsood@theonlineguru.com',
      location: 'Guntur'
    },
    {
      username: 'Farheen',
      email: 'farheen@theonlineguru.com',
      location: 'Guntur'
    },
    {
      username: 'Afshaan',
      email: 'afshaann@theonlineguru.com',
      location: 'Guntur'
    },
  ];

  return (
    <>
      <main>
        {usersInfo.map(({ username, email, location }) => (
          <div key={crypto.randomUUID()} style={{ marginTop: '10px', borderBottom: '1px solid #f1f1f1' }}>
            <p style={{ margin: '0' }}><span style={{ fontWeight: 'bolder' }}>Name</span>: {username}</p>
            <p style={{ margin: '0' }}><span style={{ fontWeight: 'bolder' }}>Email</span>: {email}</p>
            <p style={{ margin: '0', marginBottom: '10px' }}><span style={{ fontWeight: 'bolder' }}>Location</span>: {location}</p>
          </div>
        ))}
      </main >
    </>
  );
}

export default App;

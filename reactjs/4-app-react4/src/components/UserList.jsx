const UserList = () => {
    const users = [
        { id: 1, name: 'Jameel', age: 25 },
        { id: 2, name: 'Sohail', age: 22 },
        { id: 3, name: 'Manish', age: 27 },
        { id: 4, name: 'Akhil', age: 21 },
    ];
    return (
        <div>
            {users.map(user => (
                <div key={user.id} style={{ borderBottom: '1px solid #f1f1f1' }}>
                    <blockquote>Name: {user.name}</blockquote>
                    <blockquote>Age: {user.age}</blockquote>
                </div>
            ))}
        </div>
    );
};

export default UserList;
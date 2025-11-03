const UserStatus = ({ loggedIn, isAdmin }) => {

    return loggedIn && isAdmin ? <h1>Welcome Admin!</h1> : <h1>Welcome Guest!</h1>;
};

export default UserStatus;
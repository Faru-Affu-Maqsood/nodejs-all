import UpdateUser from "./components/solutions/UpdateUser";
import { UserProvider } from "./components/solutions/UserContext";
import UserProfile from "./components/solutions/UserProfile";

function App() {
  return (
    <>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </>
  );
}

export default App;

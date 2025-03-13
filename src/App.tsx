import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("App must be used within an AppProvider");
  }

  const { isAuth, setIsAuth } = context;

  return (
    <div>
      <h1>{isAuth ? "User is authenticated" : "User is not authenticated"}</h1>
      <button onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default App;

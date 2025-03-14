import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useCounterStore } from "./store/useCounterStore";

function App() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("App must be used within an AppProvider");
  }

  const { isAuth, setIsAuth } = context;

  const { count, increment, decrement, incrementBy, decrementBy } = useCounterStore();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <div>UseConetxt Part
        <h1>{isAuth ? "User is authenticated" : "User is not authenticated"}</h1>
        <button onClick={() => setIsAuth(!isAuth)}>
          {isAuth ? "Log Out" : "Log In"}
        </button>
      </div>

      <div className="">-------------------------------------------</div>

      <div className=""> Use Zustand Part
        <h1>Count: {count}</h1>

        <div>
          <button onClick={decrement} style={{ marginRight: "10px" }}>
            ➖ Decrement
          </button>
          <button onClick={increment}>➕ Increment</button>
        </div>

        <div>
          <button onClick={() => decrementBy(2)} style={{ marginRight: "10px" }}>
            ➖ Decrement By 2
          </button>
          <button onClick={() => decrementBy(5)} style={{ marginRight: "10px" }}>
            ➖ Decrement By 5
          </button>
          <button onClick={() => decrementBy(7)} style={{ marginRight: "10px" }}>
            ➖ Decrement By 7
          </button>
        </div>

        <div>
          <button onClick={() => incrementBy(2)} style={{ marginRight: "10px" }}>
            ➕ Increment By 2
          </button>
          <button onClick={() => incrementBy(5)} style={{ marginRight: "10px" }}>
            ➕ Increment By 5
          </button>
          <button onClick={() => incrementBy(7)} style={{ marginRight: "10px" }}>
            ➕ Increment By 7
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
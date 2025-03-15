import Auth from "./components/Auth";
import Count from "./components/Count";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <Auth />

      <div className=""> ------------------ ------------------ ------------------</div>

      <Count />

    </div>
  );
}

export default App;
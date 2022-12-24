import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;

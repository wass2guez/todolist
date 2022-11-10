import Home from "./page/Home";
import bg from "../src/components/assets/bg.jpg";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
        height: "100vh",
        width: "100vw",
      }}
    >
      <CssBaseline />

      <Home />
    </div>
  );
}

export default App;

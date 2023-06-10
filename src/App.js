import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Card />} />
    </Routes>
  );
}

export default App;

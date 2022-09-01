import { Routes, Route, Navigate, Link } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
}

export default App;

import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

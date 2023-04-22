import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="w-[1440px] m-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Data from "./Pages/Data";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/">
        
          <Route index element={<Home />} />
          
          {/* data page for testing route remove later */}
          <Route path="/data" element={<Data />} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;



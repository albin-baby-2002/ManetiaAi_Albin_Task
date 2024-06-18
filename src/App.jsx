
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Data from "./Pages/Data";
import Contact from "./Pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/">
        
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
          
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;



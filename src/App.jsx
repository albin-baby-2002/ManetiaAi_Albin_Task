import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import CustomerDashboard from "./Pages/CustomerDashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customers" element={<CustomerDashboard />} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

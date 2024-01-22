
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/Homepage";
import { LoginPage } from "./Pages/LoginPage";
import { ProductPage } from "./Pages/ProductPage";

function App() {
const routes = createBrowserRouter([
  {path:"/",element:<HomePage></HomePage>},
  {path:"/login",element:<LoginPage></LoginPage>},
  {path:"/auth/products",element:<ProductPage></ProductPage>}
]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;

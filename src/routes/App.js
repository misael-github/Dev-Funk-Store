import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Cart from "../containers/Cart";
import Product from "../containers/Product";
import Layout from "../components/Layout";
import UsarContexto from "../context/UsarContexto";

function App() {
  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      /> */}
      <BrowserRouter>
        <UsarContexto>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home></Home>}></Route>
              <Route exact path="/cart" element={<Cart></Cart>}></Route>
              <Route
                exact
                path="/product"
                element={<Product></Product>}
              ></Route>
            </Routes>
          </Layout>
        </UsarContexto>
      </BrowserRouter>
    </>
  );
}

export default App;

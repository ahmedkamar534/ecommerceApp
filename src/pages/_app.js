import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../../components/Navbar'/Navbar";
import "@/styles/globals.css";
import { CartContextProvider } from "../../components/store/Context";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Navbar />
      <div className="container">
        {" "}
        <Component {...pageProps} />
      </div>
    </CartContextProvider>
  );
}

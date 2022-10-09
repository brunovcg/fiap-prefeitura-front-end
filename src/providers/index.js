import { StoreProvider } from "./store";
import { BrowserRouter } from "react-router-dom";

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <StoreProvider>{children}</StoreProvider>
    </BrowserRouter>
  );
};

export default Providers;

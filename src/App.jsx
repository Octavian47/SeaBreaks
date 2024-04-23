import { useEffect } from "react";
import $ from "jquery";
import { HelmetProvider } from "react-helmet-async";
import AppRouter from "./routes/AppRouter";
import "@vendor/css/bundle.min.css";
const App = () => {
  useEffect(() => {
    window.$ = window.jQuery = $;
  }, []);
  return <HelmetProvider>
      <AppRouter />
    </HelmetProvider>;
};
export default App;
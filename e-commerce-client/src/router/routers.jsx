import { Route, Routes } from "react-router-dom";
// Protected Route
import Protected from "../layout/Protected";
import Auth from "../layout/Auth";
// Pages
import Index from "../pages";
import About from "../pages/about";
import Error from "../pages/error";
import Contact from "../pages/contact";
const Routing = () => {
  return (
    <Routes>
      <Route element={<Auth />}>
        <Route exact path="/login" Component={Index}></Route>
        <Route exact path="/register" Component={Index}></Route>
      </Route>
      <Route element={<Protected />}>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
export default Routing;

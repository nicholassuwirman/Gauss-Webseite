import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import ScrollToTop from "./ScrollToTop"; // Import this

// Import components
import Home from "./containers/pages/home/home";
import BikesHome from "./containers/pages/bikes/bikes-home/bikesHome";
import About from "./containers/pages/about/about";
import Gauss1 from "./containers/pages/bikes/gauss1/gauss1";
import Gauss2 from "./containers/pages/bikes/gauss2/gauss2";
import Team from "./containers/pages/about/team/team";
import History from "./containers/pages/about/history/history";
import Department from "./containers/pages/department/department";
import Partners from "./containers/pages/partners/partners";
import OurPartners from "./containers/pages/partners/ourPartners/ourPartners";
import BecomePartner from "./containers/pages/partners/becomePartner/becomePartner";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ScrollToTop /> {/* This ensures scrolling to top when route changes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikesHome" element={<BikesHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/bikesHome/gauss1" element={<Gauss1 />} />
          <Route path="/bikesHome/gauss2" element={<Gauss2 />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/department" element={<Department />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/ourPartners" element={<OurPartners />} />
          <Route path="/partners/becomePartner" element={<BecomePartner />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
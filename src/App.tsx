import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Theme } from "@/application/enums/shared/Theme";

import Landing from "@/views/front/Landing";
import Pricing from "@/views/front/Pricing";
import Contact from "@/views/front/Contact";
import Privacy from "@/views/front/PrivacyPolicy";
import Terms from "@/views/front/TermsAndConditions";
import Components from "@/views/front/Components";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Login from "@/views/front/account/Login";
import Register from "@/views/front/account/Register";
import Invitation from "@/views/front/account/Invitation";
import Verify from "@/views/front/account/Verify";
import Forgot from "@/views/front/account/Forgot";
import Reset from "@/views/front/account/Reset";
import JoinTenant from "@/views/front/account/JoinTenant";

import ScrollToTop from "./router/ScrollToTop";
import TopBanner from "./components/ui/banners/TopBanner";

export default function App() {
  const theme = useSelector<RootState>((state) => state.theme.value);

  useEffect(() => {
    const htmlClasses = document.querySelector("html")?.classList;
    if (theme === Theme.LIGHT) {
      htmlClasses?.remove("dark");
    } else {
      htmlClasses?.add("dark");
    }
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <TopBanner />
      <HelmetProvider>
        <Helmet>
          <title>React SaasFrontend</title>
        </Helmet>
      </HelmetProvider>

      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/components" element={<Components />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/join/:tenant" element={<JoinTenant />} />
        </Route>
      </Routes>
    </Router>
  );
}

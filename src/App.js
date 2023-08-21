import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Archive from "./pages/archive/Archive";
import Members from "./pages/members/Members";
import Alumni from "./pages/alumni/Alumni";
import Contact from "./pages/contact/Contact";
import Sune10 from "./pages/sune1.0/Sune10";
import NotFound from "./pages/notfound/NotFound";

const App = () => {
  const data = {
    discordLink: 'https://example.com/',
    motto: "(C U' B' E) (C O N2 E C T) (C O N Q U E R')",
    mainAbout: "TheSune is the cubing club of DPS Vasant Kunj. We are blisteringly fast cubers ranging from 2x2 to pyramix.",
    history: "In the beginning of the academic session 2022-23, Viraj Uday Singh (Class-11) and Akshit Gohain (Class-12) under the guidance of Ms. Gayatri Chowhan and Mr. Dushyant Sharma, proposed setting up a students’ club to promote cubing, sharing the techniques of cubing among interested students and preparing for competitive cubing. The school administration, always receptive to student enrichment and development proposals, promptly approved the same. This laid the foundation of ‘TheSune – The Cubing Club of DPS Vasant Kunj’.",
    history2: "The Club received an overwhelming response and within a month of being setup, it had more than 100 members. These members interact through a dedicated Discord Server, hold regular meetings and, share their cubing skills."
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout data={data} />}>
          <Route index element={<Home />} />
          <Route path="archive" element={<Archive />} />
          <Route path="members" element={<Members />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sune1.0" element={<Sune10 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

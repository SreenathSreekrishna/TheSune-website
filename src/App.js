import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Archive from "./pages/archive/Archive";
import Members from "./pages/members/Members";
import Alumni from "./pages/alumni/Alumni";
import Contact from "./pages/contact/Contact";
import _3athon from "./pages/^3athon/^3athon";
import NotFound from "./pages/notfound/NotFound";

const App = () => {
  const data = {
    widgetLink: "https://discord.com/widget?id=939573906535223326&theme=dark",
    discordLink: 'https://discord.gg/Z4zc4S6y',
    motto: "(C U' B' E) (C O N2 E C T) (C O N Q U E R')",
    mainAbout: "TheSune is the cubing club of DPS Vasant Kunj. We are blisteringly fast cubers ranging from 2x2 to pyramix.",
    history: "In the beginning of the academic session 2022-23, Viraj Uday Singh (Class-11) and Akshit Gohain (Class-12) under the guidance of Ms. Gayatri Chowhan and Mr. Dushyant Sharma, proposed setting up a students’ club to promote cubing, sharing the techniques of cubing among interested students and preparing for competitive cubing. The school administration, always receptive to student enrichment and development proposals, promptly approved the same. This laid the foundation of ‘TheSune – The Cubing Club of DPS Vasant Kunj’. The Club received an overwhelming response and within a month of being setup, it had more than 100 members. These members interact through a dedicated Discord Server, hold regular meetings and, share their cubing skills.",
    historyImages: ['/assets/images/introduction/img1.png',
                    '/assets/images/introduction/img2.png',
                    '/assets/images/introduction/img3.png'],
    discordText: "Join our discord server to get notified about upcoming events. We also help and assist dipsites interested in the fields of expertise covered by our club.",
    members: [
      // {name: "prez 1", role: "president", socials:[], pfp: ""},
      // {name: "prez 2", role: "president", socials:[], pfp: ""},
      {name: "Soumil Sahu", role: "vice_president", socials:[], pfp: "/assets/images/sune_members/Soumil%20Sahu.webp"},
      {name: "Samanyu Naik", role: "vice_president", socials:[], pfp: "/assets/images/sune_members/Samanyu%20Naik.webp"},
      {name: "Aviansh Verma", role: "core_member", socials:[], pfp: "/assets/images/sune_members/Aviansh%20Verma.webp"},
      {name: "Neev Sahay", role: "core_member", socials:[], pfp: "/assets/images/sune_members/Neev%20Sahay.webp"},
      {name: "Sanyog Das", role: "core_member", socials:[], pfp: "/assets/images/sune_members/Sanyog%20Das.webp"},
      {name: "Ayushman Gupta", role: "core_member", socials:[], pfp: "/assets/images/sune_members/Ayushman%20Gupta.webp"},
    ],
    alumni: [
      {name: "Viraj Uday Singh", role: "alumni", socials:[], year:"2023", pfp: "/assets/images/sune_members/Viraj%20Uday%20Singh.webp"},
      {name: "Shaurya Raizada", role: "alumni", socials:[], year:"2023", pfp: "/assets/images/sune_members/Shaurya%20Raizada.webp"},
      {name: "Aarav Mishra", role: "alumni", socials:[], year:"2023", pfp: "/assets/images/sune_members/Aarav%20Mishra.webp"},
      {name: "Akshit Gohain", role: "alumni", socials:[], year:"2022", pfp: "/assets/images/sune_members/Akshit%20Gohain.webp"},
      {name: "Krishang Phogat", role: "alumni", socials:[], year:"2022", pfp: "/assets/images/sune_members/Krishang%20Phogat.webp"}
    ],
    contact: {
      school: 'principal@dpsvasantkunj.com',
      club: 'contactus@thesune.org'
    }
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
          <Route path="^3athon" element={<_3athon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

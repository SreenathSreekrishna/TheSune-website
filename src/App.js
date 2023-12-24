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
      {name: "Soumil Sahu", role: "vice_president", socials:[], pfp: "/assets/images/sune_members/Soumil Sahu.webp"},
      {name: "Samanyu Naik", role: "vice_president", socials:[], pfp: "/assets/images/sune_members/Samanyu Naik.webp"},
      {name: "Viraj Uday Singh", role: "core_member", socials:[], pfp: "/assets/images/sune_members/Viraj Uday Singh.webp"},
      {name: "Shaurya Raizada", role: "core_member", socials:[], pfp: ""},
      {name: "Aarav Mishra", role: "core_member", socials:[], pfp: ""},
      {name: "Aviansh Verma", role: "core_member", socials:[], pfp: "/assets/images/sune_members/Aviansh Verma.webp"},
      {name: "Neev Sahay", role: "core_member", socials:[], pfp: "/assets/images/sune_members/Neev Sahay.webp"},
      {name: "Sanyog Das", role: "core_member", socials:[], pfp: ""},
      {name: "Ayushman Gupta", role: "core_member", socials:[], pfp: "/assets/images/sune_members/Ayushman Gupta.webp"},
      {name: "Aditya Chauhan", role: "trainee", socials:[], pfp: ""},
      {name: "Rishit Litoria", role: "trainee", socials:[], pfp: ""}
    ],
    alumni: [
      {name: "alum1", role: "alumni", socials:[], pfp: "", year:"2021"},
      {name: "alum2", role: "alumni", socials:[], pfp: "", year:"2022"},
      {name: "alum3", role: "alumni", socials:[], pfp: "", year:"2022"}
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

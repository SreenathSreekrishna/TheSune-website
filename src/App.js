import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Archive from "./pages/archive/Archive";
import Members from "./pages/members/Members";
import Achievements from "./pages/achievements/Achievements";
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
    },
    archive: {
      content: [{
        date: 'June 13, 2022',
        title: 'Online Intra-school 3x3 Cubing Competition',
        content: 
`
The maiden event of the Club was held on 13th June, 2022 during the summer vacations. This was the online Intra-school Cubing Competition. The event was conducted via Discord and 24 students participated in it. The results of the event were as follows -
1. Garv Jhuremalani (XI)
2. Samanyu Naik (X)
3. Aditya Chauhan (VIII)
`,
    },
    {
        date: 'July 22, 2022',
        title: 'Intra-school 3x3 Cubing Competition for classes VI to IX',
        content: 
`
The first offline event of the Club was held on 22nd July, 2022. This was the Intra-school Cubing Competition for classes VI to IX. It was held in the Maths Lab. The students took great interest in this activity and 41 students participated. The organizers, Viraj Uday Singh (XI-A), Akshit Gohain (XII-B) and Krishaang Phogat (XII-B) meticulously planned the event and hosted several rounds of cubing for each class. The event went through without any glitches.
`,
    },
    {
        date: 'August 18, 2022',
        title: 'Intra-school 3x3 Cubing Competition for classes X to XI',
        content: 
`
The offline senior intra of the club was organized on 18th August,2022 for Classes X and XI. It was held in the Maths Lab. The event received an enthusiastic response and more than 30 students participated. Viraj Uday Singh (XI-A), Akshit Gohain (XII-B) and Krishaang Phogat (XII-B) spearheaded the 3x3 event with the help of a few volunteers. The following students were inducted as core members –
1. Aarav Mishra XI – B
2. Shaurya Raizada XI – H
3. Yatharth Pandey XI – A
4. Roshan Sharma XI – C
5. Vedanta Somnathe XI – B
6. Shri Krishna Tiwari XI – A
7. ArmanXI–E
8. Soumil Sahu X – D
9. Atharv Gulati X – B
`,
    },
    {
        date: 'November 3, 2022',
        title: 'Intra-school 2x2 Cubing Competition for classes VI to XI',
        content: 'The 2x2 intra-school cubing competition was organized for classes VI to VIII on 3rd November, 2022 and for classes IX to XI on 9th November, 2022 in the Maths Lab. 50 students participated in the event. The event generated lot of interest in the 2x2 cube and added diversity to the club activities.',
    },
    {
        date: 'May 17, 2023',
        title: 'Intra-school 3x3 Cubing Competition for classes VI to X',
        content: 
`
The intra-school cubing competition [2023] was held on 17th May (class 6 and 7) and 18th May (class 8-10) . The event was held in the Maths Lab. The students took great interest in the event with a participation of 146 students out of which 53 solved the puzzle within the cutoff time. The organizers, Aarav Mishra (XII-B), Viraj Uday Singh (XII-A), Shaurya Raizada (XII-H), Sanyog Das (XI-A) and Soumil Sahu (XI-D) made the blueprint of the event and executed the event without any drawbacks. The following were recruited as new core members of the club -
1. Aviansh Verma (X-E)
2. Ayushman Gupta (X-E)
3. Neev Sahay (X-F)
`,
    },
    {
        date: 'July 13, 2023',
        title: `Rubik's Cube Workshop`,
        content: 
`
A Rubik's Cube workshop on Thursday, 13th July 2023, for class 4th and 5th. The event took place during the 4th and 5th periods in the mini auditorium and recieved a participation of over 80 students. The workshop began with an engaging PowerPoint presentation that explained the basics of the Rubik's Cube and its history. The students were introduced to the fundamentals of the colourful puzzle igniting their curiosity. The hands-on experience provided during the workshop helped students to get down the basics of the Rubik's Cube with guidance from club members.
`,
    }]
    },
    achievements: {
      content: [{
        date: 'October 8, 2022',
        title: 'Matrix E-Com',
        content: 
`
Matrix E-Com 2022 was organized by Mount St. Mary's School, Delhi Cantt. Viraj Uday Singh (XI-A) won the First prize in the 3×3 event.
`,
    },
    {
        date: 'November 12, 2022',
        title: 'Exun',
        content: 
`
Exun is an inter school tech competition organized by the Tech club of DPS R.K. Puram. The preliminary rounds for the categories 2×2, 3×3 and pyraminx were held online and the final round was held offline.
Exun - 2x2: Akshit Gohain of class XII-B bagged the first prize.
Exun - 3x3: Akshit Gohain of class XII-B won the first prize.
Exun - Pyraminx: Akshit Gohain of class XII-B won the first prize.
`,
    },
    {
        date: 'October 27, 2023',
        title: 'WarP',
        content: 
`
WarP is an inter school competition organized by the Tech club of DPS Mathura Road. The preliminary round for this event was conducted online while the final round was held offline.
WarP - 2x2: Soumil Sahu of class XI-D won the second prize.
WarP - 3x3: Samanyu Naik of class XI-H won the third prize.
`,
    },
    {
        date: 'November 4, 2023',
        title: 'Exun',
        content: `
Exun is an inter school competition organized by the Tech club of DPS R.K. Puram. The preliminary round for this event was conducted online while the final round was held offline.
Exun - 2x2: Soumil Sahu of class XI-D won the second prize.
Exun - 3x3: Samanyu Naik of class XI-H won the first prize.
Exun - Pyraminx: Soumil Sahu of class XI-D won the first prize.
Exun - Surprise: Aviansh Verma of class X-E won the first prize.
`
    }
    ]
  }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout data={data} />}>
          <Route index element={<Home />} />
          <Route path="archive" element={<Archive />} />
          <Route path="members" element={<Members />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="contact" element={<Contact />} />
          <Route path="^3athon" element={<_3athon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

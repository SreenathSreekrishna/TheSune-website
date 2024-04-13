import './Archive.css';

const Archive = () => {
    const content = [
        {
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
        }
    ]

    content.sort((a,b) => {
        return Date.parse(b.date) - Date.parse(a.date);
    })

    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
    return <>
    <div className='heading heading-archive'>
        Archive
    </div>
    <div className='archive'>
        {
        content.map(i => {
            let d = new Date(i.date);
            return <div className='archive-item'>
                <div className='archive-item-date'>{DAYS[d.getDay()]}, {i.date}</div>
                <div className='archive-item-heading'>{i.title}</div>
                <div className='archive-item-content'><p>{i.content}</p></div>
            </div>
        })
        }
    </div>
    </>;
}

export default Archive;
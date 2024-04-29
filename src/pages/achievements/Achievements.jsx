import './Achievements.css';
import { useOutletContext } from 'react-router';

const Achievements = () => {
    const content = useOutletContext().achievements.content; 

    content.sort((a,b) => {
        return Date.parse(b.date) - Date.parse(a.date);
    })

    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
    return <>
    <div className='heading heading-achievements'>
        Achievements
    </div>
    <div className='achievements'>
        {
        content.map(i => {
            let d = new Date(i.date);
            return <div className='achievements-item'>
                <div className='achievements-item-date'>{DAYS[d.getDay()]}, {i.date}</div>
                <div className='achievements-item-heading'>{i.title}</div>
                <div className='achievements-item-content'><p>{i.content}</p></div>
            </div>
        })
        }
    </div>
    </>;
}

export default Achievements;
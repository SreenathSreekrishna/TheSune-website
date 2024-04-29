import './Archive.css';
import { useOutletContext } from 'react-router';

const Archive = () => {
    const content = useOutletContext().archive.content; 

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
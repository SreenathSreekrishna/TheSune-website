import { useState } from 'react';
import './Contact.css';
import { useOutletContext } from 'react-router';

const Contact = () => {
    const data = useOutletContext();
    const {school, club} = data.contact;
    const [copied, setCopied] = useState(false);
    const handleClick = (type) => {
        if (type === 'school') {
            window.navigator.clipboard.writeText(school);
            setCopied(true);
            setTimeout(() => {
                setCopied(false)
            }, 2000);
        }
        if (type === 'club') {
            window.navigator.clipboard.writeText(club);
            setCopied(true);
            setTimeout(() => {
                setCopied(false)
            }, 2000);
        }
    }
    return <div>
        <div className='heading heading-contact'>
            Contact Us
        </div>
        <div className='contact'>
            <div className='club-contact'>
                <div className='contact-text'>Club E-Mail</div>
                <a className='contact-link' href={`mailto:${club}`}>{club}</a>
                <button className='contact-copy' onClick={() => handleClick('club')}>Copy</button>
            </div>
            <div className='school-contact'>
                <div className='contact-text'>School E-Mail</div>
                <a className='contact-link' href={`mailto:${school}`}>{school}</a>
                <button className='contact-copy' onClick={() => handleClick('school')}>Copy</button>
            </div>
        </div>
        <div className='copied-alert' style={{display:copied ? 'block' : 'none'}}>
            E-Mail Copied
        </div>
    </div>;
}

export default Contact;
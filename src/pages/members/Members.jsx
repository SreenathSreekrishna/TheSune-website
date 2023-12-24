import './Members.css';
import { useOutletContext } from 'react-router';
import MemberCard from '../../components/MemberCard';

const Members = () => {
    const data = useOutletContext();
    return <div className="members">
        <h1 className="heading-center heading-members">Members</h1>
        {["President", "Vice President", "Core Member", "Trainee"].map(v => {
        const code = v.toLowerCase().replace(" ","_");
        const users = data.members.filter((e) => {return e.role === code});
        return <div className={`${code}s`}>
            <h1 className="subheading">{users.length ? v+"s" : ""}</h1>
            <div className={`${code}-container role-container`}>
                {users.map((person,i) => {
                    return <MemberCard code={code} person={person} key={i} />;
                })}
            </div>
        </div>;})}
    </div>;
}

export default Members;
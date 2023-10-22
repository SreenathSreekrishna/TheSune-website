import './Members.css';
import { useOutletContext } from 'react-router';

const Members = () => {
    const data = useOutletContext();
    return <div className="members">
        <h1 className="heading-center heading-members">Members</h1>
        {["President", "Vice President", "Core Member", "Member"].map(v => {
        const code = v.toLowerCase().replace(" ","_");
        return <div className={`${code}s`}>
            <h1 className="subheading">{v+"s"}</h1>
            <div className={`${code}-container role-container`}>
                {data.members.filter((e) => {return e.role === code}).map(president => {
                    return <div className={`${code} role`}>
                        <div className="person-pfp" style={{"--pfp-img": `url("${president.pfp}")`}}></div>
                        <div className="person-name">{president.name}</div>
                        <div className="person-socials">
                            {president.socials.map(social => {
                                return <div className={`social ${social.type}`}></div>
                            })}
                        </div>
                    </div>;
                })}
            </div>
        </div>;})}
    </div>;
}

export default Members;
import './Alumni.css';
import { useOutletContext } from "react-router-dom";
import MemberCard from "../../components/MemberCard";

const Alumni = () => {
    const data = useOutletContext();
    return <div className="alumni">
        <h1 className="heading-center heading-alumni">Alumni</h1>
        {["2023", "2022"].map((v,j) => {
        const code = v + '-' + (Number(v.slice(2))+1).toString()
        return <div className={"alumnus-container " + v} key={j}>
            <h1 className="subheading">{code}</h1>
            <div className={`role-container`}>
                {data.alumni.filter((e) => {return e.year === v}).map((person,i) => {
                    return <MemberCard code={v} person={person} key={i} />;
                })}
            </div>
        </div>;})}
    </div>;;
}

export default Alumni;
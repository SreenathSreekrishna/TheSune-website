const MemberCard = (props) => {
    return <div className={`${props.code} role`}>
        <div className="person-pfp" style={{"--pfp-img": `url(${props.person.pfp ? props.person.pfp : "https://archive.org/download/twitter-default-pfp/__ia_thumb.jpg"})`}}></div>
        <div className="person-name">{props.person.name}</div>
        <div className="person-socials">
            {props.person.socials.map(social => {
                return <div className={`social ${social.type}`}></div>
            })}
        </div>
    </div>;
}

export default MemberCard;
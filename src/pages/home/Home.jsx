import { useOutletContext } from "react-router";

const Home = () => {
    const data = useOutletContext();
    return <div>
        Home
    </div>;
}

export default Home;
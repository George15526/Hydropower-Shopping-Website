// HomePage.jsx

import HomeAd from "../components/HomeAd/HomeAd";
import Navbar from "../components/Navbar/Navbar";
import Navbar_category from "../components/Navbar/Navbar_category";


function HomePage() {
    return (
        <>
            <Navbar />
            <Navbar_category />
            <HomeAd />
        </>
    )
}

export default HomePage;

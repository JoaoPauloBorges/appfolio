import React from "react";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <section style={{ margin: "10px auto", maxWidth: "70%", paddingTop: "5px" }}>
                <p> Hello little world <span role="img" aria-label="world">🌎</span> </p>
            </section>
        </div>
    );
}
export default Home;
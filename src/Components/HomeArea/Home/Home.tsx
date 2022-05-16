import "./Home.css";
import useTitle from "../../../Utils/useTitle";

function Home(): JSX.Element {

    useTitle("Resume - Home")

    return (
        <div className="Home">

            <h1>About me</h1>

            <div className="HomeContainer">
                {/* General Information */}
                <div>
                    <h2>General</h2>
                    <p><b>Full Name:</b> Omer Sharon.</p>
                    <p><b>BirthDate:</b> 19, April, 1995.</p>
                    <p><b>Address:</b> Azeitim 1, Givat Shmuel.</p>
                </div>
                {/* Contact Information */}
                <div>
                    <h2>Contact</h2>
                    <p><b>Email:</b> Omer.sharon4@gmail.com</p>
                    <p><b>Phone Number:</b> 054-6205035</p>
                    <p><b>LinkedIn:</b> @linkedin.com/in/omer-sharon4</p>
                </div>
            </div>
            {/* Description */}
            <div className="toBottom">
                <h2>Describe Yourself</h2>
                <span> Hard working non-experienced front end developer </span>
                <br />
                <span> Full of passion for automation and development </span>
                <br />
                <span> Practical understanding and expertise about system administration roles </span>
            </div>
        </div>
    );
}

export default Home;

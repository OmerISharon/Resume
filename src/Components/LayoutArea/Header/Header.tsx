import "./Header.css";
import ProfilePicture from "../../../Assets/Images/ProfilePicture.jpg";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <h1>Resume - Omer Sharon</h1>
            <h3>Front-End Developer</h3>

            {/* <img src={ProfilePicture} alt="myProfile" /> */}
{/* 
            <div className="General">
                <p>birth Birthdate: <i>19, April, 1995</i></p>
                <p> Address: <i>Azeitim 1, Givat Shmuel, Israel</i></p>
                <p> Languages:<i> Hebrew, English</i></p>
            </div> */}

            <div className="Contact">
                <p>📧 Email: <a href="mailto: omer.sharon4@gmail.com">omer.sharon4@gmail.com</a> </p>
                <p>📞 Phone: <a href="https://api.whatsapp.com/send?phone=972546205035" target="_blank">054-6205035</a> </p>
                <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/omer-sharon4/" target="_blank">@linkedin.com/in/omer-sharon4</a> </p>
            </div>

        </div>
    );
}

export default Header;

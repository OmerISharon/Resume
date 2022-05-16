import useTitle from "../../../Utils/useTitle";
import "./Education.css";

function Education(): JSX.Element {

    useTitle("Resume - Education")

    return (
        <div className="Education">
            <h1> Education</h1>

            <div className="EducationContainer">
                <div>
                    <h2>2022</h2>
                    <h3>Front-End Development</h3>
                    <h4> React single page application development (TypeScript) </h4>
                    <h5> <i> JohnBryce | 40 Hours total </i> </h5>
                    <br />
                    <br />
                    <div> <b>Subjects</b> </div>
                    <div> Functional and Class components </div>
                    <div> React Hooks </div>
                    <div> Two-Way-Binding </div>
                    <div> Routing </div> 
                    <div> LifeCycle Hooks </div>
                    <div> Memoization </div>
                    <div> HOC </div>
                    <div> Promises </div>
                </div>
                <br />
                <br />
                <br />

                <div>
                    <h2>2021</h2>
                    <h3>QA Automation</h3>
                    <h4> QA automation with JMeter and Postman </h4>
                    <h5> <i> JohnBryce | 45 Hours total </i> </h5>
                    <br />
                    <br />
                    <div> <b>Subjects</b> </div>
                    <div> Execution of load testing using JMeter. </div>
                    <div> Execution of QA automation test collections using Postman. </div>
                </div>
                <br />
                <br />
                <br />

                <div>
                    <h2>2017</h2>
                    <h3>Web Full Stack Development</h3>
                    <h4> Web Application Development (JavaScript) </h4>
                    <h5> <i> UDEMY | 60 Hours total </i> </h5>
                    <br />
                    <br />
                    <div> <b>Subjects</b> </div>
                    <div> Advanced HTML </div>
                    <div> Pure CSS | Bootstrap </div>
                    <div> Pure JavaScript | jQuery </div>
                    <div> RESTful Routing | NodeJS | MongoDB </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

export default Education;

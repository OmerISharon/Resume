import useTitle from "../../../Utils/useTitle";
import "./Experience.css";


function Experience(): JSX.Element {

    useTitle("Resume - Experience");

    return (
        <div className="Experience">
            <h1> Professional Experience </h1>
            <div className="ExperienceContainer">
                <div className="toGreen">
                    <h2> 2019 - 2022 </h2>
                    <h3>Qnomy. Callflow Software [System Administrator]</h3>
                    <br />
                    <h3>Products</h3>
                    <div> <b>QFlow Web Application</b> - Customer Experience Management and Optimization. </div>
                    <div> <b>MyVisit Application</b> - Plan and execute visits to any service provider on Callflow's partner's list. </div>
                    <br />
                    <h3>Experience</h3>
                    <div> <b>Microsoft SQL</b> - Create and modify procedures, Agent jobs, Service Broker and queues, Advanced SQL Commands, SQL Profiler. </div>
                    <div> <b>Development</b> - React TS, Angular JS, .Net C#, Python, Powershell, vbScript, Batch. </div>
                    <div> <b>QA Automation</b> - Postman, JMeter. </div>
                    <div> <b>IIS Web Application</b> -  Practical understanding in web.config files, IIS settings. </div>
                </div>

                <div>
                    <h2> 2019 </h2>
                    <h3>Malam Team [CA Systems Integrator]</h3>
                    <br />
                    <h3>Role Description</h3>
                    <div> <b>Specialization in CA control systems</b> </div>
                    <div>Nimsoft | Spectrum | Client Automation</div>
                    <br />
                    <br />
                    <br />
                    <h3>Experience</h3>
                    <div>Characterization of processes in large organizations for the purpose of implementing CA systems to perform load sampling, generate reports, establish a dashboard for the organization's employees, create communication topologies (based on the SNMP protocol)</div>
                </div>

                <div>
                    <h2> 2018 - 2019 </h2>
                    <h3>Barlev Investigative Auditing [IT Manager]</h3>
                    <br />
                    <h3>Role Description</h3>
                    <div>Fascinating work in an investigation office, which pushed me to study and develop in order to promote the company's professionalism in investigating technological cases.</div>
                    <br />
                    <br />
                    <h3>Experience</h3>
                    <div> Management and Maintenance of local servers, machines, and users. </div>
                    <div> Developing scripts which reads and learns complicated excel files.</div>
                </div>
            </div>
        </div>
    );
}

export default Experience;

import Time from "./Time"
import studentlogo from "../images/Student.png"
import stafflogo from "../images/Absence.png"
import companylogo from "../images/Office building.png"
import collabaratorlogo from "../images/Handshake.png"
import otherslogo from "../images/User.png"

const Loginas = () => {

    let Loginas =
        [{ image: studentlogo, name: "College Student" },
        { image: stafflogo, name: "College Staff" },
        { image: companylogo, name: "Company" },
        { image: collabaratorlogo, name: "Collabarator" },
        { image: otherslogo, name: "Others" }]


    return (
        <div className="container card mt-5 phoneSize">
            <Time />
            <div className="mt-5">
                <div className="row">
                    <div className="col-1">
                        <p className="cursorPointer"><i className="fa-solid fa-arrow-left" style={{ color: "#000000" }}></i></p>
                    </div>
                    <div className="col-11 text-center">
                        <b style={{ color: "#4d4d4d" }}>Login as</b>
                        <p className="mt-3" style={{ color: "#636363" }}>You can update it later anytime.</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="container">
                    {Loginas.map((ele, index) => (
                        <div className="card mb-3 loginasCard cursorPointer" key={index}>
                            <span className="mt-4"><img src={ele.image} className="loginasImage" alt={ele.name} /><b className="loginasName">{ele.name}</b></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Loginas
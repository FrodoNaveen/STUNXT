import Time from "./Time"
import refreshlogo from "../images/Home/refreshlogo.svg";
import { useNavigate } from "react-router-dom";

const ChatBox = () => {

    let navigate = useNavigate()

    function goBack() {
        navigate("/home")
    }

    return (
        <div className="mainContainer bg-body-secondary card mt-5 phoneSize">
            < Time />

            {/* chatBox Header */}
            <div className="container-fluid bg-white" style={{ boxShadow: "0px 15px 10px -15px #111" }}>
                <div className="row mb-3">
                    <div className="col-12 mt-3">
                        <div className="float-start">
                            <i className="fa-solid fa-arrow-left cursorPointer" style={{ color: "#000000" }} onClick={goBack}></i>
                            <b className="ms-3">Chat</b>
                        </div>
                        <div className="float-end me-2">
                            <b>...</b>
                        </div>
                    </div>

                </div>
            </div>

            {/* searchinput */}
            <div className="container mt-4">
                <div className="row ps-1">
                    <div className="col-9">
                        <input
                            className="form-control rounded-4 borderWhite text-start"
                            placeholder="Search by name..."
                            style={{ height: "60px", paddingRight: "20px" }}
                        />
                    </div>
                    <div className="col-3">
                        <div
                            className="card rounded-4 borderWhite ms-3"
                            style={{ height: "60px", width: "60px" }}
                        >
                            <img
                                className="m-auto cursorPointer"
                                src={refreshlogo}
                                alt="filter logo"
                                style={{ height: "24px", width: "24px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ChatBox
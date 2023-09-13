import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Personaldetailspage2 from "./Personaldetailspage2"
import Time from "./Time"


const Personaldetailspage1 = () => {

    const navigate = useNavigate()

    const [goToSecondDetailsPage, setGoToSecondDetailsPage] = useState(false)
    const bday = useRef()


    function goToNextFormPage() {
        setGoToSecondDetailsPage(true)
    }

    function goToOtpPage() {
        navigate("/otp")
    }

    function goToPreviousFormPage() {
        setGoToSecondDetailsPage(false)
    }

    function typeDateChange() {
        bday.current.type = "date"
    }

    function typeTextChange() {
        bday.current.type = "text"
    }

    return (
        <div className="mainContainer card mt-5 phoneSize">
            <Time />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-1">
                        <p className="cursorPointer" onClick={goToSecondDetailsPage ? goToPreviousFormPage : goToOtpPage}><i className="fa-solid fa-arrow-left" style={{ color: "#000000" }}></i></p>
                    </div>
                    <div className="col-11 text-center">
                        <b style={{ color: "#4d4d4d" }}>Personal details</b>
                        <p className="mt-3" style={{ color: "#636363" }}>Please fill your personal details</p>
                        <div className="mt-4">
                            <p className={goToSecondDetailsPage ? "card mx-auto detailsPage2Filling " : "card mx-auto detailsPage1Filling"}></p>
                        </div>
                    </div>
                </div>
            </div>
            {goToSecondDetailsPage ? <Personaldetailspage2 /> :
                <div>
                    <div className="container formDetails">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <input className="form-control formInputHeight" placeholder="First name" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <input className="form-control formInputHeight" placeholder="Middle name (Optional)" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <input className="form-control formInputHeight" placeholder="Last name" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <input className="form-control formInputHeight" placeholder="Email ID" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <div className="card formInputHeight">
                                        <span style={{ color: "#636363" }}><input type="radio" name="gender" className="formInputRadio" /> Male</span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card formInputHeight">
                                        <span style={{ color: "#636363" }}><input type="radio" name="gender" className="formInputRadio" /> Female</span>
                                    </div>

                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <input ref={bday} className="form-control formInputHeight" placeholder="Date of Birth" onFocus={typeDateChange} onBlur={typeTextChange} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="container mt-5">
                        <span className="cursorPointer text-secondary float-end mt-5" onClick={goToNextFormPage}><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></span>
                    </div>
                </div>}

        </div>
    )
}
export default Personaldetailspage1


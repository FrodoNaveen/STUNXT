import { useNavigate } from "react-router-dom"


const Personaldetailspage2 = () => {

    const navigate = useNavigate()

    function goToLoginAsPage() {
        navigate("/loginaspage")
    }

    return (
        <div>
            <div className="container formDetails">
                <form>
                    <div className="row">
                        <div className="col-12">
                            <input className="form-control formInputHeight" placeholder="Door no & Building name" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <input className="form-control formInputHeight" placeholder="Street and Town" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <input className="form-control formInputHeight" placeholder="District" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <input className="form-control formInputHeight" placeholder="State" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <input className="form-control formInputHeight" placeholder="Pincode" />
                        </div>
                    </div>
                </form>
            </div>

            <div className="container formPageFooter">
                <div className="float-start mt-5">
                    <b className="cursorPointer mt-5" style={{ color: "#00d970" }}>Skip</b>
                </div>
                <div className="float-end mt-5">
                    <span className="cursorPointer text-secondary mt-5" onClick={goToLoginAsPage}><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></span>
                </div>
            </div>
        </div>
    )
}
export default Personaldetailspage2
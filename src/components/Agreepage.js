import { useNavigate } from "react-router-dom"
import Time from "./Time"

const Agreepage = () => {

    const navigate = useNavigate()

    function goToVerificationPage() {
        navigate("/verification")
    }

    return (
        <div className="container card mt-5 phoneSize">
            <Time />
            <div className="container bg-body-tertiary">
                <img className="img-fluid mx-auto d-block rounded agreeWelcomeImage" alt="logo" src="https://neilpatel.com/wp-content/uploads/fly-images/117917/shutterstock_414630034-1200x675-c.png" />
                <div className="text-center mt-5">
                    <h5 className="welcomeImage text-secondary"><b>Welcome to STUNXT</b></h5>
                    <p className="mt-3">Read Our Privacy Policy. Tap "Agree & Continue" to accept the Terms of Service. </p>
                </div>

                <div className="mt-5">
                    <button className="btn w-100 mb-5 agreeContinueBtn rounded-5 p-3" onClick={goToVerificationPage}><b>Agree & Continue</b></button>
                </div>
            </div>
        </div>
    )
}
export default Agreepage
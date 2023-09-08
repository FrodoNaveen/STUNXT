import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom"
import Time from "./Time";


const Otppage = () => {

    const navigate = useNavigate()

    const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, <i className="fa-solid fa-delete-left" style={{ color: "#000000;" }}></i>, 0, <i className="fa-solid fa-check" style={{ color: "#010204" }}></i>]


    const [resendOtp, setResendOtp] = useState(15)
    const [otp, setOtp] = useState('');

    useEffect(() => {
        if (resendOtp === 0) {
            clearTimeout()
        } else {
            setTimeout(() => {
                setResendOtp(resendOtp - 1)
            }, 1000)
        }

    }, [resendOtp])


    function goToPersonalDetailsPage1() {
        navigate("/personaldetailspage")
    }


    function dialPadToInput(num) {
        if (typeof (num) === "number") {
            let data = otp
            let newData = data.concat(num)
            setOtp(newData)
        } else if (num.props.className === "fa-solid fa-delete-left") {

            let splitNumber = otp.split("")
            splitNumber.pop()
            let joinNumber = splitNumber.join("")
            setOtp(joinNumber)
        } else if (num.props.className === "fa-solid fa-check") {
            goToPersonalDetailsPage1()
        }


    }



    return (
        <div className="container card mt-5 phoneSize">
            <Time />
            <div className="mt-5 text-center">
                <b style={{ color: "#4d4d4d" }}>Enter Code</b>
                <p className="mt-2" style={{ color: "#636363" }}>Enter the 4 digit code sent to your phone number <b> +91 1234567890</b></p>
                <div className="row">
                    <div className="col-12">
                        <OtpInput
                            inputStyle={{ width: "66px", height: "62px", marginLeft: "20px", borderRadius: "10px", border: "1px solid #636363", borderColor: otp && otp.length === 4 ? "#00d970" : "#636363" }}
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span> </span>}
                            renderInput={(props) => <input {...props} />}
                        />
                    </div>
                </div>
            </div>
            <div className="container otpVerificationFooter">
                <div className="float-start">
                    <span style={{ color: "#636363" }}>Not received OTP?</span>
                    {resendOtp === 0 ? <p className="cursorPointer" style={{ color: "#00d970" }}>Resend</p> :
                        <p style={{ color: "#00d970" }}>Resend ({resendOtp} Sec)</p>}
                </div>
                {otp && otp.length >= 4 ?
                    <div className="float-end">
                        <span className="cursorPointer" style={{ color: "#00d970" }} onClick={goToPersonalDetailsPage1}><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></span>
                    </div> :
                    <div className="float-end">
                        <span className="text-secondary"><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></span>
                    </div>}

            </div>
            <div className="container dialpad mt-2 mb-3">
                {dialPad.map((ele, index) => (
                    <button key={index} className="btn border-0 rounded-5 mt-3" style={{ backgroundColor: "#F9F9F9", color: "black", width: "106px", height: "50px" }} onClick={() => dialPadToInput(ele)}>{ele}</button>
                ))}
            </div>

        </div>
    )
}
export default Otppage
import Time from "../Time"
import { useNavigate } from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";
import completedTick from "../../images/Goals/success.svg"

const Level1 = () => {

    let navigate = useNavigate()

    const [goal1Percentage, setGoal1Percentage] = useState(65)
    const [goal2Percentage, setGoal2Percentage] = useState(50)
    const [goal3Percentage, setGoal3Percentage] = useState(10)


    function goBack() {
        navigate("/goalspage")
    }
    return (
        <div className="mainContainer bg-body-tertiary card phoneSize">
            <Time />

            {/* chatBox Header */}
            <div className="container-fluid bg-white" style={{ boxShadow: "0px 15px 10px -15px #111" }}>
                <div className="row mb-3">
                    <div className="col-12 mt-3">
                        <div className="float-start">
                            <i className="fa-solid fa-arrow-left cursorPointer" style={{ color: "#000000" }} onClick={goBack}></i>
                            <b className="ms-3">Goals - Level 1</b>
                        </div>
                        <div className="float-end me-2">
                            <b>...</b>
                        </div>
                    </div>

                </div>
            </div>

            {/* goals to be completed */}

            <div className="container mt-3">

                {/* goal1 */}
                <div className="card borderWhite rounded-4">
                    <div className="row p-3">
                        <div className="col-3">
                            {goal1Percentage === 100 ? <img src={completedTick} alt="successImage" /> : <CircularProgressbar value={goal1Percentage} text={`${goal1Percentage}%`} styles={buildStyles({
                                pathColor: `#00d970`,
                                textColor: '#00d970'
                            })} />}
                        </div>
                        <div className="col-9">
                            <b>Complete Profile</b>
                            <br />
                            <small className="text-muted">Please complete all the necessary details in your profile</small>
                        </div>
                    </div>
                </div>

                {/* goal2 */}
                <div className="card borderWhite mt-3 rounded-4">
                    <div className="row p-3">
                        <div className="col-3">
                            {goal2Percentage === 100 ? <img src={completedTick} alt="successImage" /> : <CircularProgressbar value={goal2Percentage} text={`${goal2Percentage}%`} styles={buildStyles({
                                pathColor: `#00d970`,
                                textColor: '#00d970'
                            })} />}
                        </div>
                        <div className="col-9">
                            <b>Follow Members</b>
                            <br />
                            <small className="text-muted">Follow atleast 20 friends or
                                <br /> members</small>
                        </div>
                    </div>
                </div>

                {/* goal3 */}
                <div className="card borderWhite mt-3 rounded-4">
                    <div className="row p-3">
                        <div className="col-3">
                            {goal3Percentage === 100 ? <img src={completedTick} alt="successImage" /> : <CircularProgressbar value={goal3Percentage} text={`${goal3Percentage}%`} styles={buildStyles({
                                pathColor: `#00d970`,
                                textColor: '#00d970'
                            })} />}
                        </div>
                        <div className="col-9">
                            <b>Post Feeds</b>
                            <br />
                            <small className="text-muted">Post atleast 5 feeds</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Level1
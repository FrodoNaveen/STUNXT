import Time from "./Time"
import { useNavigate, useLocation } from "react-router-dom"


const EventDetailsPage = ({ event }) => {

    // const navigate = useNavigate()
    const location = useLocation()

    const { ele } = location.state || {}

    console.log(ele)




    return (
        <div className="mainContainer card mt-5 phoneSize">
            <Time />
            {/* <div className="container mt-3">
                <div className="row">
                    <div className="col-1">
                        <p className="cursorPointer" onClick={goToEventPage}>
                            <i
                                className="fa-solid fa-arrow-left"
                                style={{ color: "#000000" }}
                            ></i>
                        </p>
                    </div>
                    <div className="col-11 text-start">
                        <b style={{ color: "#4d4d4d" }}>Event Title</b>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default EventDetailsPage
import Time from "./Time"
import { useNavigate, useLocation } from "react-router-dom"
import shareicon from "../images/Home/shareicon.svg"


const EventDetailsPage = ({ event }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const { ele } = location.state || {}


    function goToMainEventPage() {
        navigate("/events")
    }




    return (
        <div className="mainContainer card mt-5 phoneSize">
            <Time />

            {/* Header */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-1">
                        <p className="cursorPointer" onClick={goToMainEventPage}>
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
            </div>

            {/* Images */}
            <div className="mt-2">
                <img className="img-fluid" src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="eventImage" />
            </div>

            {/* card inside image */}
            <div className="card bg-white ms-4 borderWhite " style={{ height: "120px", width: "350px", marginTop: "-65px", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.15)" }}>
                <div className="container mt-2">
                    <b>Event Title</b>
                    <br />
                    <small><i className="fa-regular fa-calendar"></i> {ele.eventDate}</small>
                    <br />
                    <small><i className="fa-solid fa-location-dot"></i> {ele.eventLocation}</small>
                </div>
            </div>

            {/* Event description */}
            <div className="container">
                <div className="container mt-4">
                    <b>Description</b>
                    <br />
                    <div className="card borderWhite" style={{ width: "370px", height: "90px", color: "#706D6D", fontSize: "12px", lineHeight: "18px" }}>
                        <small>Inaculis orci ut, blandit quam. Donec in elit auctor, finibus quam in, phar. Proin id ligula dictum, covalis enim ut, facilisis massa. Mauris a nisi ut sapien blandit imperdi. Interdum et malesuada fames ac ante ipsum primis in faucibs. Sed posuere egestas nunc ut tempus. Fu ipsum dolor sit amet. Read More..</small>
                    </div>
                    <div className="mt-2">
                        <b>Venue & Location</b>
                        <br></br>
                        <div className="mt-3">
                            <div class="mapouter">
                                <div class="gmap_canvas">
                                    <iframe class="gmap_iframe rounded-2 "

                                        frameborder="0"
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=coimbatore
                                        &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    </iframe>
                                    <a href="https://connectionsgame.org/">Connections Puzzle</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-1">
                    <div className="row">
                        <div className="col-10">
                            <span
                                className="btn w-100 mt-5 rounded-5 p-3 text-white" style={{ backgroundColor: "#00d970" }}>
                                <b>Register</b>
                            </span>
                        </div>
                        <div className="col-2 mt-5">
                            <img className="cursorPointer" src={shareicon} alt="shareicon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventDetailsPage
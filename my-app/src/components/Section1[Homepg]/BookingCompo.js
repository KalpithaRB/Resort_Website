import Button from "./Button.js";
import "./Booking.css";

function Booking_Component() {
  return (
    <div className="Booking_section">
      <div className="Check-in-out">
        <div className="Check-in">
          check-in
          <div className="calender">
            <div className="calender-preview">April 12, 2023</div>
            <div className="arrow">??</div>
          </div>
        </div>
        <div className="Check-out">
          check-out
          <div className="options">April 14, 2023</div>
          <div className="arrow">??</div>
        </div>
      </div>
      <div className="Guests">Guests</div>
      <div className="Check-Availability">
        <Button color="Black" name="Check Availability" />
      </div>
    </div>
  );
}

export default Booking_Component;

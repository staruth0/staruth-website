import successIcon from "../../assets/icons/successIcon.png"; 
import "./SuccessCard.css"; 

function SuccessCard({setIsSuccessFalse}) {
  return (
    <div className="success-card" onClick={()=>{setIsSuccessFalse()}}>
      <h1>Congratulations! Your request has been received by us.</h1>
      <h1>You will receive a response in no time</h1>
      <img src={successIcon} alt="Success Icon" className="success-icon" />
      <p className="status-text">successful!</p>
    </div>
  );
}

export default SuccessCard;

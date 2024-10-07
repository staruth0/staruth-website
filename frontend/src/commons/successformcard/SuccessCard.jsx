import successIcon from '../../assets/icons/successIcon.png';
import './SuccessCard.css';
import closeIcon from '../../assets/icons/close_menu_icon.png';

function SuccessCard({ setIsSuccessFalse }) {
  return (
    <div className="success-card">
      <button
        className="close-button"
        onClick={() => {
          setIsSuccessFalse();
        }}
      >
        <img src={closeIcon} width={40} alt="" />
      </button>
      <h3>Congratulations! Your request has been received by us.</h3>
      <p>You will receive a response in no time</p>
      <img src={successIcon} alt="Success Icon" className="success-icon" />
      <p className="status-text">successful!</p>
    </div>
  );
}

export default SuccessCard;

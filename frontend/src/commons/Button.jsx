import './button.css';

const ButtonPrimary = ({ title, disabled }) => {
  return <button className="btn-primary">{title}</button>;
};

const ButtonOutlinedBlack = ({ title }) => {
  return (
    <button className="underline-link body-lg-heavy">
      <span>{title}</span>
      <span className="material-symbols-outlined">arrow_right_alt</span>
    </button>
  );
};

const ButtonOutlinedWhite = ({ title }) => {
  return (
    <button className="underline-link body-lg-heavy">
      <span>{title}</span>
      <span className="material-symbols-outlined">arrow_right</span>
    </button>
  );
};

export { ButtonPrimary, ButtonOutlinedWhite, ButtonOutlinedBlack };

import './button.css';

const Button = ({ className, buttonText, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;

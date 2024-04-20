const Button = ({ type, label, onClick, width = '', inverted = false, ico , id }) => {
    return (
        <button id={id} className={`
      ${width}
      ${inverted ? 'btn-inverted' : 'btn-login'}
      `} onClick={onClick} type={type} >
            {label} {ico}
        </button>
    );
};

export default Button;
const HeaderMessage = () => {
  return(
    <div className='h-message'>
      <div className="h-message-text">
        <p>
          Learn Boxing <br />
          Fight like <br />
          <span>Champions</span>
        </p>
      </div>
      <div className="h-message-cta">
        <button className="h-message-button">Free Trial</button>
        <span>Starting at $ 19.99</span>
      </div>
    </div>
  )
};

export default HeaderMessage;
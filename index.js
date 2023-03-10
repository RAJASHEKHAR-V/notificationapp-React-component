const Notification = (props) => {
  const { url, className, alt, para, message, card } = props;

  return (
    <div class={card}>
      <img src={url} className={className} alt={alt} />
      <p className={para}>{message}</p>
    </div>
  );
};

const element = (
  <div className="bg-Container">
    <h1 className="heading">Notifications</h1>
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      className="image"
      alt="Information"
      para="paraStyle"
      message="Information Message"
      card="card1 card"
    />
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      className="image"
      alt="Success"
      para="paraStyle"
      message="Success Message"
      card="card2 card"
    />
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      className="image"
      alt="Warning"
      para="paraStyle"
      message="Warning Message"
      card="card3 card"
    />
    <Notification
      url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      className="image"
      alt="Danger"
      para="paraStyle"
      message="Error Message"
      card="card4 card"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

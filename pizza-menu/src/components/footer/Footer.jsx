const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const message = `We're open from ${openHour}:00 to ${closeHour}:00. Come visit us or order online.`;
  const message1 = `We're happy to welcome you between ${openHour}:00. and ${closeHour}:00.`;

  // return createElement("footer", null, "We're currently open!");
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>{message}</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>{message1}</p>
      )}

      {/* {new Date().toLocaleTimeString()}. {message} */}
    </footer>
  );
};

export default Footer;

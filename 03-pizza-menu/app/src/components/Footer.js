export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're currently open!</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p>Sorry we're closed</p>
        </div>
      )}
    </footer>
  );
}

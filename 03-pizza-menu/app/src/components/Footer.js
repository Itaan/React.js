export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (isOpen) alert("We're currently open!");
  else alert("Sorry we're closed");

  return <footer>{new Date().toLocaleTimeString} We're currently open</footer>;
}

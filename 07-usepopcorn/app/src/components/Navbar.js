import Search from "./Search";
import Logo from "./Logo";
import NumResult from "./NumResult";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResult />
    </nav>
  );
}

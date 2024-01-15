import logo from "../assets/images/logo-teal.svg";

const Header = () => {
  return (
    <header>
      <div className="top-bar crawler">
        <img src={logo} alt="logo" />;
      </div>
    </header>
  );
};

export default Header;

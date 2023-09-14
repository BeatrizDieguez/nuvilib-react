import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <div class="logo">
        <div>
          <img src={logo} alt="logo nuvilib" />
        </div>
        <div>
          <h1>Nuvilib</h1>
          <h2>Nutrition, Vitalité, Liberté</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;

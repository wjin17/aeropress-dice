import aeropress from "../../static/images/aeropress.svg";

const Header = () => {
  return (
    <header className="App-header">
      <img src={aeropress} className="App-logo" alt="aeropress-logo" />
      <h1 className="App-title">Random Aeropress Recipe</h1>
    </header>
  );
};

export default Header;

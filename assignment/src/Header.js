import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1 style={{ color: "red" }}>Smartphone</h1>
      <br />
      <Link to="./">
        <button style={{ color: "red" }}>Home</button>
      </Link>
      &nbsp;&nbsp;
      <Link to="./SmartPhones">
        <button style={{ color: "red" }}>All SmartPhones</button>
      </Link>
      &nbsp;&nbsp;
      <Link to="./SmartPhones/add">
        <button style={{ color: "red" }}>SmartphonesAdd</button>
      </Link>
      <br />
    </>
  );
}
export default Header;

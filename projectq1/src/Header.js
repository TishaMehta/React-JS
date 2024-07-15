import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="./">Home</Link>&nbsp;
      <Link to="./Student">Student</Link>&nbsp;
      <Link to="./Product">Product</Link>
    </>
  );
}

export default Header;

import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logoShape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="#63A1FF" />
          </svg>
        </div>
        <div className="logoTxt">Cyber Blogs</div>
      </div>
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-list-item active">Blog</li>
          <li className="menu-list-item">About Us</li>
        </ul>
      </div>
      <div className="rightSec">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

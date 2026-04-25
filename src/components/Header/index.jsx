export default function Header() {
  return (
    <header id="header">
          <h2 id="logo"><a href="/">REACT LUTHIERS</a></h2>
        <nav className="navbar">
          <ul className="navbar_list">
            <li className="navbar__item"><a href="#">ABOUT</a></li>
            <li className="navbar__item"><a href="#">GUITARS</a></li>
            <li className="navbar__item"><a href="#">CONTACT</a></li>
          </ul>
        </nav>
    </header>
  )
}
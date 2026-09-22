function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-box">D</span>
        <span>Jahnavi mailInfo</span>
      </div>

      <nav>
        <a href="#">World</a>
        <a href="#">Politics</a>
        <a href="#">Business</a>
        <a href="#">Technology</a>
        <a href="#">Culture</a>
      </nav>

      <div className="header-right">
        <span className="search">⌕</span>
        <button>Subscribe</button>
      </div>
    </header>
  )
}

export default Header
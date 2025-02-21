export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <div className="darkModeContainer">
          <i className="ri-moon-line" id="darkModeIcon"></i>
          <h4>Dark Mode</h4>
        </div>
      </div>
    </header>
  );
}

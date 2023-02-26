import logo from '../images/Vector.svg';

export default function Header() {
    return (
          <header className="header">
            <img
              className="header__logo"
              src={logo}
              alt="Россия"
            />
          </header>
    );
  }
import LogoSVG from '../assets/logo.svg';
import SearchSVG from '../assets/search.svg'
import CartSVG from '../assets/cart.svg';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={LogoSVG} alt='Apple Logo' />

        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.label}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className='flex-center gap-3'>
          <button>
            <img src={SearchSVG} alt="search" />
          </button>
          <button>
            <img src={CartSVG} alt="search" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

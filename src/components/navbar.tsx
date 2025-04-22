import logo from '@/assets/images/logo.png';
import { navlinks } from '@/constants';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md">
      <div className="flex cursor-pointer items-center space-x-2">
        <a href="/">
          <img src={logo} alt="ChaiCode logo" className="h-auto w-38" />
        </a>
      </div>

      <ul className="flex items-center space-x-8 text-lg font-medium text-[#1B1D22]">
        {navlinks.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              className="flex items-center gap-2 transition"
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="h-4 w-4"
              />
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <a
          href="https://courses.chaicode.com/learn/account/signin"
          target="_blank"
        >
          <button className="cursor-pointer rounded-md bg-[#FE7743] px-6 py-1.5 font-medium transition hover:scale-102 hover:bg-[#ff5f1f]">
            Login
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

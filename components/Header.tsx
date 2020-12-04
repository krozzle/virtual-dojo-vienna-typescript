const Header = () => (
  // todo window.scrollTo(x-coord, y-coord) || window.scrollTo(options)
  // todo make whole section shrink when scrolled down after certain threshold (ie 2/3)
  // todo shrink logo by 50% after scrolling?

  <div className="flex justify-around w-full bg-black bg-opacity-50 items-center top-0 fixed">
    <a href="/">
      <img className="w-16 py-1" src="/vdvlogo-cropped.png" />
    </a>
    <div className="flex text-gray-100 justify-around align-middle text-lg ">
      <a className="px-4" href="/">
        Home
      </a>

      <a className="px-4" href="#about">
        About
      </a>

      <a className="px-4" href="#membership">
        Membership
      </a>

      <a className="px-4" href="#prices">
        Prices
      </a>

      <a className="px-4" href="#contact">
        Contact
      </a>

      {/* <a className="px-4" href="/login">
        Login
      </a>

      <a className="px-4" href="/hello">
        Hello
      </a>

      <a className="px-4" href="/logout">
        Logout
      </a> */}
    </div>
  </div>
);

export default Header;

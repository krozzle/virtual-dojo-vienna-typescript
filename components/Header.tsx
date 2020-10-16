const Header = () => (
  // todo window.scrollTo(x-coord, y-coord) || window.scrollTo(options)
  <div className="flex justify-around w-full bg-black bg-opacity-75 items-center top-0 fixed">
    <a href="/">
      <img className="w-16 py-1" src="/vdvlogo-cropped.png" />
    </a>
    <div className="flex text-white justify-around align-middle text-lg ">
      <a className="px-4" href="/">
        Home
      </a>

      <a className="px-4" href="/">
        About Us
      </a>

      <a className="px-4" href="/">
        Memberships
      </a>

      <a className="px-4" href="/">
        Prices
      </a>

      <a className="px-4" href="/">
        Contact Us
      </a>
    </div>
  </div>
);

export default Header;

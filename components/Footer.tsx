const Footer = () => (
  <div className="flex justify-between min-h-full bg-black text-white py-2 px-32">
    <div className="flex align-middle py-1">
      {/* <p className="text-lg pr-4 py-1">Follow us</p> */}
      <a href="https://www.twitch.tv/virtualdojovienna">
        <img
          className="px-2 hover:bg-black hover:bg-opacity-75"
          src="/twitch.svg"
        />
      </a>
      <a href="https://youtube.com/virtualdojovienna">
        <img
          className="px-2 hover:bg-black hover:bg-opacity-75"
          src="/youtube.svg"
        />
      </a>
      <a href="https://twitter.com/virtualdojo">
        <img
          className="px-2 hover:bg-black hover:bg-opacity-75"
          src="/twitter.svg"
        />
      </a>
      <a href="https://www.instagram.com/virtualdojovienna">
        <img
          className="px-2 hover:bg-black hover:bg-opacity-75"
          src="/instagram.svg"
        />
      </a>
      <a href="https://www.facebook.com/VirtualDojoVienna/">
        <img
          className="px-2 hover:bg-black hover:bg-opacity-75"
          src="/facebook.svg"
        />
      </a>
    </div>
    <div className="flex justify-center align-middle text-lg py-1">
      Copyright {new Date().getFullYear()}
    </div>
    <div className="flex justify-center align-middle">
      <a href="/statuten_2016.pdf" download>
        <p className="text-lg py-1 px-1 hover:bg-gray-300 hover:bg-opacity-25">
          Club Statutes
        </p>
      </a>
    </div>
  </div>
);

export default Footer;

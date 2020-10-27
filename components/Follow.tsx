const Follow = () => (
  <div className="md:flex align-middle py-1 hidden">
    {/* <p className="text-lg pr-4 py-1">Follow us</p> */}
    <a href="https://www.twitch.tv/virtualdojovienna">
      <img className="pr-2" src="/twitch.svg" />
    </a>
    <a href="https://youtube.com/virtualdojovienna">
      <img className="px-2" src="/youtube.svg" />
    </a>
    <a href="https://twitter.com/virtualdojo">
      <img className="px-2" src="/twitter.svg" />
    </a>
    <a href="https://www.instagram.com/virtualdojovienna">
      <img className="px-2" src="/instagram.svg" />
    </a>
    <a href="https://www.facebook.com/VirtualDojoVienna/">
      <img className="pl-2" src="/facebook.svg" />
    </a>
  </div>
);

export default Follow;

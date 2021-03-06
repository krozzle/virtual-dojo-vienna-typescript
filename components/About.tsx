const About = () => (
  <div
    id="about"
    className="flex flex-col w-full bg-primary min-h-full justify-around px-32 py-32"
  >
    <div className="text-gray-100 text-left text-2xl">about us</div>
    <div className="text-gray-900 text-left text-6xl font-bold py-1 uppercase ">
      who we be
      <div className="border-t w-32" />
    </div>
    <div className="text-gray-100 w-2/3 text-xl pt-4 pb-32 text-left">
      As the home of Austria's Fighting Game community, we provide a place to
      meet and get together with Fighting Game enthusiasts. Engage with people
      who share the same passion casually or participate in our local ranking
      tournaments.
    </div>
  </div>
);

export default About;

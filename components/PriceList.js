const PriceList = () => {
  const membershipTypes = [
    {
      title: 'try out',
      description:
        'Not sure if this is the place for you? Try out the Virtual Dojo Vienna on your first visit at no extra costs.',
      price: 'free',
    },
    {
      title: 'day',
      description:
        'Are you visiting rarely or taking part in tournaments? Become a member for a day and come back soon!',
      price: '7€',
    },
    {
      title: 'full',
      description:
        'There is no place like the Dojo? Become a full member and enjoy everything the Virtual Dojo has to offer.',
      price: '25€/month',
    },
  ];
  return (
    <div
      id="prices"
      className="flex flex-col w-full h-full bg-white min-h-full justify-around p-32"
    >
      <div className="flex rounded-lg px-16 gap-16 justify-around">
        {membershipTypes.map((membership, i) => (
          <div
            className="flex-1 flex-col justify-around align-middle border-2 border-gray-700 border-opacity-50 bg-gray-100 bg-opacity-50 py-12 px-4 rounded-lg overflow-hidden shadow-lg"
            key={i}
          >
            {/* <img
          className="w-full min-h-0"
          src="/danSFIV.jpg"
          alt="dan from street fighter 4"
        /> */}
            <div className="px-12 font-bold text-center text-4xl uppercase">
              {membership.title}
            </div>
            <div className="flex justify-center align-middle">
              <div className="border-t-2 border-primary w-16" />
            </div>
            <div className="py-12 text-lg text-center text-gray-800">
              {membership.description}
            </div>
            <div className="text-lg text-center">{membership.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;

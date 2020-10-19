const Membership = () => (
  <div className="flex flex-col bg-gray-200 h-96 py-32 px-20">
    <div className="text-primary text-2xl text-center px-2">membership</div>

    <div className="flex flex-row justify-center align-center">
      <div className="font-bold text-6xl">
        Become A Member
        <div className="border-primary border-t-2 w-32" />
      </div>
    </div>
    <div className="flex flex-row justify-around pt-4 pb-32 align-center">
      <div className="max-w-2xl text-center text-xl">
        Becoming a member is simple. Contact our staff by e-mail and phone. They
        will guide you through the process and answer any questions you might
        have. We offer different types of memberships, so you can pick the one
        that suits your needs the best. Find out more in the section below.
      </div>
    </div>
  </div>
);

export default Membership;

const ContactForm = () => (
  <div id="contact" className="flex justify-center w-1/3 py-8 align-middle ">
    <form className="w-full">
      <div className="flex">
        <div className="pb-4 w-full">
          <label className="block uppercase pb-1 tracking-wide text-white text-xs font-bold">
            Name
          </label>
          {/* <p className="text-gray-600 text-xs">Name</p> */}
          <input
            className="h-6 p-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="name"
            id="nick"
            type="text"
          />
        </div>
      </div>
      <div className="flex">
        <div className="pb-4 w-full">
          <label className="block uppercase pb-1 tracking-wide text-white text-xs font-bold">
            E-mail
          </label>
          {/* <p className="text-gray-600 text-xs">E-mail</p> */}
          <input
            className="h-6 p-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="e-mail"
            id="email"
            type="email"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <label className="block uppercase pb-1 tracking-wide text-white text-xs font-bold">
            Message
          </label>
          <textarea
            className="w-full p-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            placeholder="we all ears xd"
            id="message"
          ></textarea>
        </div>
      </div>
      <div className="flex w-full justify-center md:flex md:items-center pt-4">
        <div className="px-8 py-1 shadow-lg bg-primary hover:bg-red-700 hover:text-gray-100 hover:border hover:border-8 focus:outline-none focus:shadow-outline text-white text-center text-xl tracking-normal font-bold rounded">
          Send
        </div>
      </div>
    </form>
  </div>
);

export default ContactForm;

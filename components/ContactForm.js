const ContactForm = () => (
  <div className="justify-center w-1/3 align-middle flex">
    <form className="w-full">
      <div className="flex">
        <div className="pb-4 w-full">
          <label
            className="block uppercase pb-1 tracking-wide text-gray-700 text-xs font-bold"
            for="grid-password"
          >
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
          <label
            className="block uppercase pb-1 tracking-wide text-gray-700 text-xs font-bold"
            for="grid-password"
          >
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
          <label
            className="block uppercase pb-1 tracking-wide text-gray-700 text-xs font-bold"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            className="w-full p-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            placeholder="we all ears xd"
            id="message"
          ></textarea>
        </div>
      </div>
      <div className="flex w-full md:flex md:items-center py-4">
        <div className="flex flex-col w-full">
          <button
            className="shadow bg-red-700 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold rounded"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default ContactForm;

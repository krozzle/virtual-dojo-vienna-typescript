const ContactForm = () => (
  <div className="justify-center align-middle flex">
    <form className="w-full">
      <div className="flex">
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
            for="grid-password"
          >
            Name
          </label>
          {/* <p className="text-gray-600 text-xs">Name</p> */}
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="name"
            id="nick"
            type="text"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
            for="grid-password"
          >
            E-mail
          </label>
          {/* <p className="text-gray-600 text-xs">E-mail</p> */}
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
          ></textarea>
          <p className="text-gray-600 text-xs">
            Re-size can be disabled by set by resize-none / resize-y / resize-x
            / resize
          </p>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold rounded"
            type="button"
          >
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  </div>
);

export default ContactForm;

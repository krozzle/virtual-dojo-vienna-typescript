const Contact = () => (
  <div className="w-full flex flex-col bg-black bg-opacity-50">
    <div className="flex justify-center align-middle text-5xl text-white pt-12">
      Contact Us
    </div>
    <div className="flex justify-center align-middle">
      <div className="border-red-700 border-t-2 w-48" />
    </div>
    <div className="flex justify-center align-middle pt-12 text-3xl text-white font-hairline">
      If you have questions and would like to know more, please contact us
      through the form below.
    </div>

    <div className="flex w-96 justify-around align-middle">
      <div className="flex flex-col justify-center align-middle">
        <div className="text-white">yo</div>
      </div>

      {/* Form begins here */}
      <div className="p-24 justify-center align-middle flex">
        <form className="w-full max-w-lg">
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
                Re-size can be disabled by set by resize-none / resize-y /
                resize-x / resize
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
    </div>
  </div>
);

export default Contact;

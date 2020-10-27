import LegalNotice from './LegalNotice';
import ContactForm from './ContactForm';
import Follow from './Follow';

const Contact = () => (
  <div className="w-full flex flex-col px-8 justify-center align-middle bg-opacity-100">
    <div className="flex justify-center align-middle text-5xl text-gray-100 pt-12">
      Contact Us
    </div>
    <div className="flex justify-center align-middle">
      <div className="border-primary border-t-2 w-48" />
    </div>
    <div className="flex justify-center align-middle pt-8 text-3xl text-gray-100 font-hairline">
      If you have questions and would like to know more, please contact us
      through the form below.
    </div>

    <div className="flex flex-col md:flex-row pt-12 pb-8 justify-center">
      <LegalNotice />
      <ContactForm />
    </div>
  </div>
);

export default Contact;

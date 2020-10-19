import LegalNotice from './LegalNotice';
import ContactForm from './ContactForm';

const Contact = () => (
  <div className="w-full flex flex-col bg-black">
    <div className="flex justify-center align-middle text-5xl text-white pt-12">
      Contact Us
    </div>
    <div className="flex justify-center align-middle">
      <div className="border-primary border-t-2 w-48" />
    </div>
    <div className="flex justify-center align-middle pt-8 text-3xl text-white font-hairline">
      If you have questions and would like to know more, please contact us
      through the form below.
    </div>

    <div className="flex p-20 justify-around align-middle">
      <LegalNotice />
      <ContactForm />
    </div>
  </div>
);

export default Contact;

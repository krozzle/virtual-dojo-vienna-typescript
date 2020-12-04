import Follow from './Follow';

const LegalNotice = () => (
  <div className="hidden md:flex flex-col justify-center align-middle px-8 md:w-1/3">
    <div className="text-3xl pb-1 text-gray-100 font-bold">Legal Notice</div>
    <div className="text-xl pt-1 text-gray-100">Address</div>
    <div className="text-gray-100 pb-1 font-hairline">Praterstraße 58/1/L1</div>
    <div className="text-gray-100 pb-1 font-hairline">1020 Vienna, Austria</div>
    <div className="text-xl pt-1 text-gray-100">Email</div>
    <a href="mailto: office@virtualdojovienna.com">
      <div className="text-gray-100 pb-1 font-hairline">
        office@virtualdojovienna.com
      </div>
    </a>
    <div className="text-xl pt-1 text-gray-100">Phone</div>
    <a href="tel: +4312767824">
      <div className="text-gray-100 pb-1 font-hairline">+43 1 27 67 824</div>
    </a>
    <div className="text-xl pt-1 text-gray-100">IBAN</div>
    <div className="text-gray-100 pb-1 font-hairline">
      AT94 2011 1842 6118 4800
    </div>
    <div className="text-xl pt-1 text-gray-100">BIC</div>
    <div className="text-gray-100 pb-1 font-hairline">GIBAATWWXXX</div>
    <br />
    <div className="text-2xl py-2 text-gray-100 mr-auto hover:text-primary hover:underline">
      <a href="http://virtualdojovienna.com/statuten_2016.pdf">Club Statutes</a>
    </div>
    <div>
      <Follow />
    </div>
  </div>
);

export default LegalNotice;

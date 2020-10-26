import Follow from './Follow';

const LegalNotice = () => (
  <div className="flex w-1/3 flex-col justify-around align-middle">
    <div className="text-3xl pb-1 text-white font-bold">Legal Notice</div>
    <div className="text-xl pt-1 text-white">Address</div>
    <div className="text-white pb-1 font-hairline">Praterstraße 58/1/L1</div>
    <div className="text-white pb-1 font-hairline">1020 Vienna, Austria</div>
    <div className="text-xl pt-1 text-white">Email</div>
    <a href="mailto: office@virtualdojovienna.com">
      <div className="text-white pb-1 font-hairline">
        office@virtualdojovienna.com
      </div>
    </a>
    <div className="text-xl pt-1 text-white">Phone</div>
    <a href="tel: +4312767824">
      <div className="text-white pb-1 font-hairline">+43 1 27 67 824</div>
    </a>
    <div className="text-xl pt-1 text-white">IBAN</div>
    <div className="text-white pb-1 font-hairline">
      AT94 2011 1842 6118 4800
    </div>
    <div className="text-xl pt-1 text-white">BIC</div>
    <div className="text-white pb-1 font-hairline">GIBAATWWXXX</div>
    <br />
    <div className="text-2xl px-2 py-2 text-white mr-auto hover:text-primary hover:underline">
      <a href="http://virtualdojovienna.com/statuten_2016.pdf">Club Statutes</a>
    </div>
    <Follow />
  </div>
);

export default LegalNotice;

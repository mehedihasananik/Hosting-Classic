import logo from "/hosting/S 1.png";

const Footer = () => {
  return (
    <div className="bg-[#F9FAFC] font-Dm">
      {/* container */}
      <div className="w-full container mx-auto px-10 2xl:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 py-4 ">
          {/* one */}
          <div className="pt-5 md:pt-10">
            <h3 className="text-lg font-bold">Company</h3>
            <div className="py-4 md:py-8">
              <ul className="text-base space-y-4">
                <li>About </li>
                <li>Affiliate Careers</li>
                <li>Careers & Culture</li>
                <li> Blog Press</li>
                <li>Press</li>
              </ul>
            </div>
          </div>

          <div className="pt-5 md:pt-10">
            <h3 className="text-lg font-bold">Company</h3>
            <div className="py-4 md:py-8">
              <ul className="text-base space-y-4">
                <li>About </li>
                <li>Affiliate Careers</li>
                <li>Careers & Culture</li>
                <li> Blog Press</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
          <div className="pt-5 md:pt-10">
            <h3 className="text-lg font-bold">Company</h3>
            <div className="py-4 md:py-8">
              <ul className="text-base space-y-4">
                <li>About </li>
                <li>Affiliate Careers</li>
                <li>Careers & Culture</li>
                <li> Blog Press</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
          <div className="pt-5 md:pt-10">
            <h3 className="text-lg font-bold">Company</h3>
            <div className="py-4 md:py-8">
              <ul className="text-base space-y-4">
                <li>About </li>
                <li>Affiliate Careers</li>
                <li>Careers & Culture</li>
                <li> Blog Press</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
          <div className="pt-5 md:pt-10">
            <h3 className="text-lg font-bold">Company</h3>
            <div className="py-4 md:py-8">
              <ul className="text-base space-y-4">
                <li>About </li>
                <li>Affiliate Careers</li>
                <li>Careers & Culture</li>
                <li> Blog Press</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className=" pb-10" />
        <div className="pb-10 flex  flex-col md:flex-row md:justify-between">
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:space-x-5">
            <img className="w-10" src={logo} alt="" />
            <p>StartupLanding</p>
            <p>Copyright by 2023 Redq, Inc</p>
          </div>
          <div className="flex items-center">
            <ul className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center text-base md:space-x-4">
              <li>Home </li>
              <li>Adversite</li>
              <li>Supports</li>
              <li>Marketing</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

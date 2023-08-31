import icon from "../../../public/hosting/icon.png";
import icon2 from "../../../public/hosting/icon2.png";
import icon3 from "../../../public/hosting/icon3.png";

const Solutions = () => {
  return (
    // main div
    <div className="main_div">
      {/* sub dive */}
      <div className="w-full container mx-auto pt-10 md:pt-16">
        {/* content */}
        <div className="text-center font-medium leading-10">
          <h3 className="text-base leading-10 text-[#00A99D]">
            Ideal solutions for you
          </h3>
          <p className="text-2xl">Go beyond ultimate features</p>
        </div>
        {/* features container */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-32 py-9 md:py-20">
            {/* feature one */}
            <div className="flex gap-6">
              {/* left */}
              <div>
                <img className="w-full" src={icon} alt="" />
              </div>
              {/* right */}
              <div className="max-w-sm">
                <h3 className="text-lg font-bold">For Individuals</h3>
                <p className="w-56 text-base leading-8 py-4">
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
              </div>
            </div>
            {/* two */}
            <div className="flex gap-6">
              {/* left */}
              <div>
                <img src={icon2} alt="" />
              </div>
              {/* right */}
              <div className="max-w-sm">
                <h3 className="text-lg font-bold">For Individuals</h3>
                <p className="w-56 text-base leading-8 py-4">
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
              </div>
            </div>
            {/* three */}
            <div className="flex gap-6">
              {/* left */}
              <div>
                <img src={icon3} alt="" />
              </div>
              {/* right */}
              <div className="max-w-sm">
                <h3 className="text-lg font-bold">For Individuals</h3>
                <p className="w-56 text-base leading-8 py-4">
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

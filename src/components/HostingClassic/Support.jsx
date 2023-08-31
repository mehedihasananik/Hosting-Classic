import image from "/hosting/messenger.png";
import DoneIcon from "@mui/icons-material/Done";

const Support = () => {
  return (
    <div className="font-Dm">
      {/* container */}
      <div className="w-full container mx-auto px-10 lg:px-0 pb-10 ">
        <div className="flex flex-col lg:flex-row ">
          {/* left */}
          <div className="w-full h-full">
            <img className="lg:w-full xl:w-[95%]" src={image} alt="" />
          </div>
          {/* right */}
          <div className="lg:pt-0 xl:pt-12">
            {/* main div */}
            <div>
              <h3 className="text-base text-[#00A99D] leading-10">
                24 hours customer support
              </h3>
            </div>
            <div className="">
              <p className="max-w-lg text-[#0F2137] text-2xl md:text-4xl font-medium md:leading-[55px] tracking-[-1px]">
                Customer support is our main priority with their hundred percent
                satisfaction.
              </p>
            </div>
            <div className="max-w-full">
              <p className="md:w-[72%] py-3 text-base leading-9 ">
                Get your tests delivered at let home collect sample from the
                victory of the managments that supplies best design system
                guidelines ever.
              </p>
            </div>
            <div className="space-y-5 md:py-10">
              <div className="flex space-x-8">
                <div className="flex space-x-4">
                  <span className="bg-[#3CC68A] w-7 h-7 rounded-full flex justify-center items-center text-white">
                    <DoneIcon style={{ width: "20px" }} />
                  </span>
                  <p>Medical and vision</p>
                </div>
                <div className="flex space-x-4">
                  <span className="bg-[#3CC68A] w-7 h-7 rounded-full flex justify-center items-center text-white">
                    <DoneIcon style={{ width: "20px" }} />
                  </span>
                  <p>Medical and vision</p>
                </div>
              </div>
              <div className="flex space-x-8">
                <div className="flex space-x-4">
                  <span className="bg-[#3CC68A] w-7 h-7 rounded-full flex justify-center items-center text-white">
                    <DoneIcon style={{ width: "16px" }} />
                  </span>
                  <p>Medical and vision</p>
                </div>
                <div className="flex space-x-4">
                  <span className="bg-[#3CC68A] w-7 h-7 rounded-full flex justify-center items-center text-white">
                    <DoneIcon style={{ width: "20px" }} />
                  </span>
                  <p>Medical and vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

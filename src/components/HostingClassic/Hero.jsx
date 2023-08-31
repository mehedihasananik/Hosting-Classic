import image from "../../../public/hosting/illustration.png";
import image1 from "../../../public/hosting/Dropbox_logo_2017.png";
import image2 from "../../../public/hosting/google.png";
import image3 from "../../../public/hosting/Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu.png";
import image4 from "../../../public/hosting/paypal.png";

const Hero = () => {
  return (
    // main container
    <div className=" bg-[#F9FBFD] px-6">
      <div className="w-full container mx-auto  pt-10 lg:py-20">
        <div
          className="flex justify-between flex-col lg:flex-row 
      w-[100%] space-y-10 md:space-y-0"
        >
          {/* left */}
          <div className="lg:w-[40%] lg:pt-10">
            {/* large content */}
            <div className="lg:max-w-lg">
              <p className="text-[25px] lg:text-[55px] font-Bree font-bold md:leading-[80px]">
                A Creative way to grow your Exciting Business ideas
              </p>
            </div>
            {/* small content */}
            <div>
              <p className="text-[16px] max-w-md md:leading-10 py-3 font-Dm">
                Get your tests delivered at let home collect sample from the
                victory of the managments that supplies best design system
                guidelines ever.
              </p>
            </div>
            {/* input button */}
            <div className="flex font-Dm my-4 space-x-5">
              <input
                className="w-[50%] md:w-[70%] text-lg border rounded-md py-3 px-4"
                type="text"
                placeholder="Type your domain name"
                id=""
              />
              <button className="bg-[#3CC68A] py-4 px-6 text-white rounded-lg">
                Get Started
              </button>
            </div>
            {/* clients */}
            <div className=" flex justify-start items-center gap-4 my-10">
              <img className="min-w-[40px]" src={image3} alt="" />
              <img className="min-w-[40px]" src={image4} alt="" />
              <img className="min-w-[40px]" src={image2} alt="" />
              <img className="min-w-[40px]" src={image1} alt="" />
            </div>
          </div>
          {/* right */}
          <div className=" lg:w-[50%]">
            <img className="w-full h-[95%] shrink-0" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

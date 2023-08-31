import image from "../../../public/hosting/mk.png";
import { Accordion } from "flowbite-react";

const Performance = () => {
  return (
    <div className="">
      {/* sub div */}
      <div className="xl:w-[100%] flex flex-col xl:flex-row space-y-10 xl:space-y-0 xl:gap-10 py-10 pb-16">
        {/* left */}
        <div className="xl:w-[50%] bg-[#F6F6F6] shadow-transparent pt-12 xl:pt-20  rounded-r-3xl ">
          <img className="border w-[100%] xl:w-[90%]" src={image} alt="" />
        </div>
        {/* right */}
        <div className="xl:w-[40%] px-10">
          <div>
            <h3 className="text-base text-[#00A99D]">
              Website content builder
            </h3>
          </div>
          <div>
            <h3 className="max-w-lg text-xl lg:text-4xl font-medium leading-[60px] py-4">
              Meet our premium features that will make you wow
            </h3>
          </div>
          <div>
            <h3 className="max-w-md pb-0 text-base leading-10">
              Build an incredible workplace and grow your business with
              Gusto&apos;s all-in-one platform with amazing contents.
            </h3>
          </div>
          {/* accordion */}
          <div className="space-y-5 py-10">
            <Accordion className="max-w-2xl">
              <Accordion.Panel>
                <Accordion.Title className="text-base">
                  Organize your project content
                </Accordion.Title>
                <Accordion.Content className="text-[15px] leading-[32px]">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Get your website ads tests delivered at let collect sample
                    from the victory of the managments that supplies best design
                    system which guidelines ever with multiple features.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion collapseAll className="max-w-2xl">
              <Accordion.Panel>
                <Accordion.Title className="text-base">
                  Organize your project content
                </Accordion.Title>
                <Accordion.Content className="text-[15px] leading-[32px]">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Get your website ads tests delivered at let collect sample
                    from the victory of the managments that supplies best design
                    system which guidelines ever with multiple features.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion collapseAll className="max-w-2xl">
              <Accordion.Panel>
                <Accordion.Title className="text-base">
                  Organize your project content
                </Accordion.Title>
                <Accordion.Content className="text-[15px] leading-[32px]">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Get your website ads tests delivered at let collect sample
                    from the victory of the managments that supplies best design
                    system which guidelines ever with multiple features.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;

import { Accordion } from "flowbite-react";

const Faq = () => {
  return (
    <div className="font-Dm">
      {/* container */}
      <div className="w-full container mx-auto py-10 px-5">
        <div className="text-center font-medium leading-10">
          <h3 className="text-base leading-10 text-[#00A99D]">
            Get your question answer
          </h3>
          <p className="text-2xl">Frequantly asked question</p>
        </div>
        {/* accordion */}
        <div className="py-10 md:py-20">
          {/* one */}
          <div className="w-[100%] gap-6 md:gap-0 flex flex-col md:flex-row">
            <div className="md:w-[40%] ">
              <p className="text-lg font-bold pt-4">
                01. Which domain should I purchase?
              </p>
            </div>
            <div className="md:w-[60%]">
              <Accordion
                collapseAll
                className="border-none hover:border-none focus:border-none"
              >
                <Accordion.Panel>
                  <Accordion.Title>What is Flowbite?</Accordion.Title>
                  <Accordion.Content>
                    <p>
                      We make it easy to move to CometNine. Simply contact us
                      and well move your hosting account from any other
                      provider, regardless of the control panel. If at anytime
                      your website is down for more than 0.1% result with proper
                      investigation experiments.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
          <hr className="border mt-5" />
          <div className="w-[100%] gap-6 md:gap-0 flex flex-col md:flex-row mt-6">
            <div className="md:w-[40%] ">
              <p className="text-lg font-bold pt-4">
                01. Which domain should I purchase?
              </p>
            </div>
            <div className="md:w-[60%]">
              <Accordion className="border-none hover:border-none focus:border-none">
                <Accordion.Panel>
                  <Accordion.Title>What is Flowbite?</Accordion.Title>
                  <Accordion.Content>
                    <p>
                      We make it easy to move to CometNine. Simply contact us
                      and well move your hosting account from any other
                      provider, regardless of the control panel. If at anytime
                      your website is down for more than 0.1% result with proper
                      investigation experiments.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
          <hr className="border border-green-900 mt-5 mb-3" />
          <div className="w-[100%] gap-6 md:gap-0 flex flex-col md:flex-row">
            <div className="md:w-[40%] ">
              <p className="text-lg font-bold pt-4">
                01. Which domain should I purchase?
              </p>
            </div>
            <div className="md:w-[60%]">
              <Accordion
                collapseAll
                className="border-none hover:border-none focus:border-none"
              >
                <Accordion.Panel>
                  <Accordion.Title>What is Flowbite?</Accordion.Title>
                  <Accordion.Content>
                    <p>
                      We make it easy to move to CometNine. Simply contact us
                      and well move your hosting account from any other
                      provider, regardless of the control panel. If at anytime
                      your website is down for more than 0.1% result with proper
                      investigation experiments.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
          <hr className="border mt-5" />
          <div className="w-[100%] gap-6 md:gap-0 flex flex-col md:flex-row">
            <div className="md:w-[40%] ">
              <p className="text-lg font-bold pt-4">
                01. Which domain should I purchase?
              </p>
            </div>
            <div className="md:w-[60%]">
              <Accordion
                collapseAll
                className="border-none hover:border-none focus:border-none"
              >
                <Accordion.Panel>
                  <Accordion.Title>What is Flowbite?</Accordion.Title>
                  <Accordion.Content>
                    <p>
                      We make it easy to move to CometNine. Simply contact us
                      and well move your hosting account from any other
                      provider, regardless of the control panel. If at anytime
                      your website is down for more than 0.1% result with proper
                      investigation experiments.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
          <hr className="border mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Faq;

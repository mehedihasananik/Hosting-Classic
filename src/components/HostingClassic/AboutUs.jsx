const AboutUs = () => {
  return (
    <div className="font-Dm">
      {/* container */}
      <div className="container mx-auto py-10">
        <div className="text-center">
          <h3 className="text-3xl leading-[45px] font-medium">
            See what our customer say about us
          </h3>
          <div className="flex justify-center py-3">
            {" "}
            <p className="max-w-xl text-base leading-9">
              Every email, web page, and social media post makes an impression
              on your customers. With our software you can be confident
              it&apos;s impression.
            </p>
          </div>
          <button className="text-[#4F96FF] text-base">Explore Details</button>
        </div>
        <div className="max-w-7xl mx-auto p-4 py-10">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/m6AF_aFuD8w"
              title="YouTube video player"
              allowFullScreen
              className="w-full h-[100%]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

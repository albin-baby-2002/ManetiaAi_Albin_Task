import React from "react";
import Container from "../../uiCustom/Container";

const OurServices = () => {
  const services = [
    {
      title: "Branding and UI/UX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      img: "CreditCard.png",
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      img: "DeviceMobile.png",
    },
    {
      title: "Mobile Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      img: "GlobeHemisphereWest.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      img: "PaintBrush.png",
    },
  ];

  return (
    <div className="font-Inter">
      <Container>
        <div className="flex flex-col gap-14 py-14 md:gap-16 md:py-16 xl:gap-20 xl:py-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-500 md:text-lg xl:text-xl">Our Services</p>
            <p className="text-2xl font-semibold md:text-3xl">
              Growth based Services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <div key={idx} className="mx-auto flex max-w-[450px] flex-col gap-4 border-2 border-brigh-blue px-5 pb-10 pt-6 hover:bg-brigh-blue sm:max-w-none">
                <div className="items- flex justify-center px-3 py-3">
                  <img
                    src={`./home/Services/${service.img}`}
                    className="max-w-12 object-contain lg:max-w-24 xl:max-w-32"
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-lg font-semibold sm:text-xl xl:text-2xl">
                    {service.title}
                  </p>
                  <p className="text-xs sm:text-sm">{service.description}</p>
                </div>

                <div className="flex items-center justify-center">
                  <p className="text-sm text-navy-blue">View Details</p>
                  <div className="size-5 xl:size-6">
                    <img
                      src="./icons/CaretRight.png"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurServices;

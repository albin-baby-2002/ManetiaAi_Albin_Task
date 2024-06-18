import React from "react";
import Container from "../../UIcomponets/Container";

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
        "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.",
      img: "DeviceMobile.png",
    },
    {
      title: "Mobile Development",
      description:
        "Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.",
      img: "GlobeHemisphereWest.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
      img: "PaintBrush.png",
    },
  ];

  return (
    <div className="font-Inter">
      <Container>
        <div className="flex flex-col gap-16 py-16 xl:gap-20 xl:py-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-gray-500 xl:text-xl">Our Services</p>
            <p className="text-3xl font-semibold">Growth based Services</p>
          </div>

          <div className="grid grid-cols-4 text-center gap-4">
            {services.map((service, idx) => (
              <div className="flex flex-col gap-4 border-2 border-brigh-blue px-5 pb-10 pt-6 hover:bg-brigh-blue">
                <div className="items- flex justify-center px-3 py-3">
                  <img
                    src={`./home/Services/${service.img}`}
                    className="max-w-24 object-contain xl:max-w-32"
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-xl font-semibold xl:text-2xl">
                    {service.title}
                  </p>
                  <p className="text-sm">{service.description}</p>
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

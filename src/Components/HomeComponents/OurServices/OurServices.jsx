import React from "react";
import Container from "../../uiCustom/Container";
import ServicesCard from "./ServicesCard/ServicesCard";

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
             <ServicesCard key={idx} service={service}/>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurServices;

import React from 'react'
import Container from '../../UIcomponets/Container';

const Testimonial = () => {
  return (
    <div className="bg-brigh-blue py-20 font-Inter">
      <Container>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-gray-500 xl:text-xl">Testimonial</p>
            <p className="text-3xl font-semibold">What our clients say</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center gap-4 bg-white px-10 py-6">
              <div className="flex size-9 items-center">
                <img
                  src="./icons/Testimonial/Quotes.png"
                  alt=""
                  className="object-contain"
                />
              </div>

              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla volutpat lectus amet. Integer sed pretium odio
                lectus at malesuada sed eget nunc. Viverra malesuada viverra id
                vel tortor dui adipiscing.
              </p>

              <div className="flex gap-3">
                <div className="size-16">
                  <img src="./home/Testimonial/Client1.png" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">Michael Wong</p>
                  <div className="w-24">
                    <img src="./icons/Testimonial/rating1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 bg-white px-10 py-6">
              <div className="flex size-9 items-center">
                <img
                  src="./icons/Testimonial/Quotes.png"
                  alt=""
                  className="object-contain"
                />
              </div>

              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla volutpat lectus amet. Integer sed pretium odio
                lectus at malesuada sed eget nunc. Viverra malesuada viverra id
                vel tortor dui adipiscing.
              </p>

              <div className="flex gap-3">
                <div className="size-16">
                  <img src="./home/Testimonial/Client2.png" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">Avril Song</p>
                  <div className="w-24">
                    <img src="./icons/Testimonial/rating2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial

import React from "react";
import { FaCartShopping } from "react-icons/fa6";

function Timeline() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 mb-4">Bringing the world's ideas to life</h2>
            <p className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          {/* Items */}
          <div className="mx-auto -my-4 max-w-3xl md:-my-6" data-aos-id-timeline>
            {/* 1st item */}
            <div className="relative py-4 pl-24 md:py-6" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter mb-2 text-xl text-purple-600">The seed</div>
                <div className="mb-3 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-green-200 py-1 px-3 text-sm font-semibold text-green-600">
                    <FaCartShopping />
                  </div>
                  <div className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px" aria-hidden="true"></div>
                  <div className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-900 bg-purple-600" aria-hidden="true"></div>
                  <h4 className="h4">Open PRO was founded in Milan, Italy</h4>
                </div>
                <p className="text-lg text-gray-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative py-4 pl-24 md:py-6" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter mb-2 text-xl text-purple-600">New features</div>
                <div className="mb-3 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-green-200 py-1 px-3 text-sm font-semibold text-green-600">2017</div>
                  <div className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px" aria-hidden="true"></div>
                  <div className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-900 bg-purple-600" aria-hidden="true"></div>
                  <h4 className="h4">Launched the first Open PRO Advanced plan</h4>
                </div>
                <p className="text-lg text-gray-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative py-4 pl-24 md:py-6" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter mb-2 text-xl text-purple-600">Pivoting</div>
                <div className="mb-3 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-green-200 py-1 px-3 text-sm font-semibold text-green-600">2018</div>
                  <div className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px" aria-hidden="true"></div>
                  <div className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-900 bg-purple-600" aria-hidden="true"></div>
                  <h4 className="h4">Transitioned to a SaaS business model</h4>
                </div>
                <p className="text-lg text-gray-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</p>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative py-4 pl-24 md:py-6" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter mb-2 text-xl text-purple-600">Huge milestone</div>
                <div className="mb-3 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-green-200 py-1 px-3 text-sm font-semibold text-green-600">2019</div>
                  <div className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-900 bg-purple-600" aria-hidden="true"></div>
                  <h4 className="h4">1 million happy customers</h4>
                </div>
                <p className="text-lg text-gray-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

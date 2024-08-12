import Image from "next/image";


export default function Carousel() {
  const content = {
    imageurl: "/image/carousel-1.jpg",
    title: "Accelerate Your Business Growth With Us",
    description: "Your business is only as good as the technology behind it. We have the expertise. You have the vision. We make technology happen! Our team of world-class engineers and innovators will build your next software project, leaving you to focus on running your business.",
    question:"Got an idea?Bring it to Life with GuzarSoft."
  }

  return (
    <div className="mt-20 h-full">
                <Image
                    src={content.imageurl}
                    fill
                    object-fit="contain"
                    className="animate-fadeIn"
                        />
                         <div className="absolute mt-10 top-1/5 transform text-white ml-20" style={{ zIndex: 1 }}>
        <p className="text-[39px] font-bold w-[600px]">{content.title}</p>
        <p className="text-xl text-gray-500 mt-3 w-[500px]">{content.description}</p>
        <p className="text-sm font-semibold mt-5">{content.question}</p>
        <button className="mt-5 text-white font-semibold bg-[#2176FF] py-4 px-10 rounded-full hover:bg-[#217FFF]">
          Step Into Innovation
        </button>
      </div>

      <div className="absolute bottom-0 transform text-black w-full" style={{ zIndex: 1 }}>
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 bg-[#FFDB53] px-4 md:px-4 sm:py-7 py-7 md:py-5 mt-5">
    <p className="text-lg md:text-2xl lg:text-[39px] font-bold text-center md:text-left">
      Ready To Explore Our Services & Client Stories?
    </p>
    <button className="text-sm md:text-base lg:text-lg text-white font-semibold bg-[#000000] py-2 px-5 md:py-2 md:px-10 rounded-full hover:bg-[#FFFFFF] hover:text-black">
      Dive Into Our Portfolio
    </button>
  </div>
</div>
                    </div>

  );
}

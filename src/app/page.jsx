import Image from "next/image"
const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row gap-4 ">
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image src={"/hero.png"} fill className="object-contain" alt="hero image" />
      </div>
      <div className="h-1/2 flex flex-col gap-4 items-center justify-center lg:h-full lg:w-1/2 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <h1 className="text-xl md:text-4xl  font-semibold">Crafting digital experiences,designing tommorrow.</h1>
        <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat corrupti ipsam dolore libero vitae iste sunt ut quibusdam maiores asperiores, nihil tenetur sit nemo?</p>
        <div className="flex gap-4 w-full">
          <button className="rounded-lg p-2 ring-black  ring-2 bg-black text-white capitalize font-medium">view my work</button>
          <button className="rounded-lg p-2 ring-black  ring-2 text-black capitalize font-medium">contact me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

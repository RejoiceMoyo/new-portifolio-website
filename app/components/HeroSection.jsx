import React from "react";
import Image from "next/image";

const HeroSection = () => {
return (
    <section>
<div className="grid grid-cols-1 sm:grid-cols-12">
    <div className="col-span-7 place-self-center text-center sm:text-left">

        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-pink-800">Hellooo World, I'm {" "}
          </span>
           Rejo Moyo</h1>

        <p className="text-[#adadad] text-base sm:text-lg mb-6 lg:text-xl">Welcome to my portfolio! I'm passionate about creating user-friendly and visually appealing web applications that make an impact. Currently pursuing a Bachelor's in Computer Science, I specialize in building fully optimized, scalable apps using technologies like Next.js and Vite, ensuring fast, efficient performance.

Explore my projects and journey as I work toward becoming a skilled developer. Let's build something amazing together!
</p>

<div>
    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-pink-800 to-pink-300 hover:bg-pink-200 text-black">Hire Me🦋</button>
    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-pink-800 to-pink-300 hover:bg-pink-200 text-black border border-white mt-3"> Download my CV🦋</button>
</div>

</div>

<div className="col-span-5 place-self-center mt-4 lg:mt-0">
<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
  <Image 
    src="/images/myimage.jpg"
    alt="hero image"
    className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object cover"
    width={300}
    height={300}
  />
</div>
</div>
</div>
    </section>

)
}

export default HeroSection;
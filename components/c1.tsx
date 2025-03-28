"use client"

export default function C1() {
    const text="Explore The Himalayas";
    return (
        <div className="relative">
            <img className="w-full h-[88vh] object-cover" src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Beautiful Mountains"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center px-4">
                <h1 className="text-[rgb(178,255,255)] text-4xl md:text-7xl font-bold drop-shadow-lg">
                    {text.split("").map((char, index) => (
                        <span 
                            key={index} 
                            className="animated-letter inline-block opacity-0 animate-fadeIn" 
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>
                <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl">
                    Discover breathtaking landscapes, peaceful nature, and unforgettable adventures.
                </p>
            </div>
        </div>
    );
}
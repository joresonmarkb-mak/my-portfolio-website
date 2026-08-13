import Navbar from '../components/Navbar.jsx';
import hero from '../assets/hero.png';
import right from '../assets/right-blue.png';
import left from '../assets/left-blue.png';
import arrowUp from '../assets/arrow-up.png';
import rectangle_black from '../assets/rectangle-black.png';
import dartLogo from '../assets/tech/Dart.png';
import expressLogo from '../assets/tech/Express.png';
import firebaseLogo from '../assets/tech/Firebase.png';
import flutterLogo from '../assets/tech/Flutter.png';
import javascriptLogo from '../assets/tech/Javascript.png';
import mongodbLogo from '../assets/tech/MongoDB.png';
import mysqlLogo from '../assets/tech/MySQL.png';
import reactLogo from '../assets/tech/React.png';
import renderLogo from '../assets/tech/Render.png';
import vercelLogo from '../assets/tech/Vercel.png';
import Marquee from '../components/marque.jsx';

const techStack = [
  { label: 'Dart', source: dartLogo },
  { label: 'Express', source: expressLogo },
  { label: 'Firebase', source: firebaseLogo },
  { label: 'Flutter', source: flutterLogo },
  { label: 'Javascript', source: javascriptLogo },
  { label: 'MongoDB', source: mongodbLogo },
  { label: 'MySQL', source: mysqlLogo },
  { label: 'React', source: reactLogo },
  { label: 'Render', source: renderLogo },
  { label: 'Vercel', source: vercelLogo },
];


function Home() {
  return (
    <>
      <Navbar />
      <div className="relative flex mt-25 justify-center h-screen w-full overflow-hidden ">

        <img
          src={left}
          alt="Left"
          className="w-[clamp(2rem,60vw,60rem)] absolute left-0  "
        />

       <img
          src={hero}
          alt="Hero"
          className="w-[clamp(2rem,50vw,50rem)] absolute z-20 mt-[clamp(1rem,5vw,5rem)]"
        />
         <img
          src={right}
          alt="Right"
          className="w-[clamp(2rem,60vw,60rem)] absolute right-0 "
        />
        {/* <img src={rectangle_black}
          alt="Right"
          className="w-full absolute bottom-29  opacity-50 z-20 "
        /> */}

        <div className="absolute text-center text-white font-agdasima ">
          <div className="bg-white/20 text-black p-2 rounded-full w-40 flex items-center justify-center space-x-2 mb-4 max-sm:hidden">
            <div className="bg-[#02AD02] rounded-full w-3 h-3 opacity-100"></div>
            <div className="text-white  text-[clamp(0.3rem,0.6rem,6rem)] opacity-100 font-montserrat  ">Available for Work</div>
          </div>
          <div className="text-[clamp(1.5rem,4vw,3rem)] text-left leading-none">Hi, I am</div>
          <div className="font-semibold leading-none text-[clamp(2rem,15vw,20rem)] ">
            JORESON MARK
          </div>
          <div className="mt-6 flex flex-col items-start text-left mt-18">
            <div className="flex w-full items-start justify-between gap-4">
              <div className="text-[clamp(1rem,5vw,5rem)] leading-none max-w-xl max-sm:justify-center  font-agdasima z-20">
                Websites that turn <br />
                Visitors into clients
              </div>
             <div className="mt-1 h-[clamp(5rem,15vw,18rem)] w-[clamp(1rem,20vw,25rem)] rounded-3xl z-20 bg-white/10 border border-white/20 max-sm:hidden p-[clamp(0.75rem,1.5vw,1.25rem)] flex flex-col justify-between">

        {/* Avatars + arrow badge */}
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="rounded-full bg-gray-500 border-2 border-black w-[clamp(1.5rem,3vw,2.5rem)] h-[clamp(1.5rem,3vw,2.5rem)]"
                  />
                ))}
              </div>
              <div className="bg-white rounded-full flex items-center justify-center ml-2 w-[clamp(1.5rem,3vw,2.5rem)] h-[clamp(1.5rem,3vw,2.5rem)]">
                <span className="text-black text-[clamp(0.75rem,1.5vw,1.1rem)]">↗</span>
              </div>
            </div>

              {/* Text */}
              <div className="text-white text-[clamp(0.6rem,1.1vw,2.8rem)] leading-snug mt-2 ">
                <span className="font-semibold">99.6% of My Client are Satisfied</span>
                <br />
                -Be One Of Them Today.
              </div>

              {/* Buttons */}
              <div className="flex items-center space-x-2 mt-3 text-[clamp(0.55rem,1vw,1.25rem)] z-22 ">
                <button
                  type="button"
                  className="bg-white text-black rounded-full font-semibold px-[clamp(0.5rem,1.2vw,1.2rem)] py-[clamp(0.25rem,0.6vw,1.2rem)]"
                >
                  Free Consultation
                </button>
                <button
                  type="button"
                  className="border border-white/40 text-white rounded-full px-[clamp(0.5rem,1.2vw,1.2rem)] py-[clamp(0.25rem,0.6vw,1.2rem)]"
                >
                  24h Response
                </button>
              </div>

            </div>
                        
             </div>

            <div className="col-span-2 mt-6 flex items-center space-x-4 max-sm:justify-center">
              <button type="button" className="button font-semibold text-[clamp(0.4rem,1vw,1.25rem)] z-21 font-montserrat mt-[-3rem] max-sm:hidden">
                <span>Start a Project</span>
                <div className="flex h-11 w-12 items-center rounded-full bg-white p-1 ">
                  <img src={arrowUp} alt="Arrow Up" className="h-[clamp(1rem,11vw,13rem)] w-12 object-contain" />
                </div>
              </button>
              <button type="button"  className="button z-21 bg-transparent font-semibold text-[clamp(0.4rem,1vw,1.25rem)] font-montserrat mt-[-3rem] max-sm:hidden">
                <span>View My Work</span>
                <div className="flex h-11 w-12 items-center rounded-full bg-white p-1 ">
                  <img src={arrowUp} alt="Arrow Up" className="h-[clamp(1rem,11vw,13rem)] w-12 object-contain" />
                </div>
              </button>
            </div>
          </div>
        </div>    
      </div>
      <Marquee text="◆ 3 YEARS EXPERIENCE  ◆   10+ DELIVERIES  ◆  99% POSITIVE REVIEWS " speed={20} />

            {/* ABOUT ME */}
      <div className="p-[clamp(1rem,2vw,2rem)] mt-12 max-sm:mt-8 col-span-2 flex items-start gap-[clamp(1rem,8vw,10rem)] max-w-7xl mx-auto">
        
        {/* Left label column */}
        <div className="flex items-center gap-2 shrink-0 pt-1">
          <span className="text-blue-600 text-lg leading-none">◆</span>
          <p className="text-white text-[clamp(0.8rem,1vw,1rem)] font-semibold whitespace-nowrap">
            About Me
          </p>
          <div className="h-px w-16 bg-white/30" />
        </div>

        {/* Right content column, pushed further right */}
        <div className="ml-[clamp(1rem,6vw,8rem)] text-justify">
          <p className="text-white text-[clamp(0.9rem,2vw,3rem)] leading-relaxed font-agdasima">
            I'm Joreson Mark, a Full Stack Web and Mobile Developer who builds modern, scalable, and user-friendly applications. I enjoy solving real-world problems through clean, maintainable code and creating digital solutions that help businesses improve efficiency, enhance user experiences, and achieve their goals.
          </p>

         <div className="col-span-2 mt-6 flex items-center space-x-4 max-sm:justify-center">
              <button type="button" className="button font-semibold text-[clamp(0.4rem,1vw,1.25rem)] z-21 font-montserrat max-sm:hidden">
                <span>Start a Project</span>
                <div className="flex h-11 w-12 items-center rounded-full bg-white p-1 ">
                  <img src={arrowUp} alt="Arrow Up" className="h-[clamp(1rem,11vw,13rem)] w-12 object-contain" />
                </div>
              </button>
              <button type="button"  className="button z-21 bg-transparent font-semibold text-[clamp(0.4rem,1vw,1.25rem)] font-montserrat  max-sm:hidden">
                <span>View My Work</span>
                <div className="flex h-11 w-12 items-center rounded-full bg-white p-1 ">
                  <img src={arrowUp} alt="Arrow Up" className="h-[clamp(1rem,11vw,13rem)] w-12 object-contain" />
                </div>
              </button>
            </div>
        </div>

</div>

      <Marquee items={techStack} speed={18} />

    </>

  );
}

export default Home;
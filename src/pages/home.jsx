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
import aeonix from '../assets/projects/aeonix-page.png'
import codeodyssey from '../assets/projects/codeodyssey-pro.png'
import motogears from '../assets/projects/motogears-app.png'
import ProjectCard from '../components/projectCard.jsx'
import ClientFeedbackCard from '../components/clientFeedbackCard.jsx';
import Footer from "../components/Footer.jsx"
import leithEssence from "../assets/projects/leith-essense.png"
import ContactLinks from "../components/ContactLinks.jsx"

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
  const scrollToSection = (id) => (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            const navbarOffset = 90; // adjust to match your navbar's actual height
            const y = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setMobileOpen(false);
    };
  return (
    <>
      <Navbar />
      <div id="hero" className="relative flex justify-center w-full h-[56vh] min-h-[420px] overflow-hidden  mt-[clamp(1rem,5vw,10rem)] pt-5 md:h-screen md:pt-0">

        <img
          src={left}
          alt="Left"
          className="w-[clamp(2rem,60vw,60rem)] absolute left-0 h-[clamp(40rem,60vw,60rem)]   "
        />

       <img
          src={hero}
          alt="Hero"
          className="w-[clamp(35rem,50vw,50rem)] absolute z-10 mt-[clamp(1rem,5vw,5rem)]"
        />
         <img
          src={right}
          alt="Right"
          className="w-[clamp(2rem,60vw,60rem)] h-[clamp(2rem,60vw,60rem)] absolute right-0 h-[clamp(40rem,60vw,60rem)] "
        />
       <img
        src={rectangle_black}
        alt="Right"
        className="z-15 absolute bottom-0 w-full h-desktop mt-8 max-md:bottom-25"
      />
      

        <div className="absolute text-center text-white mt-2 font-agdasima ">
          <div className="bg-white/20 text-black p-2 rounded-full w-40 flex items-center justify-center space-x-2 mb-4 max-md:hidden">
            <div className="bg-[#02AD02] rounded-full  w-3 h-3 opacity-100"></div>
            <div className="text-white  text-[clamp(0.3rem,0.6rem,6rem)] opacity-100 font-montserrat  ">Available for Work</div>
          </div>
          <div className="text-[clamp(1.5rem,4vw,3rem)] max-md:mt-25 text-left leading-none mt-[clamp(1em,1vw,8rem)]">Hi, I am</div>
          <div className=" leading-none text-[clamp(7rem,18vw,20rem)] ">
            JORESON MARK
          </div>
          <div className="mt-6 flex flex-col  items-start text-left max-md:items-center max-md:text-center mt-18 max-md:mt-50 ">
            <div className="flex w-full items-start justify-between gap-4 max-md:flex-col max-md:items-center max-md:justify-center">
              <div className="text-[clamp(1rem,5vw,5rem)] leading-none max-w-xl max-md:text-center max-sm:justify-center  font-agdasima z-20">
                Software <br /> Developer
                
                <div className="col-span-2 z-20 flex mt-4 items-center max-md:mt-4 max-md:justify-center  ">
                    <button
                      type="submit"
                      className="button font-montserrat"
                      onClick={scrollToSection('contact')}
                    >
                      Start a Project
                      <span className=" bg-white text-blue-700 rounded-full flex items-center justify-center w-[clamp(1.375rem,4vw,2rem)] h-[clamp(1.375rem,4vw,2rem)]  text-[clamp(0.75rem,1.5vw,1rem)]">
                        ↗
                      </span>
                    </button>

                    <button
                      type="submit"
                      className=" max-md:hidden font-montserrat w-fit flex items-center gap-[clamp(0.35rem,1.5vw,0.75rem)] z-30 transition-colors text-white font-semibold rounded-full pl-[clamp(0.75rem,3vw,1.5rem)] pr-[clamp(0.25rem,1.5vw,0.5rem)] py-[clamp(0.25rem,1.5vw,0.5rem)] text-[clamp(0.75rem,1.5vw,1rem)]"
                    >
                      View My Work ↘
                      <span className="text-white rounded-full flex items-center justify-center w-[clamp(1.375rem,4vw,2rem)] h-[clamp(1.375rem,4vw,2rem)]">
                      </span>
                    </button>
                </div>
              </div>
              
              <div className="h-[clamp(5rem,12vw,18rem)] w-[clamp(1rem,18vw,25rem)] max-md:bg-transparent max-md:border-transparent rounded-3xl z-20 bg-white/10 border border-white/20 max-sm:hidden p-[clamp(0.75rem,1.5vw,1.25rem)] flex flex-col justify-start">

              {/* Avatars + arrow badge */}
              <div className="order-first self-start flex items-center">
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
                <div className="text-white text-[clamp(0.6rem,1.1vw,2.8rem)] leading-snug mt-2  ">
                  <span className="font-semibold">99.6% of My Client are Satisfied</span>
                  <br />
                  -Be One Of Them Today.
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-2 mt-3 text-[clamp(0.55rem,1vw,1.25rem)] max-md:hidden z-22 ">
                  <button
                    type="button "
                    className="bg-white text-black rounded-full font-semibold px-[clamp(0.2rem,1.2vw,1.2rem)] py-[clamp(0.3rem,0.6vw,1.2rem)]"
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

                
            </div>
        </div>    
      </div>
      <Marquee text="◆ 3 YEARS EXPERIENCE  ◆   10+ DELIVERIES  ◆  99% POSITIVE REVIEWS " speed={20} className="mt-[-1rem]" />

            {/* ABOUT ME */}
      <div id="about" className="p-[clamp(1rem,1vw,2rem)] max-sm:mt-8 col-span-2 flex items-start gap-[clamp(1rem,8vw,10rem)] max-w-7xl mx-auto">
        
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
          <p className="text-white text-[clamp(0.9rem,2vw,5rem)] leading-relaxed font-agdasima">
            I'm Joreson Mark, a software Engineer who builds modern, scalable, and user-friendly applications. I enjoy solving real-world problems through clean, maintainable code and creating digital solutions that help businesses improve efficiency, enhance user experiences, and achieve their goals.
          </p>

         <div className="col-span-2 mt-6 flex items-center space-x-4 max-sm:justify-center">
                <button
                  type="submit"
                  className="font-montserrat w-fit flex items-center gap-[clamp(0.35rem,1.5vw,0.75rem)] bg-blue-700 hover:bg-blue-600 transition-colors text-white font-semibold rounded-full pl-[clamp(0.75rem,3vw,1.5rem)] pr-[clamp(0.25rem,1.5vw,0.5rem)] py-[clamp(0.25rem,1.5vw,0.5rem)] text-[clamp(0.75rem,1.5vw,1rem)]"
                >
                  Start a Project
                  <span className="bg-white text-blue-700 rounded-full flex items-center justify-center w-[clamp(1.375rem,4vw,2rem)] h-[clamp(1.375rem,4vw,2rem)]  text-[clamp(0.75rem,1.5vw,1rem)]">
                    ↗
                  </span>
                </button>

                <button
                  type="submit"
                  className="font-montserrat w-fit flex items-center gap-[clamp(0.35rem,1.5vw,0.75rem)]  transition-colors text-white font-semibold rounded-full pl-[clamp(0.75rem,3vw,1.5rem)] pr-[clamp(0.25rem,1.5vw,0.5rem)] py-[clamp(0.25rem,1.5vw,0.5rem)] text-[clamp(0.75rem,1.5vw,1rem)]"
                >
                  View My Work ↘
                  <span className="text-white rounded-full flex items-center justify-center w-[clamp(1.375rem,4vw,2rem)] h-[clamp(1.375rem,4vw,2rem)]">
                  </span>
                </button>
            </div>
          </div>
        </div>

      <Marquee items={techStack} speed={18} />

      
        {/* PROJECTS */}
        <div id="projects" className="p-[clamp(0.5rem,2vw,2rem)] mt-12 max-sm:mt-8 max-w-7xl mx-auto">

          <div className="flex max-sm:flex-col gap-[clamp(1rem,3vw,3rem)]">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-[clamp(2rem,3vw,3rem)] flex-1 ml-10">
                   <div>
                <div className="flex items-center gap-2 shrink-0 pt-1">
                  <span className="text-blue-600 text-lg leading-none">◆</span>
                  <p className="text-white text-[clamp(0.8rem,1vw,1rem)] font-semibold whitespace-nowrap font-montserrat">
                    Some recent projects
                  </p>
                  <div className="h-px w-16 bg-white/30" />
                </div>
                <p className="text-white font-bold text-[clamp(1.2rem,2.2vw,4rem)] mt-3 leading-tight font-agdasima">
                  Systems built to solve a specific operating problem, not portfolio.
                </p>
                
              </div>
              {/* Aeonix Card */}
              <ProjectCard
                image={aeonix}
                title="Aeonix Timepieces Website"
                description="Create for customer easy to shop watches"
                tag="Fullstack Web Development"
              />

              {/* Motogears Card */}
              <ProjectCard
                image={motogears}
                title="MOTOGEARS MOBILE APPLICATION"
                description="A e-commerce app for motorcycle gears"
                tag="Mobile Development"
              />
              
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-[clamp(1.5rem,3vw,3rem)] flex-1">

              {/* Header */}
             

              {/* CodeOdyssey Card */}
              <ProjectCard
                image={codeodyssey}
                title="CodeOdyssey"
                description="An interactive platform for programming education with real-time optimization and feedback"
                tag="Backend Developer"
              />

              {/* Placeholder / next card */}
               <ProjectCard
                image={leithEssence}
                title="Leith Essence"
                description="A Perfume Shop online with operation management"
                tag="Fullstack Developer"
              />
                 <p className="text-white font-bold text-[clamp(1.2rem,2.2vw,4rem)] mt-3 leading-tight font-agdasima ">
                  Systems built to solve a specific operating problem, not portfolio.
                </p>
                <button
                  type="submit"
                  className="font-montserrat w-fit flex items-center gap-[clamp(0.35rem,1.5vw,0.75rem)] bg-blue-700 hover:bg-blue-600 transition-colors text-white font-semibold rounded-full pl-[clamp(0.75rem,3vw,1.5rem)] pr-[clamp(0.25rem,1.5vw,0.5rem)] py-[clamp(0.25rem,1.5vw,0.5rem)] text-[clamp(0.75rem,1.5vw,1rem)]"
                >
                  Start a Project
                  <span className="bg-white text-blue-700 rounded-full flex items-center justify-center w-[clamp(1.375rem,4vw,2rem)] h-[clamp(1.375rem,4vw,2rem)] z-30 text-[clamp(0.75rem,1.5vw,1rem)]">
                    ↗
                  </span>
                </button>
            </div>
            

          </div>
        </div>
        {/* My Services */}
        
         <div className="p-[clamp(1rem,2vw,2rem)] mt-12 max-sm:mt-8 col-span-2 flex items-start gap-[clamp(1rem,8vw,10rem)] max-w-7xl mx-auto">
        
        {/* Left label column */}
        <div className=''>
          <div className="flex items-center gap-2 shrink-0 pt-1 mt-[clamp(0.9rem,2vw,18rem)]">
            <span className="text-blue-600 text-lg leading-none">◆</span>
            <p className="text-white text-[clamp(0.8rem,1vw,1rem)] font-semibold whitespace-nowrap">
              01
            </p>
            
            <div className="h-px w-[clamp(1rem,16vw,18rem)] bg-white/30" />
          </div>
          <div className="flex items-center gap-2 shrink-0 pt-1 mt-[clamp(0.9rem,16vw,18rem)]">
              <span className="text-blue-600 text-lg leading-none">◆</span>
              <p className="text-white text-[clamp(0.8rem,1vw,1rem)] font-semibold whitespace-nowrap">
                02
              </p>
              
              <div className="h-px w-[clamp(1rem,16vw,18rem)] bg-white/30" />
          </div>
          <div className="flex items-center gap-2 shrink-0 pt-1 mt-[clamp(0.9rem,16vw,18rem)]">
              <span className="text-blue-600 text-lg leading-none">◆</span>
              <p className="text-white text-[clamp(0.8rem,1vw,1rem)] font-semibold whitespace-nowrap">
                03
              </p>
              
              <div className="h-px w-[clamp(1rem,16vw,18rem)] bg-white/30" />
          </div>
        </div>

        {/* Right content column, pushed further right */}
        <div className="ml-[clamp(1rem,6vw,8rem)] text-justify">

          <p className="text-white text-[clamp(0.9rem,6vw,7rem)] font-semibold font-agdasima">
            Web Development
          </p>
          <p className="text-white text-[clamp(0.9rem,2vw,3rem)]  font-agdasima">
            Systems and websites built around how your business runs.
          </p>
          <div className="emblem">Plan</div>
          <div className="emblem">Build</div>
          <div className="emblem">Test</div>
          <div className="emblem">Launch</div>
          <div className="emblem">Support</div>

          <div className="h-px w-[clamp(20rem,45vw,80rem)] bg-white/30" />
          <p className="text-white text-[clamp(0.9rem,6vw,7rem)] font-semibold font-agdasima mt-8">
            Mobile Development
          </p>
          <p className="text-white text-[clamp(0.9rem,2vw,3rem)]  font-agdasima">
            Turning ideas into apps people actually use.
          </p>
          <div className="emblem">Plan</div>
          <div className="emblem">Build</div>
          <div className="emblem">Test</div>
          <div className="emblem">Launch</div>
          <div className="emblem">Support</div>

          <div className="h-px w-[clamp(20rem,45vw,80rem)] bg-white/30" />
          <p className="text-white text-[clamp(0.9rem,6vw,7rem)] font-semibold font-agdasima mt-8">
            E-Commerce Store
          </p>
          <p className="text-white text-[clamp(0.9rem,2vw,3rem)]  font-agdasima">
            A storefront that makes it easy for customers to browse, order, and pay 
            — so your business is never limited to foot traffic or store hours.
          </p>
          <div className="emblem">Plan</div>
          <div className="emblem">Build</div>
          <div className="emblem">Test</div>
          <div className="emblem">Launch</div>
          <div className="emblem">Support</div>

          <div className="h-px w-[clamp(20rem,45vw,80rem)] bg-white/30" />
        </div>
        </div>
        {/* TESTIMONIALS */}
        <div id="testimonials" className="p-[clamp(1rem,2vw,2rem)] mt-12 max-sm:mt-8 max-w-7xl mx-auto">

          <div className="flex max-sm:flex-col gap-[clamp(1.5rem,3vw,3rem)]">

            {/* LEFT: Section label + heading */}
            <div className="shrink-0 w-[clamp(10rem,15vw,14rem)]">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-lg leading-none">◆</span>
                <p className="text-white text-[clamp(0.8rem,1vw,1rem)] font-semibold font-montserrat">
                  Testimonials
                </p>
                <div className="h-px w-70 bg-white/30" />
              </div>
              <p className="text-white font-bold text-[clamp(1.4rem,2.2vw,2rem)] mt-3 leading-tight font-agdasima">
                Trusted by Clients
              </p>
            </div>

            {/* RIGHT: Swipeable cards */}
            <div className="flex gap-[clamp(1rem,1.5vw,1.5rem)] overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">

              <ClientFeedbackCard
                name="Dhenmark"
                rate="5.0"
                description="Joreson did a great job of communicating and also completing the task"
              />
              <ClientFeedbackCard
                name="Von"
                rate="5.0"
                description="Joreson did a great job of communicating and also completing the task"
              />
              <ClientFeedbackCard
                name="Lei"
                rate="5.0"
                description="Joreson did a great job of communicating and also completing the task"
              />
              <ClientFeedbackCard
                name="Gem"
                rate="5.0"
                description="Joreson did a great job of communicating and also completing the task"
              />
              <ClientFeedbackCard
                name="Ian"
                rate="5.0"
                description="Joreson did a great job of communicating and also completing the task"
              />

            </div>

          </div>
        </div>
        <Marquee className="text-4rem" text=" LET'S WORK TOGETHER" speed={20} />
        {/* Let's Work Together */}
        <div id="contact" className="p-[clamp(1rem,2vw,2rem)] mt-12 max-sm:mt-8 max-w-7xl mx-auto">

          <div className="flex max-sm:flex-col gap-[clamp(1.5rem,3vw,3rem)]">

            {/* LEFT: Section label + heading */}
            <div className="shrink-0 w-[clamp(10rem,15vw,14rem)]">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-lg leading-none">◆</span>
                <p className="text-white text-[clamp(0.8rem,1vw,1rem)] font-semibold font-montserrat">
                  Let's Work Together
                </p>
              </div>
              <p className="text-white font-bold text-[clamp(1.8rem,2.8vw,2.5rem)] mt-3 leading-tight font-agdasima">
                Start Your Project
              </p>
              <p className="text-white/60 text-[clamp(0.75rem,1vw,0.9rem)] mt-2 leading-snug">
                I'll help you plan and build a website that actually performs.
              </p>
            </div>

            {/* RIGHT: Form */}
            <form className="flex-1 flex flex-col gap-[clamp(1.5rem,2.5vw,2rem)]">

              {/* Name + Email row */}
              <div className="flex max-sm:flex-col gap-[clamp(1.5rem,3vw,3rem)]">
                <div className="flex-1">
                  <label className="text-white font-semibold text-[clamp(0.85rem,1vw,1rem)] block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white pb-2 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-white font-semibold text-[clamp(0.85rem,1vw,1rem)] block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white pb-2 focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              {/* Interested in dropdown */}
              <div>
                <label className="text-white font-semibold text-[clamp(0.85rem,1vw,1rem)] block mb-2">
                  I am interested in
                </label>
                <select
                  defaultValue="Both web and mobile development"
                  className="w-full bg-transparent border-0 border-b border-white/30 text-white/70 pb-2 focus:outline-none focus:border-white appearance-none cursor-pointer"
                >
                  <option className="bg-neutral-900">Web development</option>
                  <option className="bg-neutral-900">Mobile development</option>
                  <option className="bg-neutral-900">Both web and mobile development</option>
                </select>
              </div>

              {/* Project details textarea */}
              <div>
                <label className="text-white font-semibold text-[clamp(0.85rem,1vw,1rem)] block mb-2">
                  Tell me about your project
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border-0 border-b border-white/30 text-white pb-2 focus:outline-none focus:border-white resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600 bg-transparent border border-white/30"
                />
                <p className="text-white/70 text-[clamp(0.75rem,0.9vw,0.85rem)]">
                  By submitting this form I accept the Privacy Policy of this site.
                </p>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-fit flex items-center gap-3 bg-blue-700 hover:bg-blue-600 transition-colors text-white font-semibold rounded-full pl-6 pr-2 py-2"
              >
                Send Project Details
                <span className="bg-white text-blue-700 rounded-full w-8 h-8 flex items-center justify-center">
                  ↗
                </span>
              </button>

            </form>

          </div>
        </div>
        <div id="contact" className="p-[clamp(1rem,2vw,2rem)] mt-12 max-sm:mt-8 max-w-7xl mx-auto">

          <div className="flex max-sm:flex-col gap-[clamp(1.5rem,3vw,3rem)]">

            {/* LEFT: Section label + heading */}
            <div className="shrink-0 w-[clamp(10rem,15vw,14rem)]">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-lg leading-none">◆</span>
                <p className="text-white text-[clamp(0.8rem,1vw,1rem)] font-semibold font-montserrat">
                  My Contacts
                </p>
                <div className="h-px w-20 bg-white/30" />
              </div>            
            </div>
          
          </div>
        </div>                 
        <ContactLinks/>     
        <Footer />
                        
     

    </>

  );
}

export default Home;
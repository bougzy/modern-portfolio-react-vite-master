import { IoLogoGithub } from "react-icons/io5";

function SideBar() {
  return (
    <div
      className="w-[90px] border-r-[1px] dark:bg-slate-800
      h-screen fixed flex flex-col justify-around items-center mt-[90px]"
    >
      <h2 className="-rotate-90 tracking-widest">HOMEPAGE</h2>
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <a href="https://github.com/bougzy?tab=repositories&q=&type=&language=&sort=" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </a>
        {/* You can replace 'your-github-username' with your actual GitHub username. */}

        {/* <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </a> */}
        {/* You can replace 'your-linkedin-profile' with your actual LinkedIn profile URL. */}
      </div>
    </div>
  );
}

export default SideBar;

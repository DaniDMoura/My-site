import { FC } from "react";
import Aurora from "./components/Aurora";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MailboxIcon
} from "@phosphor-icons/react";

const App: FC = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-stone-950 text-white">
      <header className="fixed top-4 left-0 right-0 text-center text-[9px] text-white/50 z-10">
        © {new Date().getFullYear()} Danilo Moura
      </header>

      <div className="fixed inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <img
          src="/picture.jpg"
          alt="Picture"
          className="w-30 h-30 rounded-full m-5 "
        />
        <div>
          <h1 className="text-3xl opacity-90 sm:text-4xl md:text-5xl font-family-primary font-extralight">
            Danilo Moura
          </h1>
          <p className="  font-extralight text-[11px] sm:text-[12px] md:text-[13px]  mt-2">
            Web Developer
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 mt-7 opacity-80">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/danilosmoura_"
            className="hover:bg-white hover:text-black  duration-300 font-family-primary cursor-pointer flex items-center justify-center-safe gap-2 w-60 h-12 text-[11px] border rounded-full shadow-2xl"
          >
            <InstagramLogoIcon size={15} />
            Instagram
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/danilosantos-moura/"
            className="hover:bg-white hover:text-black duration-300 font-family-primary  cursor-pointer flex items-center justify-center-safe gap-2 w-60 h-12 text-[11px] border rounded-full shadow-2xl"
          >
            <LinkedinLogoIcon size={15} />
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DaniDMoura"
            className="hover:bg-white hover:text-black duration-300 font-family-primary cursor-pointer flex items-center justify-center-safe gap-2 w-60 h-12 text-[11px] border rounded-full shadow-2xl"
          >
            <GithubLogoIcon size={15} />
            GitHub
          </a>
                    <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:mouradanilo061@gmail.com"
            className="hover:bg-white hover:text-black duration-300 font-family-primary cursor-pointer flex items-center justify-center-safe gap-2 w-60 h-12 text-[11px] border rounded-full shadow-2xl"
          >
            <MailboxIcon size={15} />
            Mail
          </a>
        </div>
      </div>

      <Aurora
        colorStops={["#f0f0f0", "#f0f0f0", "#f0f0f0"]}
        blend={2}
        amplitude={0.2}
        speed={2}
      />
    </div>
  );
};

export default App;

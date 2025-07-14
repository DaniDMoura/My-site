import { FC } from "react";
import Aurora from "./components/Aurora";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

const App: FC = () => {
  return (


    <div className="w-screen h-screen relative overflow-hidden bg-stone-950 text-white font-nunito">

      <header className="fixed top-4 left-0 right-0 text-center text-xs text-white/50 z-10">
        © {new Date().getFullYear()} Danilo Moura
      </header>

      <div className="fixed inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="animate-fadeinup text-5xl opacity-90 sm:text-6xl md:text-7xl font-bold  ">
          Danilo Moura
        </h1>

        <div className="flex gap-6 mt-6 opacity-80">
          <a
            href="https://www.instagram.com/danilosmoura_/"
            aria-label="Instagram"
            className="transition-transform opacity-0 animate-fadeinupone duration-200 hover:scale-110 hover:opacity-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon size={24} weight="regular" />
          </a>
          <a
            href="https://www.linkedin.com/in/danilosantos-moura/"
            aria-label="LinkedIn"
            className="transition-transform opacity-0 animate-fadeinuponefive duration-200 hover:scale-110 hover:opacity-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogoIcon size={24} weight="regular" />
          </a>
          <a
            href="https://github.com/DaniDMoura"
            aria-label="GitHub"
            className="transition-transform opacity-0 duration-200 animate-fadeinuptwo hover:scale-110 hover:opacity-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogoIcon size={24} weight="regular" />
          </a>
        </div>
      </div>

      <Aurora
        colorStops={["#f0f0f0", "#f0f0f0", "#f0f0f0"]}
        blend={1.5}
        amplitude={0.2}
        speed={2}
      />
    </div>
  );
};

export default App;

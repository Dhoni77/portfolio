import { Main } from "./components/main";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 gradient-light dark:gradient-dark">
      <header className="z-[999] relative">
        <div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 opacity-100 translate-x-[-50%]"></div>
        <Navbar />
      </header>
      <Main />
    </div>
  );
}

export default App;

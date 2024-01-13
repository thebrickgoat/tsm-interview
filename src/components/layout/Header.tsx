import navigations from "@/constants/navigations";
import Image from "../Image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-950 border-b border-gray-900">
      <div className="shadow-red-500/25 from-red-500 to-red-500 focus:red-cyan-300 dark:focus:red-cyan-800"></div>
      <div className="shadow-xl shadow-blue-500/25 mt-8 mx-6 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        <p className="text-white">
          this is an example of an alert banner.
        </p>
      </div>
      <nav className="container flex justify-between py-6 flex-wrap gap-y-6 ">
        <div className="flex items-center gap-x-6">
          {" "}
          <div className="flex lg:flex-1">
            <Link href="/">
              <Image className="h-8 w-40" src="/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="flex gap-x-12">
            {navigations.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <button className="shadow-xl shadow-blue-500/25 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Login
            </span>
          </button>
          <button
            type="button"
            className="shadow-xl shadow-blue-500/25 text-white bg-gradient-to-r from-cyan-500 to-indigo-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Get Started For Free
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

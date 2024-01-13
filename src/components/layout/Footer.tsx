import { INFO } from "@/constants";
import navigations from "@/constants/navigations";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 my-12 md:flex md:items-center md:justify-between lg:mx-8 pt-8 mb-12 border-t">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigations.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-white">
            &copy; {new Date().getFullYear()} {INFO.companyName}, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import StarWarsLightSpeed from "@/components/StarWarsLightSpeed";
export default function Hero({ title, subtitle, btnText, btnTarget }: any) {
  
return (
    <div className="relative flex flex-col items-center justify-center min-h-[50vh] text-white bg-slate-950">
      <StarWarsLightSpeed />
      <div className="flex flex-col items-center justify-center w-full flex-1 p-12 text-center z-10 ">
        <h1 className="text-6xl font-bold">
          {title}
        </h1>

        <p className="my-6 text-2xl text-white">
          {subtitle}
        </p>
        {btnText && (
          <button 
          className="shadow-xl shadow-cyan-500/25 text-white bg-gradient-to-r from-cyan-500 to-indigo-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <a href={btnTarget}>
              {btnText}
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

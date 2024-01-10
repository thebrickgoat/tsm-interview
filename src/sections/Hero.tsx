import StarWarsLightSpeed from "@/components/StarWarsLightSpeed";
export default function Hero({ title, subtitle, btnText, btnTarget }: any) {
  
return (
    <div className="relative flex flex-col items-center justify-center min-h-[50vh] text-white bg-black">
      <StarWarsLightSpeed />
      <div className="flex flex-col items-center justify-center w-full flex-1 py-12 px-6 text-center z-10 bg-slate-500/25">
        <h1 className="text-6xl font-bold">
          {title}
        </h1>

        <p className="my-6 text-2xl text-white">
          {subtitle}
        </p>
        {btnText && (
          <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-900">
            <a href={btnTarget}>
              {btnText}
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

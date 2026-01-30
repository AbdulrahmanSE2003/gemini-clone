import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center min-h-8 w-full">
      <h3 className="font-medium leading-6 text-2xl  text-brand-dark-gray/85">
        Gemini
      </h3>
      <div  className={`flex-center gap-6`}>
        {/*  Upgrade button */}
        <div>
          <div className="flex-center px-6 py-3 gap-3 bg-white rounded-xl justify-between hover:bg-brand-gray transition-colors duration-300 cursor-pointer">
            <Image src={"/logo.png"} width={16} height={16} alt="Gemini Logo" />
            <span className="font-medium text-[0.8rem]">
              Upgrade to Google Ai Plus
            </span>
          </div>
        </div>

        <div className={`h-9 w-9 relative`}>
          <Image
            src={"/user.jpg"}
            alt={"user image"}
            fill
            priority
            className={`rounded-full `}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

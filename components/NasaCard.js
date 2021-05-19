export default function NasaCard(props){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
            <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
                <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">NASA`s picture of the day</p>
                <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">{props.title}</h2>
                <form className="relative">
                    {props.datePicker}
                </form>
            </div>
            <div className="col-start-1 row-start-2 px-4 sm:pb-16">
                <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
                    <div>{props.explanation}</div>
                </div>
                <hr className="w-16 border-gray-300 hidden sm:block"/>
            </div>
            <div className="col-start-1 row-start-3 space-y-3 px-4">
                <span>
                    <p className="flex items-center text-black text-sm font-medium">
                        &#169;&#160;
                        {props.copyright}
                    </p>
                </span>
            </div>
            <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
                <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
                <div className="relative col-span-3 row-span-2 md:col-span-2">
                    <img src={props.url} alt="" className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
                </div>
                </div>
            </div>
        </div>
    );
};
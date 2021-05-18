export default function NasaCard(props){
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
            <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
                <p class="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">NASA`s picture of the day</p>
                <h2 class="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">{props.title}</h2>
            </div>
            <div class="col-start-1 row-start-2 px-4 sm:pb-16">
                <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
                    <div>{props.explanation}</div>
                </div>
                <hr class="w-16 border-gray-300 hidden sm:block"/>
            </div>
            <div class="col-start-1 row-start-3 space-y-3 px-4">
                <p class="flex items-center text-black text-sm font-medium">
                    {props.copyright}
                </p>
            </div>
            <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
                <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
                <div class="relative col-span-3 row-span-2 md:col-span-2">
                    <img src={props.url} alt="" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
                </div>
                </div>
            </div>
        </div>
    );
};
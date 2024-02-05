

const Mainpage = () => {
  return (
    <div className='w-full min-h-screen bg-[#f8eadc] flex justify-center items-center font-poppins'>
        <div className="w-[90%] max-w-[500px] h-[600px] border">
            <div className=" bg-orange-600 p-4 flex justify-between items-center rounded-lg">
                <div>
                    <p className="text-white text-[0.80rem]">My balance</p>
                    <p className="text-white text-2xl font-semibold">$921.48</p>
                </div>
                <div className="flex">
                    <div className="w-8 h-8 border-2 border-white rounded-full z-[10] mr-[-14px]"></div>
                    <div className="w-8 h-8 border-2 border-black bg-black rounded-full"></div>
                </div>
            </div>
            <div className="p-4 bg-white mt-4 rounded-lg">
                <p className="text-2xl font-semibold">Spending - Last 7 days</p>
                <div className="grid grid-cols-7 gap-3 w-full h-[320px] border-b border-gray-400 pb-6">
                    <div className="flex flex-col justify-end items-center gap-2">
                        <div className="w-[80%] h-[20%] bg-orange-500 rounded-sm relative before:content-['$25.25'] before:bg-black before:text-white before:py-1 before:sm:px-2 before:px-1 before:rounded-sm before:absolute before:top-0 before:left-0 before:mt-[-40px] before:sm:ml-[-6px] before:ml-[-12px] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 hover:bg-orange-400 transition-all duration-300 cursor-pointer before:text-sm"></div>
                        <p className="text-gray-400 ">mon</p>
                    </div>
                    <div className=" flex flex-col justify-end items-center gap-2">
                    <div className="w-[80%] h-[40%] bg-orange-500 rounded-sm relative before:content-['$33.42'] before:bg-black before:text-white before:py-1 before:sm:px-2 before:px-1 before:rounded-sm before:absolute before:top-0 before:left-0 before:mt-[-40px] before:sm:ml-[-6px] before:ml-[-12px] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 hover:bg-orange-400 transition-all duration-300 cursor-pointer before:text-sm"></div>
                        <p className="text-gray-400">tue</p>
                    </div>
                    <div className="flex flex-col justify-end items-center gap-2">
                    <div className="w-[80%] h-[70%] bg-blue-400 rounded-sm relative before:content-['$52.36'] before:bg-black before:text-white before:py-1 before:sm:px-2 before:px-1 before:rounded-sm before:absolute before:top-0 before:left-0 before:mt-[-40px] before:sm:ml-[-6px] before:ml-[-12px] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 hover:bg-blue-300 transition-all duration-300 cursor-pointer before:text-sm"></div>
                        <p className="text-gray-400">wed</p>
                    </div>
                    <div className=" flex flex-col justify-end items-center gap-2">
                    <div className="w-[80%] h-[40%] bg-orange-500 rounded-sm relative before:content-['$31.07'] before:bg-black before:text-white before:py-1 before:sm:px-2 before:px-1 before:rounded-sm before:absolute before:top-0 before:left-0 before:mt-[-40px] before:sm:ml-[-6px] before:ml-[-12px] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 hover:bg-orange-400 transition-all duration-300 cursor-pointer before:text-sm"></div>
                        <p className="text-gray-400">thu</p>
                    </div>
                    <div className=" flex flex-col justify-end items-center gap-2">
                    <div className="w-[80%] h-[25%] bg-orange-500 rounded-sm relative before:content-['$27.83'] before:bg-black before:text-white before:py-1 before:sm:px-2 before:px-1 before:rounded-sm before:absolute before:top-0 before:left-0 before:mt-[-40px] before:sm:ml-[-6px] before:ml-[-12px] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 hover:bg-orange-400 transition-all duration-300 cursor-pointer before:text-sm"></div>
                        <p className="text-gray-400">fri</p>
                    </div>
                    <div className=" flex flex-col justify-end items-center gap-2">
                    <div className="w-[80%] h-[50%] bg-orange-500 rounded-sm relative before:content-['$41.92'] before:bg-black before:text-white before:py-1 before:sm:px-2 before:px-1 before:rounded-sm before:absolute before:top-0 before:left-0 before:mt-[-40px] before:sm:ml-[-6px] before:ml-[-12px] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 hover:bg-orange-400 transition-all duration-300 cursor-pointer before:text-sm"></div>
                        <p className="text-gray-400">sat</p>
                    </div>
                    <div className=" flex flex-col justify-end items-center gap-2">
                    <div className="w-[80%] h-[30%] bg-orange-500 rounded-sm relative before:content-['$29.37'] before:bg-black before:text-white before:py-1 before:sm:px-2 before:px-1 before:rounded-sm before:absolute before:top-0 before:left-0 before:mt-[-40px] before:sm:ml-[-6px] before:ml-[-12px] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 hover:bg-orange-400 transition-all duration-300 cursor-pointer before:text-sm"></div>
                        <p className="text-gray-400">sun</p>
                    </div>
                </div>
                <div className="flex justify-between items-center py-6">
                    <div>
                        <p className="text-sm text-gray-400">Total this month</p>
                        <p className="text-4xl font-semibold">$478.33</p>
                    </div>
                    <div>
                           <p className="text-sm font-semibold text-right">
                            +2.4%
                            </p>
                            <p className="text-sm text-gray-400">from last month</p>
                    </div>
                </div>
            </div>
            
            </div>
    </div>
  )
}

export default Mainpage
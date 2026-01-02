import {Search, Upload, Bot} from "lucide-react";



const Home = () => {
    return(
        <>
            <div className="flex flex-col gap-[7rem] items-center justify-center h-screen">
                <div className="flex flex-col gap-2 items-center text-center">
                    <h1 className="text-4xl font-bold">Ask your concerning questions for <span className="text-[#13ec49]">Insight</span></h1>
                    <p className="text-gray-500 text-xl font-medium">Get instant answer powered by AI</p>
                </div>

                <div className="flex flex-col gap-[3rem] items-center">

                    <div>
                        <h2 className="text-xl font-semibold text-gray-500">Your Question:</h2>
                        <div className="flex items-center justify-between  bg-white shadow-xl rounded-xl w-[43rem] px-4 py-3">
                            <div className="flex items-center gap-2 flex-1">
                                <Search className="text-gray-500 size-[1.6rem]" />
                                <input
                                    type="text"
                                    placeholder="Ask your question here"
                                    className="flex-1 outline-none text-xl"
                                />
                            </div>

                            <button className="flex items-center gap-2 bg-[#13ec49] px-5 py-2 rounded-xl">
                                <span className="text-lg font-semibold">Ask</span>
                                <Upload className="size-[1.2rem]"/>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-500 mb-2">
                            Answer:
                        </h2>

                        <div className="flex gap-4 items-start border-0 rounded-xl w-[43rem] p-6 bg-white shadow-xl min-h-[10rem]">

                            <Bot className="text-green-600 w-10 h-10 bg-green-200 p-2 rounded-full shrink-0" />

                            <div className="flex flex-col">
                                <p className="text-gray-800 leading-relaxed">
                                    Organizations currently rely on fragmented, complex, or manual tools for
                                    these critical decisions. Our platform combines realistic simulation,
                                    AI reasoning, and intuitive visualization to provide faster, safer, and
                                    more cost-effective planning solutions.
                                </p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home
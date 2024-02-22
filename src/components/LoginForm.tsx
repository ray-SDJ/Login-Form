import "../app/globals.css"


export default function LoginForm() {
    return (
        <div className="py-60">
            <div className="flex items-center justify-center">
                <div className="lg:w-4/12 md:6/12 w-10/12 m-center py-12 my-10 shadow-md rounded-md" id="login" >
                    <div className="py-3 px-8 rounded-md shadow-2xl">
                        <h1 className="font-extrabold text-5xl mt-3 text-left text-[#8675d6]" id="title">hurd</h1>
                        <form action="" className="mt-1">
                    <div className="my-3 text-sm">
                                <input type="text"  id="username" className="rounded-md px-4 py-3 mt-1 focus:outline-none bg-black text-gray-50 w-full" placeholder="Email Address" />
                            </div>
                            <div className="my-3 text-sm">
                                    <input
                                    type="password"
                                    id="password"
                                    className="rounded-md px-4 py-3 mt-1 focus:outline-none bg-black text-gray-50 w-full"
                                    placeholder="Password"
                                    />
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 absolute right-3 top-3" // Adjust position as needed
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                    </svg>
                            </div>
                                <div className="flex text-left mt-3 text-xs text-gray-600">
                                <a href="#">Forget Password?</a>
                                </div>
                                <div className="text-blue-600 mt-2"><a>Dont have an account? Sign up!</a></div>
                            </div>

                            <button className="block text-center p-3 duration-300 rounded-md w-full text-white" id="login-btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
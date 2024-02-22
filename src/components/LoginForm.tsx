"use client";
import "../app/globals.css"
import PasswordInput from "./PasswordInput"


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
                                <PasswordInput />
                            </div>
                                <div className="flex text-left mt-3 text-xs text-gray-600">
                                    <a href="#">Forget Password?</a>
                                </div>
                                <div className="text-blue-600 mt-2"><a>Dont have an account? Sign up!</a></div>
                            

                            <button className="block text-center p-3 duration-300 rounded-md w-full text-white" id="login-btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
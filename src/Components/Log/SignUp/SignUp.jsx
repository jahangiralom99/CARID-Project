import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";


const SignUp = () => {
    const [visible , setVisible] = useState();
    console.log(visible);
    const open = e =>{
        setVisible(e)
        console.log('hello world', e);
    }
    return (
        <div className="container px-4 mx-auto my-10">
            <div className="max-w-lg mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold">Sign up</h2>
                </div>
                <form action="">
                    <div className="mb-6">
                        <label className="block mb-2 font-extrabold" htmlFor="">Email</label>
                        <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-[#1F2937] bg-white shadow border-2 border-[#1F2937] rounded" type="email" placeholder="email" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 font-extrabold" htmlFor="">Password</label>
                        <input className="inline-block w-full relative  p-4 leading-6 text-lg font-extrabold placeholder-[#1F2937] bg-white shadow border-2 border-[#1F2937]rounded" type='password' placeholder="**********" />
                        <div>
                        {
                            visible ?  <IoEye onClick={() => open(false)} /> : <IoMdEyeOff onClick={() => open(true)} />
                        }
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-6 items-center text-center justify-between">
                        <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                            <label htmlFor="">
                                <span className="ml-1 font-extrabold text-xs">By creating an account, you are agreeing to our privacy policy and terms</span>
                            </label>
                        </div>
                        <div className="w-full lg:w-auto px-4"></div>
                    </div>
                    <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#1F2937] hover:bg-[#1F2937] border-3 border-[#1F2937] shadow rounded transition duration-200">Sign in</button>
                    <p className="text-center font-extrabold">Don&rsquo;t have an account? <Link to='/login' className="text-red-500 hover:underline"
                    >Sign in</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
"use client";

import { useState } from "react";
import login_bg from "@/assets/images/login-bg.jpg";
import { User, Lock, EyeOff, Eye, CheckCircle2 } from "lucide-react";
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Simple validation
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-4" style={{backgroundImage: `url(${login_bg.src})`}}>
            <div className="bg-white/50 backdrop-blur-xl border border-white/70 rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-2xl relative overflow-hidden">
                {/* Subtle top right gradient blob */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-100 rounded-full opacity-60 pointer-events-none blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-[#0f172a] text-center mb-8 leading-tight">
                        Welcome back<br/>to Haven.
                    </h1>
                    
                    {/* Google Button */}
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white/50 hover:bg-white/80 rounded-full py-3 px-4 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                        </svg>
                        <span className="text-sm font-bold text-[#0f172a] cursor-pointer">Continue with Google</span>
                    </button>

                    {/* Divider */}
                    <div className="w-full flex items-center my-6">
                        <div className="flex-1 border-gray-300 border-t"></div>
                        <span className="px-4 text-sm font-medium text-gray-500">Or with email</span>
                        <div className="flex-1 border-gray-300 border-t"></div>
                    </div>

                    {/* Form */}
                    <form className="w-full flex flex-col gap-5">
                        {/* Email Input */}
                        <div className={`flex items-center border rounded-full px-4 py-3 bg-white/60 backdrop-blur-sm transition-all focus-within:bg-white/80 ${isEmailValid ? 'border-green-500' : 'border-gray-300 focus-within:border-[#286f87]'}`}>
                            <User className={`w-5 h-5 mr-3 shrink-0 ${isEmailValid ? 'text-green-500' : 'text-gray-500'}`} />
                            <input 
                                type="email" 
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-transparent outline-none text-sm text-[#0f172a] placeholder-gray-500 font-medium"
                            />
                            {isEmailValid && <CheckCircle2 className="w-5 h-5 fill-green-500 text-white ml-2 shrink-0" />}
                        </div>

                        {/* Password Input */}
                        <div className={`flex items-center border rounded-full px-4 py-3 bg-white/60 backdrop-blur-sm transition-all focus-within:bg-white/80 ${isPasswordValid ? 'border-green-500' : 'border-gray-300 focus-within:border-[#286f87]'}`}>
                            <Lock className={`w-5 h-5 mr-3 shrink-0 ${isPasswordValid ? 'text-green-500' : 'text-gray-500'}`} />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex-1 bg-transparent outline-none text-sm text-[#0f172a] placeholder-gray-500 font-medium"
                            />
                            {isPasswordValid && <CheckCircle2 className="w-5 h-5 fill-green-500 text-white mx-2 shrink-0" />}
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                {showPassword ? <Eye className="w-5 h-5 ml-1 shrink-0" /> : <EyeOff className="w-5 h-5 ml-1 shrink-0" />}
                            </button>
                        </div>

                        {/* Remember me & Forgot Password */}
                        <div className="flex items-center justify-between text-sm mt-1 px-1">
                            <label className="flex items-center text-gray-800 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-400 bg-white/50 mr-2 accent-[#286f87]" />
                                <span className="font-semibold text-[#0f172a]">Remember me</span>
                            </label>
                            <Link href="#" className="font-bold text-[#0f172a] hover:text-[#286f87] transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        {/* Sign In Button */}
                        <button type="submit" className="mt-4 w-full bg-[#286f87] hover:bg-[#1f576b] text-white font-bold rounded-full py-3.5 transition-colors shadow-lg text-sm cursor-pointer">
                            SIGN IN
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-sm text-[#0f172a] font-bold">
                        New to Haven? <Link href="#" className="text-[#286f87] hover:underline cursor-pointer">Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
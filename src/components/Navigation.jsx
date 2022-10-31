import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import logo from "../assets/images/logo.png";

const Navigation = () => {
	return (
		<div className="sticky top-0 left-0 z-50 w-full py-2 bg-white/10 ">
			<div className="flex items-center justify-between max-w-[90%] mx-auto font-roboto font-medium text-sm">
				<div className="flex gap-x-10">
					<div>
						<img src={logo} className="h-7" alt="" />
					</div>
					<nav className="flex items-center justify-center gap-x-5">
						<a href="/" className="flex items-center justify-center gap-x-1">
							Why Paystack <AiFillCaretDown className="text-xs" />
						</a>
						<a href="/">Customers</a>
						<a href="/">Pricing</a>
						<a href="/" className="flex items-center justify-center gap-x-1">
							Learn <AiFillCaretDown className="text-xs" />
						</a>
					</nav>
				</div>
				<div className="flex items-center justify-center gap-x-10">
					<nav className="flex items-center justify-center gap-x-5">
						<a href="/" className="flex items-center justify-center gap-x-1">
							Developers <AiFillCaretDown className="text-xs" />
						</a>
						<a href="/" className="flex items-center justify-center gap-x-1">
							Support <AiFillCaretDown className="text-xs" />
						</a>
						<a href="/" className="flex items-center justify-center">
							Login
						</a>
					</nav>
					<button className="bg-green-500 text-white px-3 py-1.5 rounded-lg text-md">
						Create free account
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navigation;

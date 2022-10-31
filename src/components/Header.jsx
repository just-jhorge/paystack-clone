import React from "react";
import Navigation from "./Navigation";
import globe from "../assets/images/globe-2.png";
import dominos from "../assets/images/dominos.svg";
import mtn from "../assets/images/mtn.svg";
import bolt from "../assets/images/bolt.svg";
import mansard from "../assets/images/mansard.svg";
import { FaPlay } from "react-icons/fa";

const Header = () => {
	return (
		<div className="font-roboto relative bg-[#f1fef4] h-[75vh] w-full">
			<Navigation />
			<div className="absolute top-0 left-0 right-0 h-full w-[70vw] mx-auto flex items-center justify-between gap-x-7 pt-28">
				<div className="w-[40%]">
					<div className="mb-5 -translate-y-20">
						<h2 className="font-bold text-[2.5rem] mb-5 leading-tight">
							Modern online and offline <br />
							payments for Africa
						</h2>
						<p className="font-semibold mb-7 leading-loose">
							Paystack helps businesses in Africa get paid by anyone, <br />{" "}
							anywhere in the world
						</p>
						<div className="flex items-center justify-start gap-x-3">
							<button className="bg-green-500 text-white py-2.5 px-5 rounded-md hover:bg-green-600 hover:-translate-y-0.5 transition-all">
								Create a free account
							</button>
							<button className="text-green-500">or Contact Sales</button>
						</div>
					</div>
					<div className="absolute mt-20 flex items-center justify-between w-full">
						<div>
							<h4 className="mb-3 text-gray-700 text-sm">
								Trusted by over 70,000 businesses
							</h4>
							<div className="flex items-center justify-start gap-x-4">
								<img src={dominos} className="h-7" alt="" />
								<img src={mtn} className="h-7" alt="" />
								<img src={bolt} className="h-7" alt="" />
								<img src={mansard} className="h-7" alt="" />
							</div>
						</div>
						<div className="flex items-center justify-center gap-x-2">
							<div className="text-end">
								<p>Watch MTN Chief Transformation Officer, Olubayo</p>
								<p>Adekanmbi, discuss working with Paystack</p>
							</div>
							<div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center shadow-md hover:scale-110 cursor-pointer transition-all">
								<FaPlay className="text-white text-sm" />
							</div>
						</div>
					</div>
				</div>
				<div className="w-[60%] h-full rounded-full overflow-hidden">
					<img src={globe} className="object-cover" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Header;

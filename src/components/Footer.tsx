import logo from "/gdsc.svg";
import { EnvelopeClosedIcon, InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { IoLocationOutline } from "react-icons/io5";

export function Footer() {
	return (
		<div className="footer mt-4 bg-slate-900">
			<footer
				id="footer"
				className="relative flex w-[100vw] items-center justify-between py-10 max-md:flex-col md:h-80 overflow-hidden"
			>
				<div className="flex w-[30vw] md:translate-x-16 flex-col items-center justify-center max-md:w-fit">
					<img src={logo} alt="logo" className="h-10" />
					<p className="pt-4 text-2xl text-slate-100 text-center max-md:text-xl">
						Google Developer Student Clubs
					</p>
					<span className="text-xl text-slate-300 max-md:text-lg">RCOEM</span>
				</div>
				<div className="flex w-[50vw] flex-col items-start justify-center gap-4 max-md:w-[95vw] max-md:py-8">
					<div className="flex items-center">
						<IoLocationOutline className="mx-12 scale-[2] text-slate-100" />
						<div className="text-md max-md:text-sm w-2/3 text-slate-100">
							Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan, Katol
							Road, Nagpur - 440013
						</div>
					</div>
					<div className="items-center flex">
						<EnvelopeClosedIcon className="ml-12 mr-6 scale-[1.8] text-slate-100" />
						<a
							href="mailto:dsc.rknec@gmail.com"
							className="underline-offset-2 underline text-md max-md:text-sm mx-6 text-left text-slate-100"
						>
							dsc.rknec@gmail.com
						</a>
					</div>
					<div className="flex items-center gap-12 py-8">
						<div className="text-md ml-8 text-slate-100 max-md:ml-12">Follow Us: </div>
						<div className="flex gap-8">
							<a href="https://www.instagram.com/gdsc_rcoem/" target="_blank">
								<InstagramLogoIcon className="scale-150 cursor-pointer text-slate-100 transition-all hover:scale-[1.8]" />
							</a>
							<a href="https://mobile.twitter.com/gdsc_rcoem">
								<TwitterLogoIcon className="scale-150 cursor-pointer text-slate-100 transition-all hover:scale-[1.8]" />
							</a>
							<a href="https://in.linkedin.com/company/gdsc-rcoem">
								<LinkedInLogoIcon className="scale-150 cursor-pointer text-slate-100 transition-all hover:scale-[1.8]" />
							</a>
						</div>
					</div>
				</div>
				<img src="/images/shapes.svg" alt="shapes" className="absolute -bottom-24 max-md:-bottom-10 max-md:h-36 object-cover" />
			</footer>
		</div>
	);
}

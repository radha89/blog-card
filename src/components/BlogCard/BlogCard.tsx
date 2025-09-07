export function BlogCard() {
	return (
		<>
			<div className="w-[340px] mt-[120px] rounded-lg bg-white shadow-[3px_3px_1px_rgba(0,0,0,0.03)]">
				<div className="w-full h-[288px] bg-[url('../spacejoy-YqFz7UMm8qE-unsplash.jpg')] bg-cover rounded-t-lg" />
				<div className="w-[308px] flex flex-col mx-auto gap-3">
					<div className="flex items-center justify-center w-[67px] h-[24px] bg-green-50 text-green-700 border border-green-200 rounded-[20px] text-sm leading-5 mt-7">Interior</div>
					<h1 className="w-[308px] h-[28px] text-lg leading-7 m-0 font-bold">
						Top 5 Living Room Inspirations
					</h1>
					<p className="w-[308px] h-12 text-base leading-6 m-0">
						Curated vibrant colors for your living, make it pop & calm at the
						same time.
					</p>
					<a
						className="flex gap-2 font-medium text-base leading-6 mt-2 mb-6 text-indigo-500 hover:text-indigo-800" 
						href="https://react.dev"
						target="_blank"
					>
						Read more
						<img src="/arrowIcon.svg" alt="arrow right icon" />
					</a>
				</div>
			</div>
		</>
	);
}

"use client";

type HotelMap = {
    "hotelId": string,
    "name": string,
    "brand": string,
    "description": string,
    "starRating": number,
    "status": string,
    "categories": string[],
    "tags": string[],
    "city": string,
    "state": string,
    "thumbnailUrl": string,
    "averageRating": number,
    "totalReviews": number,
    "startingPrice": number,
    "amenityCount": number,
    "roomTypeCount": number
};

const { results }: { results: HotelMap[] } = await fetch("https://hotelapi.pythonanywhere.com/api/hotels/?limit=5").then((res) => res.json());

export function FeaturedHotels() {
    return (
        <section>
            <div className="container mx-auto flex flex-col gap-4">
                <h2>Featured Hotels</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {/* Hotel Cards */}
                    {results.map((hotel) => (
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="relative h-48 w-full">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={hotel.thumbnailUrl}
                                    alt="Mumbai Business Hub Hotel"
                                />
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md uppercase">
                                        Haven Choice
                                    </span>
                                    <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-2 py-1 rounded shadow-sm">
                                        {hotel.averageRating} ★
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                                            {hotel.brand}
                                        </p>
                                        <h2 className="text-xl font-bold text-slate-900 leading-tight">
                                            {hotel.name}
                                        </h2>
                                        <p className="text-sm text-slate-500 flex items-center mt-1">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {hotel.city}, {hotel.state}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-full border border-slate-200">
                                        {hotel.tags[0]}
                                    </span>
                                    <span className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-full border border-slate-200">
                                        {hotel.tags[1]}
                                    </span>
                                    <span className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-full border border-slate-200">
                                        {hotel.tags[2]}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm text-slate-600 line-clamp-2">
                                    {hotel.description}
                                </p>

                                <hr className="my-4 border-slate-100" />

                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-slate-400">Starting from</p>
                                        <p className="text-2xl font-black text-slate-900">
                                            ₹{hotel.startingPrice}<span className="text-sm font-medium text-slate-500">/night</span>
                                        </p>
                                    </div>
                                    <button className="bg-slate-900 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors duration-200 cursor-pointer">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="group relative max-w-md mx-auto h-[500px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-xl">

                        <div className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                                alt="Haven Context"
                                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                        </div>

                        <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">

                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>

                            <h3 className="mb-3 text-2xl font-light tracking-widest text-white uppercase">
                                Experience <span className="font-bold">More</span>
                            </h3>

                            <p className="mb-8 text-sm leading-relaxed text-slate-300">
                                Beyond this selection lies a curated world of Haven properties designed for the modern traveler.
                            </p>

                            <a href="/explore" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-all hover:bg-blue-500 hover:text-white group-hover:px-8">
                                Explore All Properties
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>

                        <div className="absolute bottom-0 w-full bg-white/5 py-4 backdrop-blur-sm text-center">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                The Haven Collection • 2026
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
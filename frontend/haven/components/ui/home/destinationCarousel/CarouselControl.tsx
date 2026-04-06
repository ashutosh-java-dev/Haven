"use client";

import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export const CarouselControls = (): React.ReactNode => (
    <div className="inline-flex gap-4">
        <button
            onClick={() => document.getElementById("carousel")?.scrollBy({ left: -300, behavior: "smooth" })}
            className="rounded-sm border border-gray-200 p-3 size-10 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none flex justify-center items-center cursor-pointer"
            aria-label="Previous cities"
        >
            <LuChevronLeft size={20} />
        </button>
        <button
            onClick={() => document.getElementById("carousel")?.scrollBy({ left: 300, behavior: "smooth" })}
            className="rounded-sm border border-gray-200 p-3 size-10 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none flex justify-center items-center cursor-pointer"
            aria-label="Next cities"
        >
            <LuChevronRight size={20} />
        </button>
    </div>
);

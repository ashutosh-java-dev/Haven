import { NextRequest, NextResponse } from "next/server";

const PEXELS_API = "https://api.pexels.com/v1/search";
const UNSPLASH_API = "https://api.unsplash.com/photos/random";
const PIXABAY_API = "https://pixabay.com/api/";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "nature";

  try {
    if (process.env.PEXELS_API_KEY) {
      const res = await fetch(`${PEXELS_API}?query=${query}&per_page=1`, {
        headers: {
          Authorization: process.env.PEXELS_API_KEY,
        },
        next: { revalidate: 60 }, // cache for 1 min
      });

      const data = await res.json();

      if (data.photos?.length > 0) {
        return NextResponse.json({
          source: "pexels",
          image: data.photos[0].src.large,
          photographer: data.photos[0].photographer,
        });
      }
    }

    if (process.env.UNSPLASH_ACCESS_KEY) {
      const res = await fetch(
        `${UNSPLASH_API}?query=${query}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
        { next: { revalidate: 60 } }
      );

      const data = await res.json();

      if (data?.urls?.regular) {
        return NextResponse.json({
          source: "unsplash",
          image: data.urls.regular,
          photographer: data.user?.name,
        });
      }
    }

    if (process.env.PIXABAY_API_KEY) {
      const res = await fetch(
        `${PIXABAY_API}?key=${process.env.PIXABAY_API_KEY}&q=${query}&image_type=photo&per_page=3`,
        { next: { revalidate: 60 } }
      );

      const data = await res.json();

      if (data.hits?.length > 0) {
        return NextResponse.json({
          source: "pixabay",
          image: data.hits[0].largeImageURL,
          photographer: data.hits[0].user,
        });
      }
    }

    return NextResponse.json(
      { error: "No image found" },
      { status: 404 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong", details: error },
      { status: 500 }
    );
  }
}
import {getHotels} from "@/lib";
import {Hotel} from "@/components/interface/hotel";
import Header from "@/components/feature/hotel/Header";

export default async function HotelDetailsPage({params}: { params: Promise<{ hotelId: string }> }) {
    const {hotelId}: { hotelId: string } = await params;
    const hotel: Hotel = await getHotels(`${hotelId}`, "");

    return (
        <>
            <Header coverImageUrl={hotel.media.coverImageUrl} name={hotel.name} starRating={hotel.starRating} brand={hotel.brand}
                    city={hotel.location.city} state={hotel.location.state} averageRating={hotel.ratings.averageRating} totalReviews={hotel.ratings.totalReviews} />
        </>
    )
}
export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city } = await params;
    return (
        <div className="mt-36 flex flex-col justify-center items-center">
            <div className="container mx-auto">
                <h1>{city} page</h1>
            </div>
        </div>
    );
}
export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city } = await params;
    return (
        <div className="mt-36">
            <h1>{city} page</h1>
        </div>
    );
}
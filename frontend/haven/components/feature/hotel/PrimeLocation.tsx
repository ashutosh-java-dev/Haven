import { Landmark } from "@/components/interface/hotel";

interface PrimeLocationProps {
  address: string;
  nearbyLandmarks: Landmark[];
  latitude: number;
  longitude: number;
}

export default function PrimeLocation({ address, nearbyLandmarks, latitude, longitude }: PrimeLocationProps) {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.02}%2C${latitude - 0.015}%2C${longitude + 0.02}%2C${latitude + 0.015}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Prime Location
        </h3>

        {/* Landmarks */}
        <div className="space-y-3 mb-5">
          <div className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-red-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
            <span className="text-sm text-gray-700">{address}</span>
          </div>
          {nearbyLandmarks.slice(0, 4).map((landmark, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-teal-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              <span className="text-sm text-gray-700">{landmark.name}</span>
              <span className="text-xs text-gray-400 ml-auto">{landmark.distanceKm} km</span>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="h-48 bg-gray-100">
        <iframe
          src={mapUrl}
          className="w-full h-full border-0"
          title="Hotel Location"
          loading="lazy"
        />
      </div>
    </div>
  );
}

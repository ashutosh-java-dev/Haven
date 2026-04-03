import { Policies } from "@/components/interface/hotel";

interface HotelPoliciesProps {
  policies: Policies;
}

export default function HotelPolicies({ policies }: HotelPoliciesProps) {
  if (!policies) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Hotel Policies</h3>
      
      <div className="flex flex-col gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center size-8 rounded-full bg-gray-50 text-gray-500 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </span>
          <span className="font-medium text-gray-800">
            {policies.petsAllowed ? "✅ Pets Allowed" : "🚫 No Pets Allowed"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center size-8 rounded-full bg-gray-50 text-gray-500 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
          </span>
          <span>
            Check-In: <span className="font-semibold text-gray-800">{policies.checkInTime}</span> | 
            Check-Out: <span className="font-semibold text-gray-800">{policies.checkOutTime}</span>
          </span>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex items-center justify-center size-8 rounded-full bg-gray-50 text-gray-500 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </span>
          <span className="mt-1">{policies.extraBedPolicy}</span>
        </div>
      </div>
    </div>
  );
}

const BetterMapsAPI = {
    // Logic for "Heat Island" detection
    getTempAtLocation(lat, lng) {
        // Center of NIT Market area (Hotspot)
        const marketLat = 28.3980, marketLng = 77.3050; 
        const dist = Math.sqrt(Math.pow(lat - marketLat, 2) + Math.pow(lng - marketLng, 2));
        
        if (dist < 0.012) return 42; // Red
        if (dist < 0.025) return 36; // Orange
        return 28; // Green
    }
};
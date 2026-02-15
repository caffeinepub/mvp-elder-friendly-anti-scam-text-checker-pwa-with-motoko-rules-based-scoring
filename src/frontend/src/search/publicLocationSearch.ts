/**
 * Public Location Search Module (Phase 1)
 * 
 * Isolated frontend-only module for detecting public-location keywords
 * and querying OpenStreetMap Nominatim for public entities.
 * 
 * No backend changes, no scoring engine modifications.
 */

import { normalizeText } from '@/utils/antifraudTextNormalize';

// Public location keywords (accent/case-insensitive)
const PUBLIC_LOCATION_KEYWORDS = [
  'hospital',
  'police',
  'fire station',
  'bombeiros',
  'polícia',
  'emergência',
  'government office',
  'emergency',
];

// OSM Nominatim categories to query
const OSM_CATEGORIES = [
  'hospital',
  'police',
  'fire_station',
  'government',
  'emergency',
];

export interface PublicLocationEntity {
  name: string;
  category: string;
  city: string;
  region: string;
  phone?: string;
  lat: string;
  lon: string;
  displayName: string;
  riskScore: number;
  riskLevel: 'Low';
}

export interface PublicLocationSearchResult {
  isPublicLocationQuery: boolean;
  entities: PublicLocationEntity[];
  error?: string;
}

/**
 * Detect if input contains public-location keywords (accent/case-insensitive)
 */
export function isPublicLocationQuery(input: string): boolean {
  const normalized = normalizeText(input);
  return PUBLIC_LOCATION_KEYWORDS.some(keyword => 
    normalized.includes(normalizeText(keyword))
  );
}

/**
 * Query OpenStreetMap Nominatim for public entities
 */
export async function searchPublicLocations(query: string): Promise<PublicLocationSearchResult> {
  // Check if this is a public location query
  if (!isPublicLocationQuery(query)) {
    return {
      isPublicLocationQuery: false,
      entities: [],
    };
  }

  try {
    const entities: PublicLocationEntity[] = [];

    // Query each OSM category
    for (const category of OSM_CATEGORIES) {
      const url = new URL('https://nominatim.openstreetmap.org/search');
      url.searchParams.set('format', 'jsonv2');
      url.searchParams.set('q', `${category}`);
      url.searchParams.set('limit', '10');
      url.searchParams.set('addressdetails', '1');

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'User-Agent': 'AntiFraud-PublicLocationSearch/1.0',
        },
      });

      if (!response.ok) {
        console.warn(`Nominatim query failed for category ${category}:`, response.status);
        continue;
      }

      const results = await response.json();

      // Parse and normalize results
      for (const result of results) {
        const entity: PublicLocationEntity = {
          name: result.name || result.display_name.split(',')[0] || 'Unknown',
          category: mapOSMCategory(result.type || category),
          city: result.address?.city || result.address?.town || result.address?.village || 'Unknown',
          region: result.address?.state || result.address?.region || result.address?.country || 'Unknown',
          phone: result.extratags?.phone || result.address?.phone || undefined,
          lat: result.lat,
          lon: result.lon,
          displayName: result.display_name,
          riskScore: 0,
          riskLevel: 'Low',
        };

        entities.push(entity);
      }

      // Rate limiting: 1 request per second per Nominatim usage policy
      await new Promise(resolve => setTimeout(resolve, 1100));
    }

    return {
      isPublicLocationQuery: true,
      entities,
    };
  } catch (error: any) {
    console.error('Public location search error:', error);
    return {
      isPublicLocationQuery: true,
      entities: [],
      error: error.message || 'Failed to search public locations',
    };
  }
}

/**
 * Map OSM type/category to user-friendly category name
 */
function mapOSMCategory(osmType: string): string {
  const categoryMap: Record<string, string> = {
    hospital: 'Hospital',
    clinic: 'Hospital',
    doctors: 'Hospital',
    police: 'Police',
    fire_station: 'Fire Station',
    government: 'Government Office',
    townhall: 'Government Office',
    public_building: 'Government Office',
    emergency: 'Emergency Service',
    ambulance_station: 'Emergency Service',
  };

  return categoryMap[osmType] || 'Public Service';
}

/**
 * Public Location Results Component
 * 
 * Displays Nominatim-sourced public entities with forced LOW risk (0%)
 * Reuses existing Card/Badge/Alert styling for consistency
 */

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MapPin, Phone, Building2, AlertCircle } from 'lucide-react';
import type { PublicLocationEntity } from '@/search/publicLocationSearch';

interface PublicLocationResultsProps {
  entities: PublicLocationEntity[];
  error?: string;
}

export function PublicLocationResults({ entities, error }: PublicLocationResultsProps) {
  // Error state
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  // Empty state
  if (entities.length === 0) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          No public locations found. Try different keywords like "hospital", "police", or "fire station".
        </AlertDescription>
      </Alert>
    );
  }

  // Results list
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Public Location Results
          </CardTitle>
          <CardDescription>
            {entities.length} public {entities.length === 1 ? 'entity' : 'entities'} found
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {entities.map((entity, index) => (
            <div
              key={`${entity.lat}-${entity.lon}-${index}`}
              className="border border-border rounded-lg p-4 space-y-3"
            >
              {/* Entity Name */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{entity.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {entity.displayName}
                  </p>
                </div>
                
                {/* Risk Badge - Always LOW (0%) */}
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  LOW (0%)
                </Badge>
              </div>

              {/* Category */}
              <div className="flex items-center gap-2 text-sm">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Category:</span>
                <span>{entity.category}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Location:</span>
                <span>{entity.city}, {entity.region}</span>
              </div>

              {/* Phone (if available) */}
              {entity.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Phone:</span>
                  <span>{entity.phone}</span>
                </div>
              )}

              {/* Risk Info */}
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Risk Score:</span> 0 (LOW) - Public/official entity
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Source Attribution */}
      <Alert>
        <AlertDescription className="text-xs">
          Data sourced from OpenStreetMap Nominatim. All public entities are automatically assigned LOW risk (0%).
        </AlertDescription>
      </Alert>
    </div>
  );
}

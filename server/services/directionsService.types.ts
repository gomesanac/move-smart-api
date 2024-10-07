type Status =
  | 'OK'
  | 'ZERO_RESULTS'
  | 'NOT_FOUND'
  | 'MAX_WAYPOINTS_EXCEEDED'
  | 'MAX_ROUTE_LENGTH_EXCEEDED'
  | 'INVALID_REQUEST'
  | 'OVER_DAILY_LIMIT'
  | 'OVER_QUERY_LIMIT'
  | 'REQUEST_DENIED'
  | 'UNKNOWN_ERROR';
type TravelMode = 'DRIVING' | 'WALKING'

export interface DirectionsResponse {
  geocoded_waypoints: GeocodedWaypoint[];
  routes: Route[];
  status: Status;
}

interface GeocodedWaypoint {
  geocoder_status: string;
  place_id: string;
  types: string[];
}

interface Route {
  bounds: Bounds;
  copyrights: string;
  legs: Leg[];
  overview_polyline: Polyline;
  summary: string;
  warnings: string[];
  waypoint_order: number[];
}

interface Bounds {
  northeast: LatLng;
  southwest: LatLng;
}

interface LatLng {
  lat: number;
  lng: number;
}

interface Leg {
  distance: TextValue;
  duration: TextValue;
  end_address: string;
  end_location: LatLng;
  start_address: string;
  start_location: LatLng;
  steps: Step[];
}

interface TextValue {
  text: string;
  value: number; // Value in meters for distance, seconds for duration
}

interface Step {
  distance: TextValue;
  duration: TextValue;
  end_location: LatLng;
  html_instructions: string;
  polyline: Polyline;
  start_location: LatLng;
  travel_mode: TravelMode; // Ex: "DRIVING", "WALKING", etc.
}

interface Polyline {
  points: string; // Encoded polyline
}

export function validateTrip(data) {

  if (!data) return false;

  if (!data.tripTitle) return false;

  if (!data.destination) return false;

  if (!data.destinationImage) return false;

  if (!data.budget) return false;

  if (!data.weather) return false;

  if (!data.bestTimeToVisit) return false;

  if (!data.tripSummary) return false;

  if (!Array.isArray(data.travelTips)) return false;

  if (!data.estimatedCost) return false;

  if (!Array.isArray(data.packingList)) return false;

  if (!data.flightSuggestion) return false;

  if (!data.hotelSuggestion) return false;

  if (!Array.isArray(data.restaurantSuggestion)) return false;

  if (!Array.isArray(data.days)) return false;

  return true;

}
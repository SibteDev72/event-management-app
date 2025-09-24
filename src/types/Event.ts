export interface event {
  eventTitle: string;
  eventCategory: string;
  eventImageUrl: string;
  eventType: string;
  startDate: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  ticketType: string;
  ticketName?: string;
  ticketPrice?: number;
}

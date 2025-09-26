export interface EventDetails {
  user_info: {
    user_id: string;
    user_name: string;
    user_email: string;
  };
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

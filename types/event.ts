export interface Event {
    id: string;
    name: string;
    date: string;
    description: string;
    location: string;
}
  
export interface MarkedDate {
    marked: boolean;
    dotColor: string;
}
  
export interface MarkedDates {
    [date: string]: MarkedDate;
}
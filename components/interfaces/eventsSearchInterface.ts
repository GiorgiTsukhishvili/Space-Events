export interface EventsDetail {
  year: string;
  month: string;
}

export interface EventsSearchProps {
  onSearch: (year: string, month: string) => void;
}

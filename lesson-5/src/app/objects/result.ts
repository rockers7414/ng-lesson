export interface Result {
  data: any;
  error: any;
  type: string;
}

export interface Collection extends Result {
  index: number;
  offset: number;
  total: number;
}

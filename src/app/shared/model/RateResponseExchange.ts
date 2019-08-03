import { Rate } from './Rate';
export interface RateResponseExchange {
  success?: boolean;
  timestamp?: number;
  base?: string;
  date?: Date;
  rates?: Rate[];
}

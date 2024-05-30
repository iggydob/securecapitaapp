import {EventType} from "../enum/event-type.enum";

export interface Events {
  user_event_id: number
  type: EventType;
  description: string;
  device: string;
  ipAddress: string;
  createdAt: Date;
}

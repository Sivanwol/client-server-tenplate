import {DataItem} from "@client/modules";
export interface FilteredOptions {
  size: string;
}

export interface DateItemState {
  readonly data: DataItem[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface ApplicationState {
  readonly dataItems?: DateItemState;
}

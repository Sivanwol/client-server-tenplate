import {DataItem} from "@client/modules";
export interface FilteredOptions {
  size: string;
}

export interface DateItemState {
  readonly data: DataItem[];
  readonly sizes: string[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly filteredOptions: FilteredOptions;
}

export interface ApplicationState {
  readonly DataItems?: DateItemState;
}

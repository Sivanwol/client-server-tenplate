import {DataItem} from "@client/modules";

export interface DataItemsListProps {
  items: DataItem[];
  loading: boolean;
  error: boolean;
}

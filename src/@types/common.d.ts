/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Common {
  type GameStatus = "live" | "upcoming" | "highlight";

  interface TimeStamp {
    _nanoseconds: number;
    _seconds: number;
  }

  interface TableActions {
    checkAllFn?: (isChecked: boolean) => void;
    editFn?: (id: string) => void;
    deleteFn?: (id: string) => void;
    viewFn?: (id: string) => void;
    checkFn?: (id: string, isChecked: boolean) => void;
  }

  interface ColumnProps {
    fieldName: string | React.ReactNode;
    colStyle?: React.CSSProperties;
    render?: (item: any) => React.ReactNode;
  }

  interface TableModalProps<T> {
    data: Array<T>;
    totalData: number;
    selectedData?: string[];
    columns: ColumnProps[];
    actions?: TableActions;
    loading?: boolean;
    headStyle?: React.CSSProperties;
    actionIconColor?: string;
    bodyHeight?: number;
    pagination?: {
      perPage?: number;
      currentPage?: number;
    };
    handlePageDirection?: (pageDirection: "next" | "prev") => void;
    disableNoData?: boolean;
    onPageChange?: (page: number) => void;
    disableActions?: boolean;
  }
}

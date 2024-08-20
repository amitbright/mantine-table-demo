import { MRT_Icons, MRT_RowData, MRT_TableOptions } from "mantine-react-table";
import { Text } from "@mantine/core";

export const getBaseTableConfig = <T extends MRT_RowData>(): Partial<
  MRT_TableOptions<T>
> => {
  return {
    enableColumnOrdering: true,
    enableDensityToggle: false,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enableRowSelection: true,
    enableColumnResizing: true,
    enableClickToCopy: false,
    enableColumnDragging: false,
    enableColumnPinning: true,
    layoutMode: "grid",
    positionActionsColumn: "last",
    mantineSelectAllCheckboxProps: { size: "sm" },
    getRowId: (originalRow) => originalRow.id,
    initialState: {
      pagination: { pageSize: 20, pageIndex: 0 },
    },
    mantineSelectCheckboxProps: {
      className: "h-[20px] w-[20px] !p-0",
      size: "sm",
    },
    mantineFilterTextInputProps: {
      className: "border-b-0 mt-0 p-0 bg-transparent",
    },
    mantineFilterSelectProps: {
      className: "border-b-0 mt-0 p-0 bg-transparent",
    },
    mantineFilterMultiSelectProps: {
      className: "border-b-0 mt-0 p-0 bg-transparent",
    },
    mantineTableBodyRowProps: (props) => ({
      classNames: {
        tr: props.row.getIsSelected()
          ? "!bg-brand-50"
          : "bg-inherit cursor-pointer",
      },
    }),
    defaultColumn: {
      mantineTableBodyCellProps: {
        classNames: () => {
          return {
            td: "border-0 border-r-[1px] last:border-r-0 border-divider border-solid first:px-[20px] px-[12px] py-[10px]",
          };
        },
      },
      Cell: (props) => (
        <Text className="text-body-14 text-primary" lineClamp={2}>
          {props.renderedCellValue}
        </Text>
      ),
    },
    mantinePaperProps: {
      className: "border-r rounded-2xl border-divider border-solid",
      style: {
        "--mrt-row-hover-background-color": "rgb(var(--color-brand-50))",
      },
    },
    mantineTableContainerProps: {
      className: "rounded-[8px] max-h-[70vh]",
    },
    mantineTableHeadCellProps: {
      classNames: {
        th: "bg-primary text-secondary text-caps-10 uppercase first:px-[20px] pl-[12px] py-[5px] min-h-[32px]",
      },
      style: {
        backgroundColor: "rgb(var(--color-neutrals-100))",
      },
    },
    displayColumnDefOptions: {
      "mrt-row-actions": {
        minSize: 130,
      },
    },
  };
};

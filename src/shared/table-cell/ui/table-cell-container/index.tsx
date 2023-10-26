import { FC, useMemo } from "react"

import { VisibleColumns } from "@widgets/table/lib"
import { ImageTableCell } from "@shared/table-cell/ui/image-table-cell"
import { DefaultTableCell } from "@shared/table-cell/ui/default-table-cell"
import { Astrologer } from "@entities/astrologers/model/types"
import { NameTableCell } from "@shared/table-cell/ui/name-table-cell"

const TableCellComponents = {
  [VisibleColumns.IMAGE_MINI]: ImageTableCell,
  [VisibleColumns.NAME]: NameTableCell,
  fallback: DefaultTableCell,
} as const

export interface TableCellProps {
  astrologer: Astrologer
  id: VisibleColumns
}

export const TableCellContainer: FC<TableCellProps> = ({ astrologer, id }) => {
  const TableCellComponent: FC<TableCellProps> = useMemo(() => {
    const component =
      TableCellComponents[id as keyof typeof TableCellComponents]

    if (!component) {
      return TableCellComponents.fallback
    }

    return component
  }, [id])

  return <TableCellComponent astrologer={astrologer} id={id} />
}

import { dataParser } from "@widgets/table/lib"
import { FC, useMemo } from "react"
import { TableCell } from "@mui/material"
import { TableCellProps } from "@shared/table-cell/ui/table-cell-container"

export const DefaultTableCell: FC<TableCellProps> = ({ astrologer, id }) => {
  const cellTranslation = useMemo(
    () => dataParser[id](astrologer),
    [astrologer, id],
  )

  return <TableCell key={id}>{cellTranslation}</TableCell>
}

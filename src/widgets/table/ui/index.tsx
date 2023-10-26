import { useAppSelector } from "@app/hooks"
import { Table, TableBody, TableContainer, TableRow } from "@mui/material"
import { tableColumns } from "@widgets/table/lib"
import { TableCellContainer } from "@shared/table-cell/ui/table-cell-container"
import { sortedAstrologersWithFilters } from "@widgets/table/model/selector"
import { TableHeadWithSorting } from "@features/table-head-with-sorting/ui"

export const AstrologersTable = () => {
  const astrologersList = useAppSelector(sortedAstrologersWithFilters)

  return (
    <TableContainer>
      <Table>
        <TableHeadWithSorting />
        <TableBody>
          {astrologersList.map((astrologer) => (
            <TableRow key={astrologer.id}>
              {tableColumns.map(({ id }) => (
                <TableCellContainer astrologer={astrologer} id={id} key={id} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

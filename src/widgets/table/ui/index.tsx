import { useAppSelector } from "@app/hooks"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { tableColumns } from "@widgets/table/lib"
import { TableCellContainer } from "@shared/table-cell/ui/table-cell-container"
import { astrologersWithSearchFilter } from "@features/search/model/slice"

export const AstrologersTable = () => {
  const astrologersList = useAppSelector(astrologersWithSearchFilter)

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {tableColumns.map(({ id, translation }) => (
              <TableCell key={id}>{translation}</TableCell>
            ))}
          </TableRow>
        </TableHead>
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

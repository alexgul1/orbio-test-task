import { TableCell, TableHead, TableRow } from "@mui/material"
import { tableColumns } from "@widgets/table/lib"
import TableSortLabel from "@mui/material/TableSortLabel"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import {
  changeSortDirection,
  changeSortType,
  sortingStateSelector,
  SortingType,
} from "@features/table-head-with-sorting/model/slice"
import { useCallback } from "react"

export const TableHeadWithSorting = () => {
  const dispatch = useAppDispatch()
  const { sortBy, sortDirection } = useAppSelector(sortingStateSelector)

  const onSortChange = useCallback(
    (sortType: string) => () => {
      const isCurrentSortBy = sortType === sortBy

      if (isCurrentSortBy) {
        dispatch(changeSortDirection(sortDirection === "asc" ? "desc" : "asc"))
      } else {
        dispatch(changeSortType(sortType as SortingType))
      }
    },
    [sortBy, sortDirection],
  )

  return (
    <TableHead>
      <TableRow>
        {tableColumns.map(({ id, translation, sortable, sortType }) => (
          <TableCell
            key={id}
            {...(sortable
              ? { sortDirection: sortBy === sortType ? sortDirection : false }
              : {})}
          >
            {sortable ? (
              <TableSortLabel
                active={sortType === sortBy}
                direction={sortType === sortBy ? sortDirection : "desc"}
                onClick={onSortChange(sortType)}
              >
                {translation}
              </TableSortLabel>
            ) : (
              <span>{translation}</span>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

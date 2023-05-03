import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

const YearPickerTable = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 2010; year <= currentYear + 2; year++) {
    years.push(year);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {years.map((year) => (
            <TableRow key={year}>
              <TableCell align="center">{year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default YearPickerTable;

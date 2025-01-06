// src/table.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { rows } from '../features/tableData';

const CustomizedTables = () => {
  return (
    <TableContainer component={Paper} className="shadow-md rounded-lg">
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell className="text-lg font-bold bg-gray-200">ID Order</TableCell>
            <TableCell className="text-lg font-bold bg-gray-200" align="right">Order Date</TableCell>
            <TableCell className="text-lg font-bold bg-gray-200" align="right">Check In</TableCell>
            <TableCell className="text-lg font-bold bg-gray-200" align="right">Check Out</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" className="text-lg">
                {row.id}
              </TableCell>
              <TableCell className="text-lg" align="right">{row.orderDate}</TableCell>
              <TableCell className="text-lg" align="right">{row.checkIn}</TableCell>
              <TableCell className="text-lg" align="right">{row.checkOut}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
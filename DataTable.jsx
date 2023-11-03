import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default function DataTable() {
  // Sample data
  const data = [
    { id: 1, name: 'Item 1', description: 'Description 1', price: 10.99, quantity: 5 },
    { id: 2, name: 'Item 2', description: 'Description 2', price: 19.99, quantity: 8 },
    { id: 3, name: 'Item 3', description: 'Description 3', price: 7.49, quantity: 12 },
    { id: 4, name: 'Item 4', description: 'Description 4', price: 24.99, quantity: 3 },
    { id: 5, name: 'Item 5', description: 'Description 5', price: 14.99, quantity: 6 },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>{item.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

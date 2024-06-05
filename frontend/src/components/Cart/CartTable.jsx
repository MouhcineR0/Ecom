import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { InputNumber } from 'antd';



function CartTable({ data }) {
    return (
        <TableContainer component={Paper} className='mt-16 mb-4'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>Product</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Subtotal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">
                                <div className="flex items-center gap-3">
                                    <img src={row.img} width={50} alt="" />
                                    <h2>{row.title}</h2>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                $ {row.price}
                            </TableCell>
                            <TableCell align="center">
                                <InputNumber min={1} max={100000} defaultValue={row.quantity} className='hover:border-primary focus:border-primary' />
                            </TableCell>
                            <TableCell align="center"> $ {row.quantity * row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CartTable;
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { InputNumber, message } from 'antd';
import { useDispatch } from 'react-redux';
import { DeleteCard, GetCard } from '../../features/Product/ProductFunctions';



function CartTable({ data }) {

    const dispatch = useDispatch();

    const DelCard = async (id) => {
        try {
            await dispatch(DeleteCard(id)).unwrap();
            await dispatch(GetCard()).unwrap();
            message.success("Product Deleted from the card");
        }
        catch {
            message.error("failing deleting Card");
        }
    }

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
                            key={row.product?.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">
                                <div className="flex items-center gap-3">
                                    <span onClick={() => DelCard(row.product?._id)} className='text-red-600 text-[30px] cursor-pointer' title='delete'>-</span>
                                    <img src={row.product?.imagepath.url} width={50} alt="" />
                                    <h2>{row.product?.name}</h2>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                $ {row.product?.price}
                            </TableCell>
                            <TableCell align="center">
                                <InputNumber min={1} max={100000} defaultValue={row.Quantity} className='hover:border-primary focus:border-primary' />
                            </TableCell>
                            <TableCell align="center"> $ {row.Quantity * row.product?.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CartTable;
import React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import './table.css';


const table = () => {
   
  const columns= [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'date', headerName: 'Date', type:'date', width: 160},
    { field: 'productName', headerName: 'Product Name', width: 300 },
    {
      field: 'price',
      headerName: 'Price',
      // type: 'number',
      width: 180,
    },
    {
      field: 'unit',
      headerName: 'Unit',
      // type:'number',
      width: 100,
    },
    {
      field: 'totalsales',
      headerName: 'Total Sales',
      width: 190,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 300,
        renderCell:(params)=>{
               return(
                <>
                
                <button className='receiptButton'>Receipt</button>
                <button className='returnButton'>Return</button>
                </>
              
               );
        },
    },
  ];
  
  const rows = [
    { id: 1, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 2, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 3, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 4, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 5, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 6, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 7, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 8, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 9, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 10, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 11, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 12, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 13, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 14, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 15, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
    { id: 16, date: '11 nov 2022', productName: 'Nick jordan', price: '35000', unit:'12', totalsales:'2560000' },
  
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={9}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
  )
}

export default table
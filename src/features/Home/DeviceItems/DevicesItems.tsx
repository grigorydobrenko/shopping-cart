import React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Позиция', width: 70 },
    { field: 'name', headerName: 'Наименование', width: 130 },
    {
        field: 'article',
        headerName: 'Артикул',
        type: 'number',
        width: 90,
    },   {
        field: 'price',
        headerName: 'Цена',
        type: 'number',
        width: 90,
    },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     // valueGetter: (params: GridValueGetterParams) =>
    //     //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
];

const rows = [
    { id: 1, name: 'Snow', article: 'Jon', price: 35 },
    { id: 2, name: 'Lannister', article: 'Cersei', price: 42 },
    { id: 3, name: 'Lannister', article: 'Jaime', price: 45 },
    { id: 4, name: 'Stark', article: 'Arya', price: 16 },
    { id: 5, name: 'Targaryen', article: 'Daenerys', price: null },
    { id: 6, name: 'Melisandre', article: null, price: 150 },
    { id: 7, name: 'Clifford', article: 'Ferrara', price: 44 },
    { id: 8, name: 'Frances', article: 'Rossini', price: 36 },
    { id: 9, name: 'Roxie', article: 'Harvey', price: 65 },
];

const DevicesItems = () => {
    return (
        <div style={{ height: 400, width: '60%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default DevicesItems;
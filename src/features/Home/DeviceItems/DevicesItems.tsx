import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {addItem} from "../Cart/cart-reducer";
import {DeviceItem} from "../../../app/api";

const columns = [
    {field: 'id', headerName: 'Артикул', width: 100},
    {field: 'name', headerName: 'Наименование', width: 300},
    {field: 'manufacturer', headerName: 'Производитель', width: 100},
    {
        field: 'cost',
        headerName: 'Цена',
        type: 'number',
        width: 90,
    },
]


const DevicesItems = () => {

    const deviceItems = useAppSelector(state => state.devices)
    const rows = deviceItems

    const dispatch = useAppDispatch()

    return (
        <div style={{height: 400, width: '60%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids)

                    const selectedRowData = rows.filter((row: DeviceItem) => {
                            return selectedIDs.has(row.id)
                        }
                    )

                    console.log(selectedRowData)

                    dispatch(addItem({item: selectedRowData}))
                }}
            />
        </div>
    );
};

export default DevicesItems;
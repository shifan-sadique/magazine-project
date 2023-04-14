import './datatable.scss'
import { DataGrid } from '@material-ui/data-grid';
import { userColumns,userRows } from '../../../../datatablesource';
import Button from '@material-ui/core/Button';


const Datatable = () => {

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            const status = params.row.status;
      
            if (status === "Active") {
              return (
                <div className="cellAction">
                  <div>
                    <Button variant="contained" size="small" color="secondary">
                      Remove
                    </Button>
                  </div>
                </div>
              );
            } else if (status === "Pending") {
              return (
                <div className="cellAction">
                  <div>
                    <Button variant="contained" size="small"style={{ backgroundColor: '#00ff10', color: '#ffffff' }}>
                      Accept
                    </Button>
                  </div>
                  <div>
                    <Button variant="contained" size="small" color="secondary">
                      Reject
                    </Button>
                  </div>
                </div>
              );
            } else if (status === "Passive") {
              return (
                <div className="cellAction">
                  <div>
                    <Button variant="contained" size="small" color="primary">
                      Remind
                    </Button>
                  </div>
                  <div>
                    <Button variant="contained" size="small" color="secondary">
                      Remove
                    </Button>
                  </div>
                </div>
              );
            } else {
              return <div></div>;
            }
          },
        },
      ];
      

  return (

    <div className="user">
        <div className="title">
            <h1>MAGAZINE COMMITTEE</h1>
        </div>

        <div className='datatable' >
            <div className="tabletitle">
                <h3>Committee List</h3>
            </div>
            <DataGrid className='tableContent'
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            autoHeight
        />
        </div>
    </div>
  )
}

export default Datatable
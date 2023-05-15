export const userColumns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: true,
  },

      {
    field: 'batch',
    headerName: 'Batch',
    width: 150,

  },
  {
      field: 'rollNumber',
      headerName: 'Roll Number',
      width: 190,

    },
  {
      field: 'specialization',
      headerName: 'Specialization',
      width: 190,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      renderCell:(params) => {
          return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
          
      },

    },

];


export const userRows = [
    { id: 1, name: 'aseel', batch:"21-23", rno:33,specialization: 'Literature',status:"Active" },
    { id: 2, name: 'shifan', batch:"22-24", rno:45,specialization: 'Proof Read', status:"Pending" },
    { id: 3, name: 'adwaith', batch:"21-23", rno:50,specialization: 'Art',status:"Active" },
    { id: 4, name: 'sreeraj', batch:"20-23", rno:60,specialization: 'Design',status:"Passive" },
    { id: 5, name: 'shahban', batch:"21-23", rno:1,specialization: 'Design',status:"Pending" },
    { id: 6, name: 'nelwin', batch:"20-21", rno:7,specialization: 'Art',status:"Passive" },
    { id: 7, name: 'hareesh', batch:"21-23", rno:18,specialization: 'Literature',status:"Active" },
    { id: 8, name: 'sachin', batch:"22-24", rno:27,specialization: 'Art',status:"Passive" },
    { id: 9, name: 'ashhad', batch:"20-22", rno:44,specialization: 'Design',status:"Pending" },
    { id: 10, name:'abhinand', batch:"20-23", rno:5,specialization: 'Proof Read',status:"Active" },    
  ];
  
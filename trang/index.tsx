import { useEffect, useState } from 'react';
import { GroupView } from '../components/TrangComponents/GroupView';
import { mockData } from '../data/TrangMockData';
import { processData } from '../logic/processingTrangData';
import { Row } from '../models/Row';
import { EditDanhSach } from '../components/TrangComponents/EditDanhSachView';

let processing = false;
export default function Trang({ sheetdata }: { sheetdata: Row[] }) {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingRow, setEditingRow] = useState<Row>();

  useEffect(() => {
    if (!processing && sheetdata.length > 0) {
      processing = true;
      console.log('processing', new Date());
      updateDB(sheetdata);
    }
  }, [sheetdata]);

  const updateDB = async (sheetdata: Row[]) => {
    for (let i = 0; i < sheetdata.length; i++) {
      const row = sheetdata[i];
      console.log('web:row', row);
      const result = await fetch('./api/add-row', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(row)
      });
      console.log(await result.json());
    }
    processing = false;
  };

  return (
    <div className='p-8'>
      {editModalVisible && editingRow && <EditDanhSach data={editingRow} />}
      {!editModalVisible && (
        <DanhSachDangKy
          sheetdata={sheetdata}
          setEditModalVisible={(row) => {
            setEditModalVisible(true);
            setEditingRow(row);
          }}
        />
      )}
    </div>
  );
}

const DanhSachDangKy = (props: {
  sheetdata: Row[];
  setEditModalVisible: (row: Row) => void;
}) => {
  const { sheetdata } = props;
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>
        Danh sách tham dự huấn luyện đợt 2
      </h1>

      <br />
      {sheetdata.map((row: Row) => {
        return (
          <GroupView
            row={row}
            setEditVisible={() => props.setEditModalVisible(row)}
            key={row.timestamp}
          />
        );
      })}
    </div>
  );
};

export async function getServerSideProps() {
  const req = await fetch('https://ky-dev.vercel.app/api/sheet');
  const res = await req.json();

  // let data = res.data as any[];
  // data.shift();
  // const rows = processData(data).reverse();

  const newMockData = mockData;
  newMockData.shift();
  const rows = processData(newMockData).reverse();

  return {
    props: {
      sheetdata: rows
    }
  };
}

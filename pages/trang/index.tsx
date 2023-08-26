import { GroupView } from '../../components/TrangComponents/GroupView';
import { mockData } from '../../data/TrangMockData';
import { processData } from '../../logic/processingTrangData';

export default function Trang({ sheetdata }: { sheetdata: Row[] }) {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold text-center'>
        Danh sách tham dự huấn luyện đợt 2
      </h1>

      <br />
      {sheetdata.map((row: Row) => {
        return <GroupView {...row} />;
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const req = await fetch('https://ky-dev.vercel.app/api/sheet');
  const res = await req.json();

  let data = res.data as any[];
  data.shift();
  const rows = processData(data).reverse();

  // const newMockData = mockData;
  // newMockData.shift();
  // const rows = processData(newMockData).reverse();

  return {
    props: {
      sheetdata: rows
    }
  };
}

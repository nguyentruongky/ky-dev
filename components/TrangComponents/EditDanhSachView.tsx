import { Row } from '../../models/Row';

export const EditDanhSach = (props: { data: Row }) => {
  const { data } = props;
  const formattedNames = data.danhSach
    .map((user, index) => `${index + 1}. ${user.name}`)
    .join('\n');
  const rawList = data.rawList;

  return (
    <div className='absolute top-0 left-0 w-full  grid grid-cols-2 gap-4 p-4'>
      <Column title='Danh sách gốc' list={rawList} />
      <Column title='Danh sách đã format' list={formattedNames} />
    </div>
  );
};

const Column = (props: { title: string; list: string }) => {
  const onPressSave = () => {
    const textArea = document.getElementById('txtList') as any;
    if (!textArea) {
      return;
    }
    const value = textArea.value;
    console.log('value', value);
  };

  return (
    <div className='border-2 rounded-md py-4 pb-6'>
      <h1 className='text-l font-bold text-center mb-4'>{props.title}</h1>
      <textarea id='txtList' className='w-full h-[40vh] p-4 outline-none'>
        {props.list}
      </textarea>

      <SaveButton title='Dùng danh sách này' action={onPressSave} />
    </div>
  );
};

const SaveButton = (props: { title: string; action: () => void }) => {
  return (
    <span
      className='inline-block align-middle py-2 rounded-lg text-white font-bold text-center bg-blue-500 w-60'
      onClick={props.action}
    >
      {props.title}
    </span>
  );
};

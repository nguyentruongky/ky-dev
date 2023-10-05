import { useState } from 'react';
import { templateContent } from '../../public/template';
import { RawList, FormattedList } from './List';
import { Row } from '../../models/Row';
import sessionData from '../../data/sessons-data';

const emailTitle =
  'Xác Nhận Đăng Ký Huấn Luyện Giáo Viên Dạy Kinh Thánh Lần 2.2023 Thành Công';

export const GroupView = (props: { row: Row; setEditVisible: () => void }) => {
  const { row } = props;
  const [rawListVisible, setRawListVisible] = useState(false);
  const onClickCopyContent = (row: Row) => {
    let template = templateContent;
    template = template
      .replace('{hoiThanh}', row.hoiThanh)
      .replace('{truongDoan}', row.truongDoan.ten)
      .replace('{soLuong}', row.soLuong);

    var wnd = window.open('about:blank', '', '_blank');
    wnd?.document.write(template);
  };

  const onClickOpenGmail = async (row: Row) => {
    if (!row.truongDoan.email) {
      alert('Không có email');
      return;
    }

    await copyToClipboard(row.truongDoan.email);

    window.open(
      'https://mail.google.com/mail/u/1/#inbox?compose=new',
      '_blank'
    );
  };

  const onClickOpenMailClient = async (row: Row) => {
    if (!row.truongDoan.email) {
      alert('Không có email');
      return;
    }

    await copyToClipboard(row.truongDoan.email);
    const link = getMailToUrl(row);
    window.open(link, '_blank');
  };

  const getMailToUrl = (row: Row) => {
    return `mailto:${row.truongDoan.email}?subject=${emailTitle}`;
  };

  const onClickCopyEmail = async (row: Row) => {
    if (!row.truongDoan.email) {
      alert('Không có email');
      return;
    }

    copyToClipboard(row.truongDoan.email);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const onClickCopyTitle = async (row: Row) => {
    copyToClipboard(emailTitle);
  };

  const onClickViewRawList = () => {
    setRawListVisible(!rawListVisible);
  };

  const onClickUpdateDanhSach = () => {
    sessionData.row = row;
    props.setEditVisible();
  };

  return (
    <div className='mt-10'>
      <div key={row.timestamp}>
        <h1 className='font-bold uppercase  text-2xl'>{row.hoiThanh}</h1>
        <h1 className='font-bold'>Số lượng: {row.soLuong}</h1>

        <h1 className='font-bold'>
          Đăng ký: {new Date(row.timestamp).toString()}
        </h1>

        <h1 className='font-bold'>
          Trưởng đoàn: {row.truongDoan.ten} - {row.truongDoan.email} -{' '}
          {row.truongDoan.phone}
        </h1>

        <div className='my-4'>
          <button
            className='p-2 border-2	'
            onClick={() => onClickOpenGmail(row)}
          >
            Open Gmail (web)
          </button>

          <button
            className='p-2 border-2	ml-4 '
            onClick={() => onClickOpenMailClient(row)}
          >
            Open Mail client
          </button>

          <button
            className='ml-4 p-2 border-2	'
            onClick={() => onClickCopyEmail(row)}
          >
            Copy email
          </button>

          <button
            className='mx-4 p-2 border-2	'
            onClick={() => onClickCopyTitle(row)}
          >
            Copy title
          </button>

          <button
            className='p-2 border-2	'
            onClick={() => onClickCopyContent(row)}
          >
            Copy content
          </button>
        </div>

        {rawListVisible ? <RawList {...row} /> : <FormattedList {...row} />}

        <div
          className='select-none underline cursor-pointer'
          onClick={onClickViewRawList}
        >
          Xem danh sách {!rawListVisible ? 'gốc' : 'đã format'}
        </div>

        <div
          className='select-none underline cursor-pointer'
          onClick={onClickUpdateDanhSach}
        >
          Update danh sách
        </div>
        <br />
      </div>
    </div>
  );
};

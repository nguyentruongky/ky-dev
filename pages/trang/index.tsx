export default function Trang({ sheetdata }: { sheetdata: Row[] }) {
  return (
    <div>
      <h1>Danh sách tham dự huấn luyện đợt 2</h1>

      <br />
      {sheetdata.map((row: Row) => {
        return (
          <div>
            <h1>{row.hoiThanh.toUpperCase()}</h1>
            {row.danhSach.map((person) => {
              return <div>{person?.name}</div>;
            })}
            <br />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  //   const req = await fetch('http://localhost:3000/api/sheet');
  //   const res = await req.json();

  //   let rows = res.data as any[];
  //   rows.shift();

  const newMockData = mockData;
  newMockData.shift();
  newMockData.shift();
  const rows = processData(newMockData);

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    console.log(i, row.danhSach, row.hoiThanh);
  }

  return {
    props: {
      sheetdata: rows
    }
  };
}

const processData = (data: any[]) => {
  const rows = data;
  const items = rows.flatMap((row) => {
    const danhSachRaw = row[3] as string;

    if (row[1].includes('BÌNH TÂN')) {
      console.log('helloe');
    }

    const danhSachFinal = analyzeDanhSach({ raw: danhSachRaw.trim() });

    return {
      timestamp: row[0],
      hoiThanh: row[1],
      soLuong: row[2],
      danhSach: danhSachFinal,
      truongDoan: {
        ten: row[4],
        email: row[5],
        phone: row[6]
      }
    };
  });

  //   console.log(items);
  return items;
};

interface Row {
  timestamp: string;
  hoiThanh: string;
  soLuong: string;
  danhSach: Attendee[];
  truongDoan: {
    ten: string;
    email: string;
    phone: string;
  };
}

interface Attendee {
  name: string;
  phone?: string;
  dob?: string;
}
const analyzeDanhSach = (input: { raw: string }): Attendee[] => {
  const { raw } = input;
  let elements: Attendee[] = [];
  const separators = [',', '\n', '\t', '-', '.'];
  for (let i = 0; i < separators.length; i++) {
    const separator = separators[i];
    const names = splitStringBy({ source: raw, separator });
    if (names.length !== 0) {
      elements = names.flatMap((name) => {
        return analyzeName(name);
      });
      break;
    }
  }

  if (elements.length === 0) {
    return [
      {
        name: raw
      }
    ];
  }

  return elements;
};

const splitStringBy = (input: { source: string; separator: string }) => {
  const { source, separator } = input;
  if (source.includes(separator)) {
    return source.split(separator);
  }
  return [];
};

const analyzeName = (name: string) => {
  const separators = [',', '\n', '\t', '.', '  '];
  let result: Attendee = { name };
  for (let i = 0; i < separators.length; i++) {
    const separator = separators[i];
    const elements = splitStringBy({ source: name, separator });

    for (let j = 0; j < elements.length; j++) {
      const element = elements[j].trim();
      if (element === '') {
        continue;
      }

      const numberValue = parseInt(element);

      if (numberValue > 1900 && numberValue < 3000) {
        result.dob = element;
        continue;
      }

      // dob
      if (isValidDate(element)) {
        result.dob = element;
        continue;
      }

      // phone
      if (numberValue && numberValue > 10000 && element.length > 5) {
        result.phone = element;
        continue;
      }

      // name
      if (element.length > 4) {
        result.name = element;
        const otherResult = analyzeName(element);
        if (otherResult !== null) {
          result = otherResult;
        } else {
          console.log('otherResult is null -> ignore');
        }

        continue;
      }

      result.name = '';
    }
  }

  if (result.name === '') {
    return null;
  }
  return result;
};

function isValidDate(s: string) {
  var separators = ['\\.', '\\-', '\\/'];
  var bits = s.split(new RegExp(separators.join('|'), 'g'));
  var d = new Date(bits[2], bits[1] - 1, bits[0]);
  return d.getFullYear() == bits[2] && d.getMonth() + 1 == bits[1];
}

const mockData = [
  [
    'Timestamp',
    '1. Tên Hội Thánh/ Điểm nhóm đăng ký tham dự Khóa Huấn Luyện là?',
    '2. Số lượng thành viên đăng ký (theo Hội Thánh/ Điểm nhóm) tham dự Khóa Huấn Luyện là?',
    '3. Họ và tên các thành viên tham dự Khóa Huấn Luyện là? (vui lòng ghi chính xác họ, tên lót và tên của tất cả các thành viên tham dự)',
    '4. Họ tên người Trưởng đoàn hoặc Đại diện của đơn vị Hội Thánh/ Điểm nhóm tham dự Khóa Huấn Luyện là?',
    '6. Địa chỉ email người Trưởng đoàn hoặc Đại diện của đơn vị Hội Thánh/ Điểm nhóm Khóa Huấn Luyện là?',
    '7. Số điện thoại người Trưởng đoàn hoặc Đại diện của đơn vị Hội Thánh/ Điểm nhóm Khóa Huấn Luyện là?',
    '7. Hình thức đóng tiền',
    'Score',
    'Email Address'
  ],
  [
    '8/4/2023 13:34:05',
    'Phước Lợi',
    '3',
    '1. Nguyễn Dziệu Khánh Vân \n2. Lưu Thị Phương Loan \n3. Trương Thị Mộng Thúy',
    'Nguyễn Dziệu Khánh Vân',
    'Thuytruong.hlc@gmail.com',
    '0784422825',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'giaotam@gmail.com'
  ],
  [
    '8/4/2023 14:41:52',
    'HỘI THÁNH BÌNH TÂN',
    '7',
    'Phan Thị Minh Duyên\nPhan Thị Cẩm Tiên\nLâm Thị Bích Ngọc\nNguyễn Văn Toàn\nVõ Thị Thanh Kiều\nNguyễn Thị Thanh Thuý\nNguyễn Thị Tuyết Nhung',
    'Phan Thị Minh Duyên',
    'phamthiminhduyen07@gmail.com',
    '098.3386.707',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'phamthiminhduyen07@gmail.com'
  ],
  [
    '8/4/2023 14:54:30',
    'Hội Thánh Tin Lành Bình Trị Đông',
    '22',
    '1\tLâm Thị Phong Lan\t10/06/1977\t0906917787\n2\tNguyễn Thị Huỳnh Bích\t26/01/1966\t0905794533\n3\tHuỳnh Thị Thiên Ân\t30/10/1989\t0987321324\n4\tLiêu Thị Huyền Trân\t27/04/1988\t0908018406\n5\tNguyễn Trung Tín\t19/06/1966\t0913746512\n6\tNguyễn Thị Bích Ngọc\t31/10/1997\t0779697459\n7\tTrịnh Thị Hồng Thư\t31/01/1987\t0923644020\n8\tHuỳnh Thiên Cường \t27/03/1995\t0934104800\n9\tNguyễn Thanh Tùng\t24/11/1996\t0938227731\n10\tLê Thị Thanh Nhàn\t30/04/1999\t0394423297\n11\tLê Kiều Hoài Bảo\t08/11/2003\t0937068528\n12\tHuỳnh Đỗ Tinh Anh\t18/08/2008\t0969922450\n13\tNguyễn Thi Hồng Phượng\t29/12/1982\t0908099220\n14\tLê Thị Nguyệt Hằng\t01/06/1975\t0902881842\n15\tVõ Trường Hải\t03/04/1982\t0906832246\n16\tTrần Thị Phi Loan\t12 /01/1974\t0987007689\n17\tDiệp Nguyễn Ngoc Nhi\t26/02/1996\t0931766976\n18\tHồ Ngọc Thanh Thảo\t11/12/1981\t0901337600\n19\tNguyễn Ngọc Gia Hân\t03/08/2007\t0937179864\n20\tLê Trúc Phương\t23/10/2007\t0898402719\n21\tPhạm Thị Lan Mến\t04/06/1997\t0707395687\n22\tĐỗ Minh Mẫn\t25/5/1986\t0906634780\n',
    'Nguyễn Thị Huỳnh Bích ',
    'huynhbichltb@gmail.com',
    '0905794533',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'huynhbichltb@gmail.com'
  ],
  [
    '8/4/2023 14:52:24',
    'Hội Thánh Tin Lành Bình Trị Đông',
    '22',
    '1\tLâm Thị Phong Lan\t10/06/1977\t0906917787\n2\tNguyễn Thị Huỳnh Bích\t26/01/1966\t0905794533\n3\tHuỳnh Thị Thiên Ân\t30/10/1989\t0987321324\n4\tLiêu Thị Huyền Trân\t27/04/1988\t0908018406\n5\tNguyễn Trung Tín\t19/06/1966\t0913746512\n6\tNguyễn Thị Bích Ngọc\t31/10/1997\t0779697459\n7\tTrịnh Thị Hồng Thư\t31/01/1987\t0923644020\n8\tHuỳnh Thiên Cường \t27/03/1995\t0934104800\n9\tNguyễn Thanh Tùng\t24/11/1996\t0938227731\n10\tLê Thị Thanh Nhàn\t30/04/1999\t0394423297\n11\tLê Kiều Hoài Bảo\t08/11/2003\t0937068528\n12\tHuỳnh Đỗ Tinh Anh\t18/08/2008\t0969922450\n13\tNguyễn Thi Hồng Phượng\t29/12/1982\t0908099220\n14\tLê Thị Nguyệt Hằng\t01/06/1975\t0902881842\n15\tVõ Trường Hải\t03/04/1982\t0906832246\n16\tTrần Thị Phi Loan\t12 /01/1974\t0987007689\n17\tDiệp Nguyễn Ngoc Nhi\t26/02/1996\t0931766976\n18\tHồ Ngọc Thanh Thảo\t11/12/1981\t0901337600\n19\tNguyễn Ngọc Gia Hân\t03/08/2007\t0937179864\n20\tLê Trúc Phương\t23/10/2007\t0898402719\n21\tPhạm Thị Lan Mến\t04/06/1997\t0707395687\n22\tĐỗ Minh Mẫn\t25/5/1986\t0906634780\n',
    'Nguyễn Thị Huỳnh Bích ',
    'huynhbichltb@gmail.com',
    '0905794533',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'huynhbichltb@gmail.com'
  ],
  [
    '8/4/2023 16:34:30',
    'HTTL CHI HỘI BÌNH CHIỂU',
    '06',
    "Võ Thị Thu Trang\nVõ Mỹ Thiên Thanh\nSIU H' ĐIẾT\nPHEL\nThị Thịnh\nTrần Thị Hiền",
    'Trần Thị Hiền',
    'banthieuaunhi.binhchieu@gmail.com',
    '+84933299384',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'banthieuaunhi.binhchieu@gmail.com'
  ],
  [
    '8/5/2023 10:05:16',
    'HỘI Thánh Đức Hòa. Long an',
    '2',
    'HUỲNH THỊ MỸ VĂN 0903640759. NGUYỄN HỒNG LIÊN  0904123504',
    'Huỳnh thị mỹ văn',
    '  van270057@ gmail.com',
    '0903640759',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'van270057@gmail.com'
  ],
  [
    '8/5/2023 13:39:58',
    'Tin Lành Thanh Đa',
    '5',
    'Nguyễn Thị Xuân Yến , Nguyễn Thị Lành , Phan Thanh Phương Thảo , Trương Thị Thuỳ Trang, Nguyễn Thị Thuỳ Dung',
    'Nguyễn Thi Xuân Yến',
    'Yennguyen@gmail.com',
    '0938480805',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'yennguyen@gmail.com'
  ],
  [
    '8/5/2023 14:09:00',
    'Thanh Đa ',
    '5',
    'Nguyễn Thị Xuân Yến. Nguyễn Thị Lành. Nguyễn Thị Thùy Dung. Phan Thanh Phương Thảo. Trương Thị Thùy Trang.',
    'Nguyễn Thị Xuân Yến ',
    'yennguyen0905@gmail.com',
    '0938480805',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'yennguyen0905@gmail.com'
  ],
  [
    '8/5/2023 17:31:34',
    'Đức Hoà',
    '2',
    'Nguyễn Hồng Liên\nHuỳnh Thị Mỹ Vân',
    'Huỳnh Thị Mỹ Vân',
    'van270057@gmail.com',
    '0',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'van270057@gmail.com'
  ],
  [
    '8/5/2023 17:40:36',
    'Tân Quy',
    '5',
    'Nguyễn Thị Kim Ngôn \nTôn Nữ Huyền Trân\nĐặng Thị Huỳnh Hoa\nHuỳnh Duyên Mỹ Tiên\nPhan Văn Pháp',
    'Đặng Thị Huỳnh Hoa',
    'dangthihuynhoa6364@gmail.com',
    '0',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'dangthihuynhoa6364@gmail.com'
  ],
  [
    '8/6/2023 19:33:12',
    'HTTL Củ Chi',
    '3',
    '1. Nguyễn Nhâm Hồng Nga\n2. Trương Quốc Khánh\n3. Hà Bảo Yên',
    'Trương Quốc Khánh',
    'ankimchi1978@yahoo.com',
    '0335616156',
    'Chuyển khoản ngân hàng',
    '',
    'ankimchi1978@yahoo.com'
  ],
  [
    '8/7/2023 7:21:16',
    'HTTL CHI HỘI BÌNH CHIỂU',
    '1',
    'Châu Trương Thuỳ Linh',
    'Trần Thị Hiền',
    'banthieuaunhi.binhchieu@gmail.com',
    '0933299384',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'banthieuaunhi.binhchieu@gmail.com'
  ],
  [
    '8/7/2023 22:24:43',
    'HTTL Sài Gòn - TPHCM',
    '37',
    'NGUYỄN THỊ PHƯỢNG\nHOÀNG NGUYỄN PHƯƠNG UYÊN\nNGUYỄN TRẦN THANH VÂN\nLÊ TRƯƠNG THIÊN ĐOAN\nLÊ NGỌC HÀ\nHUỲNH THỊ BẠCH VÂN \nPHẠM THỊ THÙY TRANG\nLƯƠNG GIA BỘI\nTÔ GIA ÂN\nVŨ THANH MAI THY\nLÊ SỸ NGUYÊN\nTRẦN NGỌC NGUYÊN PHƯƠNG\nNGUYỄN THỊ THANH THÚY\nPHAN THỊ PHƯƠNG TRANG \nHUỲNH LÂM XUÂN THẢO\nNGUYỄN NGỌC KỲ DUYÊN\nLÊ NGUYỄN MAI KHANH\nLÊ THỊ BẢO KHANH\nLÊ THỊ DIỄM HƯƠNG\nNGUYỄN THỊ THÚY QUỲNH \nNGUYỄN THỊ HOA CÚC \nMAI THỊ HUYỀN TRANG \nVÕ VĂN SONG TOÀN \nNGUYỄN PHẠM MAI TRANG\nHUỲNH NGUYỄN BẢO TRÂN\nTRẦN THỊ NGỌC LAN \nHUỲNH LÊ THIÊN Ý\nVÕ THỊ THU HƯƠNG\nNGŨ THỊ NGỌC ÁNH \nNGUYỄN PHẠM HUYỀN TRANG \nVÕ THỊ THIÊN ÂN \nTRẦN TRỌNG HUY\nNGUYỄN THANH HẰNG \nNGUYỄN VÕ THANH NHÃ\nDƯƠNG THẢO NHI\nNGUYỄN HUỲNH PHƯƠNG\nHUỲNH THỊ PHƯƠNG THẢO\n',
    'NGUYỄN THỊ PHƯỢNG',
    '',
    '0902801115',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'vannguyen.121296@gmail.com'
  ],
  [
    '8/8/2023 11:37:34',
    'Bình Đông',
    '6',
    '1/ Lâm Thuý Vy \n2/ Nguyễn Thị Thanh Thuỷ\n3/ Đặng Thị Thanh Hoài\n4/ Mai Bích Thuận\n5/ Trần Mỹ Công\n6/ Võ Hoàng Thiên Hương',
    'Nguyễn Thị Thanh Thuỷ',
    'thanh.thuynguyen092@gmail.com',
    '097 5847480',
    'Chuyển khoản ngân hàng',
    '',
    'thuthuyduongthi2501@gmail.com'
  ],
  [
    '8/8/2023 15:59:25',
    'Hội thánh Tin Lành An Hạ',
    '11',
    '1. Huỳnh Ý Như\n2. Võ Ngọc Mai Khanh\n3. Võ Trung Bảo Khanh\n4. Mó Hon\n5. Hồ Văn Chiều\n6. Ai vôn\n7. Phạm Lâm Phương Vi\n8. Trần Hồng Ân\n9. Trần Thiên Ân\n10. Võ Lâm Minh\n11. Trần Minh Tý\n',
    'Huỳnh Ý Như',
    'huynhynhu01011985@gmail.com',
    '0909369961',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'huynhynhu01011985@gmail.com'
  ],
  [
    '8/8/2023 19:10:18',
    'HTTL Chi Hội Gò Vấp',
    '12',
    '1. LÊ THỊ HOÀNG THIỆN (2/8/1988)\n2. PHẠM NGỌC TRÚC THY (21/5/1982)\n3. NGUYỄN THỊ NHƯ THẢO (1/5/1972)\n4. TRỊNH LÊ TÚ UYÊN (10/2/1994)\n5. NGUYỄN TRẦN THẢO VI (8/6/1996)\n6. PHAN NHẬT NAM (22/11/1994)\n7. TRẦN THỊ NHƯ Ý (21/6/2001)\n8. NGUYỄN THỊ HOÀNG THƯƠNG (18/3/1995)\n9. LÊ THỊ THANH TUYỀN (20/10/1995)\n10. NGUYỄN THỊ THU HUỆ (9/2/1997)\n11. NGÔ THỊ HƯƠNG (13/8/1994)\n12. ĐINH NGUYỄN THUỴ VY (11/5/1987)',
    'LÊ THỊ HOÀNG THIỆN',
    'lethihoangthien0208@gmail.com',
    '0977265164',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'lethihoangthien0208@gmail.com'
  ],
  [
    '8/9/2023 20:33:43',
    'Hội thánh tin lành khánh hội',
    '15',
    '1. NGUYỄN MINH ÁI. 2003.   \n2. PHAN NGỌC PHÚC. 1989.   \n3.NGUYỄN THỊ MỸ LINH   1984.  \n 4.NGUYỄN NGỌC PHỈ TÚY  1997.   \n5.NGUYỄN QUỐC DŨNG  1995.  \n6.NGUYỄN DUY NIỆM. 1979.  \n7.ĐÀO THỊ THÙY DUNG. 1996.   \n8.LÊ THỊ MỸ LINH. 1998.   \n9.LÊ QUANG HIẾU  1986.   \n10.NGUYỄN THỊ THU THẢO.  2001.  \n11. NGUYỄN HUỲNH LAN NHI. 2001.   \n12.NGUYỄN THỊ TRÚC LINH. 1987.   \n13.PHÙNG THỊ HÀ   1986.   \n14.NGUYỄN HOÀNG THÚY VY.  1993.       \n15.TRẦN THANH KHIẾT   1981.',
    'NGUYỄN THỊ MỸ LINH',
    'mylinh240684@gmail.com',
    '0792533940',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'mylinh240684@gmail.com'
  ],
  [
    '8/10/2023 10:53:30',
    'HTTL Tân Quy ',
    '5',
    '1 . Nguyễn Thị Kim Ngôn \n2, Tôn Nữ Huyền Trân\n3. Đặng Thị Huỳnh Hoa\n4. Huỳnh Duyên Mỹ Tiên\n5 . Phan Văn Pháp ',
    'Đặng Thị Huỳnh Hoa',
    'dangthihuynhhoa6364@gmail.com',
    '0937396364',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'dangthihuynhhoa6364@gmail.com'
  ],
  [
    '8/10/2023 12:12:38',
    'HTTL Chánh Hưng',
    '7',
    'Trương Ngọc Thiên Kim, Trần Thị Bảo Trân, Châu Trần Thảo An, Nguyễn Thị Thanh Thảo, Nguyễn Kim Cương, Nguyễn Hà Thiên Trang, Huỳnh Thanh Cao',
    'Trần Thị Bảo Trân',
    'toantranduy.btt@gmail.com',
    '0908606981',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'toantranduy.btt@gmail.com'
  ],
  [
    '8/10/2023 13:16:38',
    'HTTL Tân Quy',
    '5',
    '1 . Nguyễn Thị Kim Ngôn \n2, Tôn Nữ Huyền Trân\n3. Đặng Thị Huỳnh Hoa\n4. Huỳnh Duyên Mỹ Tiên\n5 . Phan Văn Pháp ',
    'Đặng Thị Huỳnh Hoa ',
    'dangthihuynhhoa6364@gmail.com',
    '0937396364',
    'Chuyển khoản ngân hàng',
    '',
    'dangthihuynhhoa6364@gmail.com'
  ],
  [
    '8/11/2023 16:53:49',
    'Bình Thới',
    '7',
    'Ngô Võ Linh Nguyện (16/3/1976)\nĐặng Hoàng Aga (16/11/1980)\nNguyễn Thị Thanh Xuân (24/9/1984)\nPhan Vân Quỳnh (27/8/1987)\nLưu Bảo Linh (22/12/1997)\nHuỳnh Thị Kim Yến (27/8/1974)\nKiều Nguyễn Bảo Ân (7/11/1996)',
    'Ngô Võ Linh Nguyện',
    'ngovolinhnguyen@gmail.com',
    '0909882219',
    'Chuyển khoản ngân hàng',
    '',
    'ngovolinhnguyen@gmail.com'
  ],
  [
    '8/12/2023 12:47:47',
    'HTTL Bình Hưng',
    '4',
    'Phạm Thị Hồng Nhung, Nguyễn Ngọc Hương Giang, Đặng Thùy Nhung, Trần Thị Tố Yên',
    'Phạm Thị Hồng Nhung',
    'nhungsgdn@gmail.com',
    '0989300242',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'nhungsgdn@gmail.com'
  ],
  [
    '8/12/2023 13:07:31',
    'Hội Thánh Tân Phú',
    '12',
    'Đỗ Kiều Mai\nNguyễn Thị Lệ Duyên\nVũ Hoàng Khôi\nNguyễn Kim Ngân\nNguyễn Thị Thoa\nNguyễn Thiên Hồng Ân\nTôn Nguyễn Thanh Duyên\nTrần Thị Giáng Hương\nNguyễn Thị Dương Yên\nNguyễn Lê Phương Thảo\nTrần Ngọc Quỳnh Giao\nTăng Minh Toại\n',
    'Trần Thị Giáng Hương',
    'huongtranthi1807@gmail.com',
    '0935191442',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'huongtranthi1807@gmail.com'
  ],
  [
    '8/13/2023 20:04:04',
    'Hội Thánh Tô Hiến Thành',
    '5',
    '1. Nguyễn Nữ Thúy Hiên\n2. Võ Thị Thu Nguyệt\n3. Lê Thị Nguyệt\n4. H Din Niê\n5. Nguyễn Ngọc Giao Tâm\n',
    'Nguyễn Nữ Thúy Hiên',
    'nguyennuthuyhien@gmail.com',
    '0938448442',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'nguyennuthuyhien@gmail.com'
  ],
  [
    '8/14/2023 11:12:54',
    'Hòa Hưng',
    '11',
    '1. Hồ Thị Thu Hương\n2. Lê Kim Dung\n3. Nguyễn Thuận Linh \n4. Đặng Thiên Cẩm Thìn \n5. Lê Thị Đào Duyên (Bà MS Châu Minh Tâm) \n6. Nguyễn Phú Khánh Tân \n7. Nguyễn Kim Ngân  \n8. Huỳnh Thị Mỹ Diễm \n9. Lê Thị Bích Đào  \n10. Phan Thị Mỹ Hạnh \n11. Lê Thị Bích Trâm',
    'Lê Thị Bích Đào',
    'bichdaole1968@gmail.com',
    '0938421968',
    'Chuyển khoản ngân hàng',
    '',
    'giaotam@gmail.com'
  ],
  [
    '8/14/2023 14:55:36',
    'Hội Thánh Tin Lành Dĩ An Bình Dương ',
    '8 giáo viên',
    '1. Nguyễn Thị Phượng 20/12/82\n2. Nguyễn Thị Thu Thuỷ 21/2/82\n3. Nguyễn Lê Thùy Dung 25/8/83\n4. Đào Thị Thúy Hà 30/7//72\n5. Hồ Xuân Mai 29/12/2000\n6. Nguyễn Thị Linh Diễm 3/3/93\n7. Nguyễn Huỳnh Giáng Sinh 6/1/95\n8.Nguyễn Tri Phương 10/3/96',
    'Nguyễn Thị Phượng',
    'Cocchudethuong2@gmail.com',
    '0908.193.193',
    'Chuyển khoản ngân hàng',
    '',
    'cocchudethuong2@gmail.com'
  ],
  [
    '8/14/2023 15:20:08',
    'Thạnh Xuân',
    '3',
    'Phan Thị Kiến Hòa\nNguyễn Hồng Phúc\nTrần Thị Bích Thủy',
    'Phan Thị Kiến Hòa',
    'kienhoaphan@gmail.com',
    '0984372220',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'kienhoaphan@gmail.com'
  ],
  [
    '8/14/2023 16:47:26',
    'Hội Thánh tin lành Phú Lâm',
    '11',
    '1. Đặng Thanh Phong\n2. Lê Ngọc Trúc Anh\n3. Trần Huỳnh Phương Thảo\n4. Nghiêm Cẩm Yến\n5. Trần Ý Nhi\n6. Nguyễn Thị Phi Vân\n7. Đỗ Nhã Phương\n8. Ngô Trần Trúc Mai \n9. Lê Thị Phượng Dân\n10. Hứa Lê Kim My\n11. Phạm Thị Diệu ',
    'Đặng Thanh Phong',
    'dangthanhphong404@gmail.com',
    '0707192404',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'dangthanhphong404@gmail.com'
  ],
  [
    '8/15/2023 8:20:39',
    'Chi Hội Hòa Phú',
    '6',
    '1. Nguyễn Thanh Thúy An\n2. Nguyễn Thị Hồng Vân\n3. Võ Thái Hà\n4. Nguyễn Minh Nhựt\n5. Nguyễn Thị Thảo Ngọc\n6. Nguyễn Thị Yến Nhi',
    'Nguyễn Thanh Thúy An',
    'ntta.rachel@gmail.com',
    '0942062306',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'ntta.rachel@gmail.com'
  ],
  [
    '8/15/2023 9:15:25',
    'Hội Thánh Tin Lành Phú Thọ Hòa',
    '3',
    '1. Hồ Châu Thy\n2. Ngô Dương Như Ý\n3. Lê Thị Mai Vân',
    'Ngô Dương Như Ý',
    'ngoduongnhuy1189@gmail.com',
    '0903514274',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'truongtthienthanh@gmail.com'
  ],
  [
    '8/16/2023 0:19:59',
    'Hội Thánh Thị Nghè',
    '8',
    'Nguyễn Thị Ái Vi\nNguyễn Thị Kim Thanh\nVõ Thị Thu Huệ\nLê Thị Hiệp\nBùi Thị Mỹ Trang\nTrần Thị Thanh Nhàng\nHồ Thị Tường Vy\nTrần Thị Thanh Tâm',
    'Lê Thị Hiệp',
    'hiepximuoi@gmail.com',
    '0934112568',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'hiepximuoi@gmail.com'
  ],
  [
    '8/16/2023 15:34:08',
    'Hội Thánh Tin Lành Linh Xuân',
    '8',
    'STT\tHỌ VÀ TÊN\t              GIỚI TÍNH\tNGÀY SINH\tĐIỆN THOẠI\n01\tNguyễn Thị Anh Thư\t       Nữ\t    26/01/1976\t0908493744\n02\tTạ Hoàng Quyên          \tNữ\t     19/11/1999\t0858562576\n03\tNguyễn Như Huyền\t       Nữ\t      27/10/1995\t0768549512\n04\tHuỳnh Đỗ Thiên Ân\t        Nam\t28/07/2004\t0935291699\n05\tNguyễn Phan Liên Hạ\tNữ\t     31/10/2004\t093 2409700\n06\tH Ru Tơ Ayun\t               Nữ\t     05/12/1999\t\n07\tNguyễn Thị Minh Thiên\tNữ\t    08/01/2003\t0918681742\n08\tNguyễn Thị Tường Vy \tNữ\t   23/07/2004\t0905656154\n',
    'Nguyễn Thị Anh Thư  ',
    'ntanhthu0126@gmail.com',
    '0908493744',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'ntanhthu0126@gmail.com'
  ],
  [
    '8/16/2023 15:49:26',
    'HTTL Nguyễn Tri Phương',
    '07',
    '1.\tNguyễn Văn Trung (Luca)\n2.\tHồ Hoàng Trúc Linh\n3.\tTrần Thị Mi Mi\n4.\tMã Kim Diễm\n5.\tTrần Thị Bích Phương\n6.\tVõ Thị Mỹ Duyên\n7.\tHuỳnh Nguyễn Hải Phương\n',
    'Trần Thị Mi Mi',
    'ntp.thieunhi@gmail.com',
    '0937377823',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'ntp.thieunhi@gmail.com'
  ],
  [
    '8/17/2023 8:21:05',
    'Trương Minh Giảng ',
    '5',
    'Trần Kim Thục Hiền - Huỳnh Kim Thanh - Nguyễn Thanh Cát Uyên -Phan Trần Anh Tài - Nguyễn Trung Đức',
    'Phan Trần Anh Tài ',
    'huong.htt94@gmail.com',
    '0938064467',
    'Chuyển khoản ngân hàng',
    '',
    'huong.htt94@gmail.com'
  ],
  [
    '8/17/2023 10:58:52',
    'Bàn Cờ',
    '4',
    'Nguyễn Trọng Nhân\nVõ Ngọc Anh Thư\nPhạm Ngọc Phương Thảo\nPhạm Thị Hải Hiền',
    'Nguyễn Trọng Nhân',
    'trongnhannguyen160999@gmail.com',
    '0586855028',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'trongnhannguyen160999@gmail.com'
  ],
  [
    '8/17/2023 19:27:37',
    'Hội thánh Khánh Hội',
    '3',
    '1.VŨ THỊ HỒNG NGỌC. 1987.    \n2.NGUYỄN HỒNG THANH MAI. 1995.      \n3.NGUYỄN HUỲNH THANH NHÃ. 2001',
    'NGUYỄN THỊ MỸ LINH',
    'mylinh240684@gmail.com',
    '0792533940',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'mylinh240684@gmail.com'
  ],
  [
    '8/18/2023 17:20:38',
    'Tân Phú Trung',
    '3',
    '1. Hà Thị Thu Hương\n2. Châu Quế Minh\n3. Nguyễn Thị Thảo Nhi',
    'Châu Quế Minh',
    'chauqueminh@gmail.com',
    '0793055170',
    'Chuyển khoản ngân hàng',
    '',
    'chauqueminh@gmail.com'
  ],
  [
    '8/20/2023 18:16:26',
    'Chi Hội Tân Quy',
    '01',
    'Phương Quang',
    'Phương Quang',
    '',
    '0909649337',
    'Chuyển khoản ngân hàng',
    '',
    'ductin2132019@gmail.com'
  ],
  [
    '8/20/2023 20:39:17',
    'Hội Thánh Bình Khánh',
    '5',
    'Bà Mục Sư Phan Đức Thuỳ\nHuỳnh Cẩm Vi\nĐặng Thị Thuỳ Giang\nLê Ngọc Yên\nChâu Thị Ngọc Hạnh ',
    'Bà Mục Sư Phan Đức Thuỳ',
    'phanducthuyd@yahoo.com',
    '0932971494',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'phanducthuyd@yahoo.com'
  ],
  [
    '8/20/2023 21:28:58',
    'HTTL Thủ Đức',
    '9 người',
    '1.Lê Phùng Nhã Phương, 2. Nguyễn Phương Thảo, 3. Dương Ái Ni, 4. Phạm Thị Ánh Nhung, 5. Đỗ Hồng Phúc, 6. Nguyễn Hòa Hợp, 7. Trần Thị Nhã Ca, 8.Trần Lê Thanh Ngọc, 9. Hứa Hồng Hải',
    'HỨA HỒNG HẢI',
    'christhonghai1511@gmail.com',
    '0908541769',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'christhonghai1511@gmail.com'
  ],
  [
    '8/21/2023 15:46:44',
    'Hoà Phú',
    '1',
    'Nguyễn Thanh Thuý Vy',
    'Nguyễn Thanh Thuý An',
    'ntta.rachel@gmail.com',
    '0942062306',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'ntta.rachel@gmail.com'
  ],
  [
    '8/21/2023 18:53:23',
    'Hội Thánh mennonai Trảng dài ',
    '2',
    'Bùi Thị Mai và Trần Thuý Nga ',
    'Bùi Thị Mai ',
    'thimaibui459@gmail.com',
    '0374984923',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'thimaibui459@gmail.com'
  ],
  [
    '8/22/2023 9:12:34',
    'Hội Thánh Tin Lành Chi Hội Bến Cát',
    '4',
    '1. H Hậu Mlô 20/04/1997 \n2. Nguyễn Thị Nhung 20/11/1989 \n3.Lê Phương Diệu 03/03/1987\n4.Lê Thị Xuân Oanh 11/05/1995',
    'Nguyễn Thị Nhung',
    'shirong.ruan88@gmail.com',
    '0975014523',
    'Tiền mặt ((Đóng tiền trước khi nhận phần ăn sáng & vào học)',
    '',
    'shirong.ruan88@gmail.com'
  ]
];

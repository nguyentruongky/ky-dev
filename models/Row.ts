interface Row {
  timestamp: string;
  hoiThanh: string;
  soLuong: string;
  danhSach: Attendee[];
  rawList: string;
  truongDoan: {
    ten: string;
    email: string;
    phone: string;
  };
}

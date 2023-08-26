export const FormattedList = (row: Row) => {
  return (
    <div>
      {row.danhSach.map((person, index) => {
        return (
          <div key={person.name}>
            {index + 1}. {person?.name}
          </div>
        );
      })}
    </div>
  );
};

export const RawList = (row: Row) => {
  return <div>{row.rawList}</div>;
};

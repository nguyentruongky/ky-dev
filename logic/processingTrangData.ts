export const processData = (data: any[]) => {
  const rows = data;
  const items = rows.flatMap((row) => {
    const danhSachRaw = row[3] as string;

    const danhSachFinal = analyzeDanhSach({ raw: danhSachRaw.trim() });
    const email = (row[5].trim() ?? row[9].trim()).toLowerCase()
    const item: Row = {
      timestamp: row[0],
      hoiThanh: row[1].trim(),
      soLuong: row[2].trim(),
      danhSach: danhSachFinal,
      rawList: danhSachRaw,
      truongDoan: {
        ten: row[4].trim(),
        email,
        phone: row[6].trim()
      }
    };

    return item;
  });

  return items;
};

const analyzeDanhSach = (input: { raw: string }): Attendee[] => {
  const { raw } = input;
  let elements: Attendee[] = [];
  const separators = [',', '\n', '\t', '-', '.'];
  for (let i = 0; i < separators.length; i++) {
    const separator = separators[i];
    const names = splitStringBy({ source: raw, separator });
    if (names.length !== 0) {
      names.forEach((name) => {
        const person = analyzeName(name);
        if (person) {
          elements.push(person);
        }
      });

      break;
    }
  }

  if (elements.length === 0) {
    return [
      {
        name: capitalizeWords(raw)
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
  const separators = [',', '\n', '\t', '.', '  ', ' Và '];
  let result: Attendee = { name: capitalizeWords(name) };
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
        result.dob = element.trim();
        continue;
      }

      // dob
      if (isValidDate(element)) {
        result.dob = element.trim();
        continue;
      }

      // phone
      if (numberValue && numberValue > 10000 && element.length > 5) {
        result.phone = element.trim();
        continue;
      }

      // name
      if (element.length > 4) {
        result.name = capitalizeWords(element.trim());
        const otherResult = analyzeName(element);
        if (otherResult !== null) {
          result = otherResult;
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
  var bits = s
    .split(new RegExp(separators.join('|'), 'g'))
    .map((item) => parseInt(item));
  var d = new Date(bits[2], bits[1] - 1, bits[0]);
  return d.getFullYear() == bits[2] && d.getMonth() + 1 == bits[1];
}

function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

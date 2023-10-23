export default function SizeInfo() {
  const sizeData = [
    {
      Size: "XS",
      US: "0-2",
      Bust: '32.5"',
      Waist: '25.5"',
      Hips: '35.5"',
    },
    {
      Size: "S",
      US: "4-6",
      Bust: '34"',
      Waist: '27"',
      Hips: '37"',
    },
    {
      Size: "M",
      US: "8-10",
      Bust: '36"',
      Waist: '29"',
      Hips: '39"',
    },
    {
      Size: "L",
      US: "12-14",
      Bust: '38"',
      Waist: '31"',
      Hips: '41"',
    },
    {
      Size: "XL",
      US: "14-16",
      Bust: '40"',
      Waist: '33"',
      Hips: '43"',
    },
    {
      Size: "1X",
      US: "16-18",
      Bust: '44"',
      Waist: '37"',
      Hips: '47"',
    },
    {
      Size: "2X",
      US: "18-20",
      Bust: '46"',
      Waist: '39"',
      Hips: '49"',
    },
    {
      Size: "3X",
      US: "20-22",
      Bust: '48"',
      Waist: '41"',
      Hips: '51"',
    },
  ];

  return (
    <div className="w-full mx-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="p-2">Size</th>
            <th className="p-2">US</th>
            <th className="p-2">Bust</th>
            <th className="p-2">Waist</th>
            <th className="p-2">Hips</th>
          </tr>
        </thead>
        <tbody>
          {sizeData.map((size, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{size.Size}</td>
              <td className="p-2">{size.US}</td>
              <td className="p-2">{size.Bust}</td>
              <td className="p-2">{size.Waist}</td>
              <td className="p-2">{size.Hips}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

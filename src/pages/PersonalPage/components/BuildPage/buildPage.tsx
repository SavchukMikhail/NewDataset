import { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { observer } from 'mobx-react-lite';
import patientStore from '../../../../stores/PatientStore';

const Build: React.FC = observer(() => {
  

  const [selectedDisease, setSelectedDisease] = useState<string>('Грипп');

  const handleExport = () => {
    // Фильтруем данные по болезни
    const filteredData = patientStore.getFilteredPatients(selectedDisease);

    // Создаем новую книгу Excel
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Patients');

    // Генерируем файл Excel
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    // Сохраняем файл
    saveAs(blob, 'filtered_data.xlsx');
  };

  return (
    <div>
      <h1>Экспорт данных в Excel</h1>
      <label htmlFor="disease-select">Выберите болезнь:</label>
      <select
        id="disease-select"
        value={selectedDisease}
        onChange={(e) => setSelectedDisease(e.target.value)}
      >
        {patientStore.getUniqueDiseases().map((disease) => (
          <option key={disease} value={disease}>
            {disease}
          </option>
        ))}
      </select>
      <button onClick={handleExport}>Экспортировать</button>
    </div>
  );
});

export default Build;

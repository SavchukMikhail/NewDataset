import { makeAutoObservable } from 'mobx';

export class PatientStore {
  patients = [
    { Имя: 'Иван', Фамилия: 'Иванов', Возраст: 30, Болезнь: 'Грипп' },
    { Имя: 'Петр', Фамилия: 'Петров', Возраст: 40, Болезнь: 'Кашель' },
    { Имя: 'Светлана', Фамилия: 'Сидорова', Возраст: 25, Болезнь: 'Грипп' },
    { Имя: 'Алексей', Фамилия: 'Алексеев', Возраст: 35, Болезнь: 'Грипп' },
    { Имя: 'Мария', Фамилия: 'Маркова', Возраст: 28, Болезнь: 'Аллергия' },
    { Имя: 'Маря', Фамилия: 'Маркова', Возраст: 28, Болезнь: 'жопа болит' },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  getFilteredPatients(disease: string) {
    return this.patients.filter(patient => patient.Болезнь === disease);
  }
  getUniqueDiseases() {
    const diseases = this.patients.map(patient => patient.Болезнь);
    return Array.from(new Set(diseases));
  }
}

const patientStore = new PatientStore();
export default patientStore;

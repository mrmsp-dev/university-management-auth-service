/* eslint-disable no-undef */

import {
  IAcademicSemesterMonths,
  IAcamedicSemesterCodes,
  IAcamedicSemesterTitles,
} from './academicSemester.interface';

export const acamedicSemesterTitles: IAcamedicSemesterTitles[] = [
  'Autumn',
  'Summer',
  'Fall',
];
export const acamedicSemesterMonths: IAcademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const acamedicSemesterCodes: IAcamedicSemesterCodes[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterTitleCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const academicSemesterSearchableFields = ['title', 'code', 'year'];

export const academicSemesterFiltarableFields = [
  'searchTerm',
  'title',
  'code',
  'year',
  'syncId',
];

export const EVENT_ACADEMIC_SEMESTER_CREATED = 'academic-semester.created';
export const EVENT_ACADEMIC_SEMESTER_UPDATED = 'academic-semester.updated';
export const EVENT_ACADEMIC_SEMESTER_DELETED = 'academic-semester.deleted';

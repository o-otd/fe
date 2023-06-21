import moment from 'moment';

export default function useGetDate(startDate: string, endDate: string) {
  const formattedStartDate = moment(startDate, 'YYYYMMDD').format('YYYY.MM.DD');
  const formattedEndDate = moment(endDate, 'YYYYMMDD').format('YYYY.MM.DD');

  return [formattedStartDate, formattedEndDate];
}

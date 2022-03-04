export const getAgeDetails = (oldDate: dayjs.Dayjs, newDate: dayjs.Dayjs) => {
  const years = newDate.diff(oldDate, 'year');
  const months = newDate.diff(oldDate, 'month') - years * 12;
  const days = newDate.diff(oldDate.add(years, 'year').add(months, 'month'), 'day');

  return {
    years,
    months,
    days,
    allDays: newDate.diff(oldDate, 'day'),
  };
};
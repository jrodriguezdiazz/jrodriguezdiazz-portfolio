import moment from 'moment';

export const calculateProjectDuration = (startDate, endDate) => {
  const startMoment = moment(startDate);
  let endMoment;

  if (endDate === null) {
    endMoment = moment();
    endDate = 'Present';
  } else {
    endMoment = moment(endDate);
  }

  const durationMonths = endMoment.diff(startMoment, 'months');
  const formattedStartDate = startMoment.format('MMM YYYY');
  const formattedEndDate = endMoment.format('MMM YYYY');

  return `${formattedStartDate} - ${formattedEndDate} (${durationMonths} months)`;
};

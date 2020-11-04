const to12Hr = (date) => {
  let hour;
  let meridiem;
  if (date.getUTCHours() === 0 || date.getUTCHours() === 24) {
    hour = 12;
    meridiem = 'AM';
  } else if (date.getUTCHours() >= 1 && date.getUTCHours() <= 11) {
    hour = date.getUTCHours();
    meridiem = 'AM';
  } else if (date.getUTCHours() === 12) {
    hour = date.getUTCHours();
    meridiem = 'PM';
  } else if (date.getUTCHours() >= 13 && date.getUTCHours() <= 23) {
    hour = date.getUTCHours() - 12;
    meridiem = 'PM';
  }
  return `${hour}:${date.getUTCMinutes()} ${meridiem}`;
};

const getDateString = (utime, tz) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dateString = '';
  const date = new Date((Number(utime) + Number(tz)) * 1000);
  dateString += `${days[date.getUTCDay()]}, `;
  dateString += `${months[date.getUTCMonth()]} `;
  dateString += `${date.getUTCDate()} `;
  dateString += `${date.getUTCFullYear()}, `;
  dateString += `${to12Hr(date)}`;
  return dateString;
};

export default getDateString;

//credit: https://stanko.github.io/javascript-time-ago-function/
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];


function getFormattedDate(date, prefomattedDate = false, hideYear = false, daysAgo = false) {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    // Adding leading zero to minutes
    minutes = `0${ minutes }`;
  }

  if (prefomattedDate) {
    // Today at 10:20
    // Yesterday at 10:20
    return `${ prefomattedDate } at ${ hours }:${ minutes }`;
  }

  if (daysAgo) {
  	return Math.round(daysAgo) + " days ago";
  }

  if (hideYear) {
    // 10. January at 10:20
    return `${ month } ${ day }`;
  }

  // 10. January 2017. at 10:20
  return `${ month } ${ day }, ${ year }`;
}


// --- Main function
export function timeAgo(dateParam) {
  if (!dateParam) {
    return null;
  }

  const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
  const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
  const MONTH_IN_MS =  30 * 24 * 60 * 60 * 1000;
  const today = new Date();
  const yesterday = new Date(today - DAY_IN_MS);
  const lastMonth = new Date(today - MONTH_IN_MS);
  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString();
	var isThisMonth = false;
  if (date > lastMonth){

  	isThisMonth = true;
  	var daysAgo = (today - date) / (1000 * 60 * 60 * 24);
  }
  const isThisYear = today.getFullYear() === date.getFullYear();


  if (seconds < 5) {
    return 'now';
  } else if (seconds < 60) {
    return `${ seconds } seconds ago`;
  } else if (seconds < 90) {
    return 'about a minute ago';
  } else if (minutes < 60) {
    return `${ minutes } minutes ago`;
  } else if (isToday) {
    return getFormattedDate(date, 'Today'); // Today at 10:20
  } else if (isYesterday) {
    return getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
  } else if (isThisMonth){
  	return getFormattedDate(date, false, false, daysAgo); //X days ago
  } else if (isThisYear) {
    return getFormattedDate(date, false, true, false); // 10. January at 10:20
  }

  return getFormattedDate(date); // 10. January 2017. at 10:20
}
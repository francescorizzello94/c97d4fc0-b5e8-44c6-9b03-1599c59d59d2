import moment from 'moment';


export function GeneralDateFormatter(str: string) { 
  return Array.from(moment(str).format('MMMM Do YYYY'));
}

export function TimeFormatter(str: string) { 
  return Array.from(moment(str).format('MMMM Do YYYY, h:mm a'));
}

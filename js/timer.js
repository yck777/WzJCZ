const formatTime = (format = 'YY-MM-DD', timeStamp) => {
  if (timeStamp && timeStamp.length > 10) {
    date = timeStamp;
  } 
  else if(timeStamp && timeStamp.length === 10){
    date = timeStamp * 1000;
  }
  else {
    date = new Date();
  }
  let year = date.getFullYear();
  let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let HH = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let MM = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let SS = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  if (format.includes('SS')) {
    return year + '-' + month + '-' + day + '   ' + HH + ':' + MM + ':' + SS;
}
  else {
    return year + '-' + month + '-' + day;
}
}


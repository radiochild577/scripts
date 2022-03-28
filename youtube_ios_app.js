var url = window.location.href;
const str = url;
const newStr = str.replace('https://www.youtube.com/watch?v=', 'youtube://');
window.location.href = console.log(newStr);

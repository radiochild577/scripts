var url = window.location.href;
const newStr = url.replace('https://m.youtube.com/watch?v=', 'youtube://');
window.location.href = console.log(newStr);

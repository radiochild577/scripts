results = url.match('(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})')
videoId = results[1]
window.location.href = `youtube://${videoId}`;

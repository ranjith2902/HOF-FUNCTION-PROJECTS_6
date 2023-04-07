const urlRegex = /^(https?:\/\/)[\w\d\-._~:/?#\[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

function isValidURL(url) {
  return urlRegex.test(url);
}

// Test the function with some sample inputs
console.log(isValidURL("http://www.example.com")); // true
console.log(isValidURL("https://www.example.com/path/to/file.html")); // true
console.log(isValidURL("ftp://www.example.com")); // false
console.log(isValidURL("http://localhost:8080")); // true

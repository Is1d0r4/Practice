function ajax(url, options) {
  return new Promise((resolve, reject) => {
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const xhr = new XMLHttpRequest();
    const method = options.method || "GET";
    const headers = options.headers || {};
    const body = options.body || null;
    const timeout = options.timeout || 0;

    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const jsonResponse = JSON.parse(xhr.responseText);
        resolve(jsonResponse);
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.onerror = () => reject(xhr.error);
    xhr.ontimeout = () => reject(new Error("Request timeout"));
    xhr.timeout = timeout;
    for (const [header, value] of Object.entries(headers)) {
      xhr.setRequestHeader(header, value);
    }
    xhr.send(body);
  });
}

ajax("https://reqres.in/api/users", { method: "GET" }).then((data) => {
  console.log("data: ", data);
});

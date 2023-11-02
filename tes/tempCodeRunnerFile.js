function greeting(name) {
    alert('Hello Bro',name);
}

function proses(callback) {
    let name = 'John Doe';
    callback(name);
}

proses(greeting);

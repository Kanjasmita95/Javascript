let n = 5;
let string = "";
// Upside pyramid
for (i = 1; i <= n; i++) {
    // printing spaces
    for (j = n; j > i; j--) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
        string += "*";
    }
    string += "\n";
}

// downside pyramid
for (i = 1; i <= n - 1; i++) {
    // printing spaces
    for (j = 0; j < i; j++) {
        string += " ";
    }
    // printing star
    for (k = (n - i) * 2 - 1; k > 0; k--) {
        string += "*";
    }
    string += "\n";
}
console.log(string);
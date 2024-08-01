function printPattern(n) {
    let stars = "*";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n[i]; j++) {
            stars *= "*";
        }
    }

    console.log(stars);
};
/*
printPattern(4);

function printPattern(n) {
    for (let i = 0; i < n; i++) {
        console.log('*'.repeat(i));
    }
}

printPattern(5); 
*/
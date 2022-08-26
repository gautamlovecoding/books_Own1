// for(let i=0; i<=5; i++){
//     process.stdout.write(`${i}`);
// }

// *
// **
// ***
// ****
// *****

for(let i=1; i<=5; i++){   // row
    for(j=1; j<=i; j++){     //column
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for(let i=1; i<=5; i++){   // row
    for(j=1; j<=i; j++){     //column
        process.stdout.write(`${i} `);
    }
    process.stdout.write("\n");
}

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

for(let i=1; i<=5; i++){   // row
    for(j=1; j<=i; j++){     //column
        process.stdout.write(`${j} `);
    }
    process.stdout.write("\n");
}

console.log("<<<<<<<<<<<<<<<<<<<<<<first>>>>>>>>>>>>>>>>>>>>>>")
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 
for(let i=5; i>=1; i--){   // row
    for(j=1; j<=i; j++){     //column
        process.stdout.write(`${j} `);
    }
    process.stdout.write("\n");
}

//      *
//     * *
//    * * *
//   * * * *

for(let i=1; i<=5; i++){   // row
    for(k=1; k<=(5-i); k++){
        process.stdout.write(" "); 
    }
    for(j=1; j<=i; j++){     //column
        process.stdout.write("*" + " ");
    }
    process.stdout.write("\n");
}

//      *
//     * *
//    * * *
//   * * * *

for(let i=5; i>=1; i--){   // row
    for(k=1; k<=(5-i); k++){
        process.stdout.write(" "); 
    }
    for(j=1; j<=i; j++){     //column
        process.stdout.write("*" + " ");
    }
    process.stdout.write("\n");
}


const factorial =(number) =>{
    if (number <= 1) {
        return 1;
    }

    return * factorial (number - 1);
};

const power =(a,b) => a ** b;

const max = (a,b ) => Math.max (a,b);
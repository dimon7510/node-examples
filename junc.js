const outerFn3 = () => {
    const x=5;
    const innerFn = () => console.log(x);
    return innerFn;
};

const closureTest = outerFn3();

closureTest();

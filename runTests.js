function runTests(testType){
    switch(testType){
        case "smoke":
            console.log("Running smoke tests");
            break;
        case "regression":
            console.log("Running regression tests");
            break
        case "sanity":
            console.log("Running Sanity tests");
            break;
        default:
            console.log("Running smoke tests");
    }

}
runTests("regression");
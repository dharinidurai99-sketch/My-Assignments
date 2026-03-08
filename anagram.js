function areAnagrams(str1, str2) {
    // Step 1: remove spaces and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // Step 2: sort the characters
    let sorted1 = str1.split('').sort().join('');
    let sorted2 = str2.split('').sort().join('');

    // Step 3 & 4: compare and return result
    return sorted1 === sorted2;
}

console.log(areAnagrams("listen", "silent"));



function areAnagrams(str1, str2) {
    // Step 1: remove spaces and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // Step 2: sort the characters
    let sorted1 = str1.split('').sort().join('');
    let sorted2 = str2.split('').sort().join('');

    // Step 3 & 4: compare and return result
    return sorted1 === sorted2;
}

console.log(areAnagrams("hello", "world"));
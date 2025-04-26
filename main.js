function banglaToEnglishNumber(banglaNum) {
    // Create a mapping from Bengali digits to English digits
    const banglaToEnglishMap = {
        "০": "0",
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9"
    };

    // Replace each Bengali digit in the string with its English equivalent
    return banglaNum
        .toString()
        .split("")
        .map((char) => banglaToEnglishMap[char] || char)
        .join("");
}

function englishToBanglaNumber(number) {
    const englishToBanglaMap = {
        0: "০",
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
        ".": "."
    };

    // Convert the number to string and replace each digit (including the decimal point) using the map
    return number
        .toString()
        .split("")
        .map((digit) => englishToBanglaMap[digit] || digit)
        .join("");
}
// English

function n2wEnglish(number) {
    number = banglaToEnglishNumber(number);

    if (number == 0) return "zero";

    const belowTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    const thousands = ["", "thousand", "million", "billion"];

    function helper(number) {
        if (number === 0) return "";
        else if (number < 20) return belowTwenty[number] + " ";
        else if (number < 100)
            return tens[Math.floor(number / 10)] + " " + helper(number % 10);
        else
            return (
                belowTwenty[Math.floor(number / 100)] +
                " hundred " +
                helper(number % 100)
            );
    }

    let result = "";
    let thousandIndex = 0;

    while (number > 0) {
        if (number % 1000 !== 0) {
            result =
                helper(number % 1000) + thousands[thousandIndex] + " " + result;
        }
        number = Math.floor(number / 1000);
        thousandIndex++;
    }

    return result.trim();
}

function getCent(num) {
    let word = "";

    let numStr = num.toString();
    let decimalIndex = numStr.indexOf(".");
    if (decimalIndex === -1) {
        return " Taka";
    }
    let number;
    let arr = numStr.slice(decimalIndex + 1);
    if (arr.length == 1) number = Number(arr[0]);
    if (arr.length >= 2) number = Number(arr[0]) * 10 + Number(arr[1]);

    return " Taka and " + n2wEnglish(number).trim() + " paisa";
}

function getAfterPointerEnglish(num) {
    let word = "";

    let numStr = num.toString();
    let decimalIndex = numStr.indexOf(".");
    if (decimalIndex === -1) {
        return "";
    }
    let arr = numStr.slice(decimalIndex + 1);

    for (let i = 0; i < arr.length; i++) {
        let digit = Number(arr[i]);
        word = word + " " + n2wEnglish(Number(digit));
    }

    return " point " + word.trim();
}

function numberToWordEnglish(number) {
    number = banglaToEnglishNumber(number);
    return n2wEnglish(Math.trunc(number)) + getAfterPointerEnglish(number);
}

function numberToCurrencyEnglish(number) {
    number = banglaToEnglishNumber(number);

    return n2wEnglish(Math.trunc(number)) + getCent(number);
}

// bangla

const BanglaNumber = {
    0: "",
    1: "এক",
    2: "দুই",
    3: "তিন",
    4: "চার",
    5: "পাঁচ",
    6: "ছয়",
    7: "সাত",
    8: "আট",
    9: "নয়",
    10: "দশ",
    11: "এগারো",
    12: "বারো",
    13: "তেরো",
    14: "চৌদ্দ",
    15: "পনেরো",
    16: "ষোল",
    17: "সতেরো",
    18: "আঠারো",
    19: "উনিশ",
    20: "বিশ",
    21: "একুশ",
    22: "বাইশ",
    23: "তেইশ",
    24: "চব্বিশ",
    25: "পঁচিশ",
    26: "ছাব্বিশ",
    27: "সাতাশ",
    28: "আটাশ",
    29: "ঊনত্রিশ",
    30: "ত্রিশ",
    31: "একত্রিশ",
    32: "বত্রিশ",
    33: "তেত্রিশ",
    34: "চৌত্রিশ",
    35: "পঁয়ত্রিশ",
    36: "ছত্রিশ",
    37: "সাঁইত্রিশ",
    38: "আটত্রিশ",
    39: "ঊনচল্লিশ",
    40: "চল্লিশ",
    41: "একচল্লিশ",
    42: "বিয়াল্লিশ",
    43: "তেতাল্লিশ",
    44: "চুয়াল্লিশ",
    45: "পঁয়তাল্লিশ",
    46: "ছেচল্লিশ",
    47: "সাতচল্লিশ",
    48: "আটচল্লিশ",
    49: "ঊনপঞ্চাশ",
    50: "পঞ্চাশ",
    51: "একান্ন",
    52: "বাহান্ন",
    53: "তিপ্পান্ন",
    54: "চুয়ান্ন",
    55: "পঞ্চান্ন",
    56: "ছাপ্পান্ন",
    57: "সাতান্ন",
    58: "আটান্ন",
    59: "ঊনষাট",
    60: "ষাট",
    61: "একষট্টি",
    62: "বাষট্টি",
    63: "তেষট্টি",
    64: "চৌষট্টি",
    65: "পঁষট্টি",
    66: "ছেষট্টি",
    67: "সাতষট্টি",
    68: "আটষট্টি",
    69: "ঊনসত্তর",
    70: "সত্তর",
    71: "একাত্তর",
    72: "বাহাত্তর",
    73: "তিয়াত্তর",
    74: "চুয়াত্তর",
    75: "পঁচাত্তর",
    76: "ছিয়াত্তর",
    77: "সাতাত্তর",
    78: "আটাত্তর",
    79: "ঊনআশি",
    80: "আশি",
    81: "একাশি",
    82: "বিরাশি",
    83: "তিরাশি",
    84: "চুরাশি",
    85: "পঁচাশি",
    86: "ছিয়াশি",
    87: "সাতাশি",
    88: "আটাশি",
    89: "ঊননব্বই",
    90: "নব্বই",
    91: "একানব্বই",
    92: "বিরানব্বই",
    93: "তিরানব্বই",
    94: "চুরানব্বই",
    95: "পঁচানব্বই",
    96: "ছিয়ানব্বই",
    97: "সাতানব্বই",
    98: "আটানব্বই",
    99: "নিরানব্বই",
    100: "শত",
    1000: "হাজার",
    100000: "লাখ",
    10000000: "কোটি",
    1000000000: "বিলিয়ন",
    1000000000000: "ট্রিলিয়ন",
    1000000000000000: "কোয়াড্রিলিয়ন"
};

function generateBanglaNumber(number, words = "") {
    if (number in BanglaNumber) return BanglaNumber[number];

    // [কোটি, লাখ, হাজার, শতক]
    [
        // 1000000000000000, 1000000000000, 1000000000, 10000000, 100000, 1000, 100
        10000000,
        100000, 1000, 100
    ].forEach((prefix) => {
        if (number >= prefix) {
            let extraDigits = Math.floor(number / prefix);
            words =
                words +
                " " +
                generateBanglaNumber(extraDigits) +
                " " +
                BanglaNumber[prefix];

            number %= prefix;
        }
    });

    words = words + " " + BanglaNumber[number]; // একক এবং দশক
    return words.trim();
}

function getAfterPointerBangla(num) {
    let word = "";

    let numStr = num.toString();
    let decimalIndex = numStr.indexOf(".");
    if (decimalIndex === -1) {
        return "";
    }
    let arr = numStr.slice(decimalIndex + 1);

    for (let i = 0; i < arr.length; i++) {
        let digit = Number(arr[i]);
        word = word + " " + numberToWordBangla(Number(digit));
    }

    return " দশমিক " + word.trim();
}

function numberToWordBangla(number) {
    number = banglaToEnglishNumber(number);
    let integerValue = Math.trunc(number);

    if (integerValue == 0) return "শুন্য";
    if (integerValue < 0) number = Math.abs(number);
    if (integerValue in BanglaNumber && integerValue >= 100)
        return (
            "এক " + BanglaNumber[integerValue] + getAfterPointerBangla(number)
        );

    return generateBanglaNumber(integerValue) + getAfterPointerBangla(number);
}

function getPaisa(num) {
    let word = "";

    let numStr = num.toString();
    let decimalIndex = numStr.indexOf(".");
    if (decimalIndex === -1) {
        return " টাকা";
    }
    let arr = numStr.slice(decimalIndex + 1);
    if (arr.length == 1) word = numberToWordBangla(Number(arr[0]));
    if (arr.length >= 2) {
        let number = Number(arr[0]) * 10 + Number(arr[1]);
        word = numberToWordBangla(number);
    }

    return " টাকা " + word.trim() + " পয়সা";
}

function numberToCurrencyBangla(number) {
    number = banglaToEnglishNumber(number);
    let integerValue = Math.trunc(number);

    if (integerValue == 0) return "শুন্য";
    if (integerValue < 0) integerValue = Math.abs(integerValue);
    if (integerValue in BanglaNumber && integerValue >= 100)
        return "এক " + BanglaNumber[integerValue] + getPaisa(number);

    return generateBanglaNumber(integerValue) + getPaisa(number);
}

// Bangladesh Context in English #Lakh, Crore
const EnglishNumberBD = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "thirty",
    31: "thirty one",
    32: "thirty two",
    33: "thirty three",
    34: "thirty four",
    35: "thirty five",
    36: "thirty six",
    37: "thirty seven",
    38: "thirty eight",
    39: "thirty nine",
    40: "forty",
    41: "forty one",
    42: "forty two",
    43: "forty three",
    44: "forty four",
    45: "forty five",
    46: "forty six",
    47: "forty seven",
    48: "forty eight",
    49: "forty nine",
    50: "fifty",
    51: "fifty one",
    52: "fifty two",
    53: "fifty three",
    54: "fifty four",
    55: "fifty five",
    56: "fifty six",
    57: "fifty seven",
    58: "fifty eight",
    59: "fifty nine",
    60: "sixty",
    61: "sixty one",
    62: "sixty two",
    63: "sixty three",
    64: "sixty four",
    65: "sixty five",
    66: "sixty six",
    67: "sixty seven",
    68: "sixty eight",
    69: "sixty nine",
    70: "seventy",
    71: "seventy one",
    72: "seventy two",
    73: "seventy three",
    74: "seventy four",
    75: "seventy five",
    76: "seventy six",
    77: "seventy seven",
    78: "seventy eight",
    79: "seventy nine",
    80: "eighty",
    81: "eighty one",
    82: "eighty two",
    83: "eighty three",
    84: "eighty four",
    85: "eighty five",
    86: "eighty six",
    87: "eighty seven",
    88: "eighty eight",
    89: "eighty nine",
    90: "ninety",
    91: "ninety one",
    92: "ninety two",
    93: "ninety three",
    94: "ninety four",
    95: "ninety five",
    96: "ninety six",
    97: "ninety seven",
    98: "ninety eight",
    99: "ninety nine",
    100: "hundred",
    1000: "thousand",
    100000: "lakh",
    10000000: "crore"
};

function getn2wEnglishBD(num) {
    if (num === 0) return "zero";

    const belowTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];
    const scales = ["", "thousand", "lakh", "crore"];

    function convertToWords(n) {
        let result = "";

        if (n >= 100) {
            result += belowTwenty[Math.floor(n / 100)] + " hundred ";
            n %= 100;
        }

        if (n >= 20) {
            result += tens[Math.floor(n / 10)] + " ";
            n %= 10;
        }

        if (n > 0) {
            result += belowTwenty[n] + " ";
        }

        return result.trim();
    }

    let words = "";
    let scaleIndex = 0;

    while (num > 0) {
        const part = num % 1000;

        if (part > 0) {
            const scaleName = scales[scaleIndex]
                ? " " + scales[scaleIndex]
                : "";
            words = convertToWords(part) + scaleName + " " + words;
        }

        num = Math.floor(num / 1000);
        scaleIndex++;
    }

    return words.trim();
}

function generateBanglaNumberBD(number, words = "") {
    if (number in EnglishNumberBD) return EnglishNumberBD[number];

    // [Crore, Lakh, thousand, hundred]
    [10000000, 100000, 1000, 100].forEach((prefix) => {
        if (number >= prefix) {
            let extraDigits = Math.floor(number / prefix);
            words =
                words +
                " " +
                generateBanglaNumberBD(extraDigits) +
                " " +
                EnglishNumberBD[prefix];

            number %= prefix;
        }
    });

    words = words + " " + EnglishNumberBD[number]; // একক এবং দশক
    return words.trim();
}

function getAfterPointerBanglaBD(num) {
    let word = "";

    let numStr = num.toString();
    let decimalIndex = numStr.indexOf(".");
    if (decimalIndex === -1) {
        return "";
    }
    let arr = numStr.slice(decimalIndex + 1);

    for (let i = 0; i < arr.length; i++) {
        let digit = Number(arr[i]);
        word = word + " " + numberToWordBanglaBD(Number(digit));
    }

    return " point " + word.trim();
}

function numberToWordBanglaBD(number) {
    number = banglaToEnglishNumber(number);
    let integerValue = Math.trunc(number);

    if (integerValue == 0) return "zero";
    if (integerValue < 0) number = Math.abs(number);
    if (integerValue in EnglishNumberBD && integerValue >= 100)
        return (
            "one " +
            EnglishNumberBD[integerValue] +
            getAfterPointerBanglaBD(number)
        );

    return (
        generateBanglaNumberBD(integerValue) + getAfterPointerBanglaBD(number)
    );
}

function getPaisaBD(num) {
    let word = "";

    let numStr = num.toString();
    let decimalIndex = numStr.indexOf(".");
    if (decimalIndex === -1) {
        return " taka";
    }
    let arr = numStr.slice(decimalIndex + 1);
    if (arr.length == 1) word = numberToWordBanglaBD(Number(arr[0]));
    if (arr.length >= 2) {
        let number = Number(arr[0]) * 10 + Number(arr[1]);
        word = numberToWordBanglaBD(number);
    }

    return " taka " + word.trim() + " paisa";
}

function numberToCurrencyBanglaBD(number) {
    number = banglaToEnglishNumber(number);
    let integerValue = Math.trunc(number);

    if (integerValue == 0) return "zero";
    if (integerValue < 0) integerValue = Math.abs(integerValue);
    if (integerValue in EnglishNumberBD && integerValue >= 100)
        return "one " + EnglishNumberBD[integerValue] + getPaisaBD(number);

    return generateBanglaNumberBD(integerValue) + getPaisaBD(number);
}

// Extra
function isNumber(str) {
    // Remove leading and trailing whitespace
    str = str.trim();

    // Check for an optional minus sign at the beginning
    if (str.startsWith("-")) {
        str = str.substring(1);
    }

    // Check if the remaining string contains only digits and at most one decimal point
    return /^[0-9]*\.?[0-9]+$/.test(str);
}

function stringToNumber(str) {
    // Remove leading and trailing whitespaces
    str = str.trim();

    // Check for negative sign
    let isNegative = false;
    if (str.startsWith("-")) {
        isNegative = true;
        str = str.substring(1);
    }

    // Check for decimal point
    let decimalIndex = str.indexOf(".");
    let integerPart, decimalPart;
    if (decimalIndex !== -1) {
        integerPart = str.substring(0, decimalIndex);
        decimalPart = str.substring(decimalIndex + 1);
    } else {
        integerPart = str;
        decimalPart = "";
    }

    // Convert integer part to number
    let number = 0;
    for (let i = 0; i < integerPart.length; i++) {
        number = number * 10 + (integerPart.charCodeAt(i) - 48);
    }

    // Convert decimal part to number
    if (decimalPart.length > 0) {
        let decimalValue = 0;
        for (let i = 0; i < decimalPart.length; i++) {
            decimalValue = decimalValue * 10 + (decimalPart.charCodeAt(i) - 48);
        }
        number += decimalValue / Math.pow(10, decimalPart.length);
    }

    // Apply negative sign if necessary
    if (isNegative) {
        number = -number;
    }

    return number;
}

// module.exports = {
//     numberToCurrencyBangla,
//     numberToCurrencyBanglaBD,
//     numberToCurrencyEnglish,
//     numberToWordBangla,
//     numberToWordBanglaBD,
//     numberToWordEnglish,
//     banglaToEnglishNumber,
//     englishToBanglaNumber,
//     isNumber,
//     stringToNumber
// };

function getNumberToWord(number) {
    return {
        number_bn: englishToBanglaNumber(number),
        word_bn: numberToWordBangla(number),
        word_en_bd: numberToWordBanglaBD(number),
        currency_bn: numberToCurrencyBangla(number),
        currency_en_bd: numberToCurrencyBanglaBD(number),
        number_en: banglaToEnglishNumber(number),
        word_en_int: numberToWordEnglish(number),
        currency_en_int: numberToCurrencyEnglish(number)
    };
}

const input = document.getElementById("input-number");
document.getElementById("input-number").addEventListener("input", () => {
    const number = Number(input.value);
    let obj;

    // if (typeof number !== "string") {
    //     console.error("isNumber was passed a non-string:", number);
    console.log(number);
    console.log(typeof number);

    //     return false; // Or handle non-string values
    // }

    // if (isNumber(number) == false) {
    //     document.getElementById("output1").value = "Please input a number";
    //     return;
    // }

    obj = getNumberToWord(number);
    document.getElementById("output1").innerText = obj.number_bn;
    document.getElementById("output2").innerText = obj.word_bn;
    document.getElementById("output3").innerText = obj.word_en_bd;
    document.getElementById("output4").innerText = obj.currency_bn;
    document.getElementById("output5").innerText = obj.currency_en_bd;
    document.getElementById("output6").innerText = obj.number_en;
    document.getElementById("output7").innerText = obj.word_en_int;
    document.getElementById("output8").innerText = obj.currency_en_int;
});

const textareas = document.getElementsByTagName("textarea");

[...textareas].forEach((textarea) => {
    textarea.addEventListener("click", () => {
        textarea.select(); // Select all text

        // Copy to clipboard
        navigator.clipboard
            .writeText(textarea.value)
            .then(() => {
                console.log("Text copied to clipboard:", textarea.value);
            })
            .catch((err) => {
                console.error("Failed to copy text:", err);
            });
    });
});

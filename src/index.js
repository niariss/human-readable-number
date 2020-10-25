module.exports = function toReadable (number) {
    number = String(number);

    switch (number.length){
        case 1: return getOneBitName(number);
        case 2: return getTwoBitName(number);
        case 3: return getThreeBitName(number);
    }

    function getOneBitName(number) {    
        switch (number) {
            case "0":
                return 'zero';
            case "1":
                return 'one';
            case "2":
                return 'two';
            case "3":
                return 'three';
            case "4":
                return 'four';
            case "5":
                return 'five';
            case "6":
                return 'six';
            case "7":
                return 'seven';
            case "8":
                return 'eight';
            case "9":
                return 'nine';
        };

    }

    function getTwoBitName(number) {
        switch (number) {
            case "10":
                return 'ten'
            case "11":
                return 'eleven'
            case "12":
                return 'twelve'
            case "13":
                return 'thirteen'
            case "14":
                return 'fourteen'
            case "15":
                return 'fifteen'
            case "16":
                return 'sixteen';
            case "17":
                return 'seventeen';
            case "18":
                return 'eighteen';
            case "19":
                return 'nineteen';            
        };

        let tens = number[0];
        let ones = number[1];

        

        let tensName = getTensName(tens);
        let onesName = getOneBitName(ones);
        

        if (ones !== "0"){
            return tensName + ' ' + onesName;
        }
        
        
        return  tensName;
        
        

        function getTensName (number) {            
            switch (tens) {
                case "2":
                    return 'twenty';
                case "3":
                    return 'thirty';
                case "4":
                    return 'forty';
                case "5":
                    return 'fifty';
                case "6":
                    return 'sixty';
                case "7":
                    return 'seventy';
                case "8":
                    return 'eighty';
                case "9":
                    return 'ninety';
                
            };
        }
        
    }   

    function getThreeBitName(number) {
        let hundreds = number[0];
        let tens = number[1];
        let ones = number[2];
        let twoBitNumber = number.substring(1);
        let oneBitName = getOneBitName(ones);
        let twoBitName = getTwoBitName(twoBitNumber);
        let hundredsName = getOneBitName(hundreds);
        if ( ones === "0" && tens === "0"){
            return hundredsName + ' ' + 'hundred'
        }
        if (tens === "0"){
            return hundredsName + ' ' + 'hundred' + ' ' + oneBitName;
        }
        
        
    
        return hundredsName + ' ' + 'hundred' + ' ' + twoBitName;
    }
}
/*
** Compute the difference between two input strings.
** @param {String} my_string1, my_string2 Strings to be compared.
** @return {Integer} levens The difference/distance between the two strings.
*/

function my_levenshtein(my_string1, my_string2) {
	if(my_string1 != undefined && my_string2 != undefined) {
        if(my_string1.length == my_string2.length) {
            levens = 0;
            // console.log("levens is 0");  test if condition works
            index = 0;
            while(index < my_string1.length) {
                if(my_string1[index] != my_string2[index]) {
                    levens++;
                }
                index++;
            }
            return levens;

        } else {
            return -1;
        }
    } else {
        return 0;
    }
}

result = my_levenshtein("abc", "ddd");
console.log(result);
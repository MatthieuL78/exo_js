
function my_max(array)
{	
	array.sort(function(a, b) {
		return a - b;
	})
	console.log(array);
	return array;
}

function vowel_count(string)
{
	var result = string.match(/[aeiouy]/gi);
	console.log(result.length);
	return result === null ? 0 : result.length;
}

function reverse(string)
{
	var result = "";
	var array = string.split("");
	for (var i = array.length - 1; i >= 0; i--) {
		result += array[i] 
	}
	return result;
}

my_array = [2, 4, 2, 5, 6, 3, 1];

my_max(my_array);

my_string = "abcdefghijklmnopqrstuvwxyz";

vowel_count(my_string);

my_string = "bonjour monde !";

reverse(my_string);
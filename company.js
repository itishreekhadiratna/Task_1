// var compName="As_Asteris solution pvt lim.";
//  var a=compName.substr(0,8);
// console.log(a);
// var companyName="Asteris solution pvt limted";
// var cut=console.log(companyName.substr(0,5));
// console.log(As_cut);
var inputName = "Hello Cd";
var rep = inputName.replaceAll(' ', '');
var outputName = newName(rep);


function newName(name) {
    let fixedStirng = "AS_";
    let result = null;
    if (name.length >= 4) {
        var cut = name.substr(0, 5);
        result = fixedStirng.concat(cut).toUpperCase();
        console.log(result);
    }
    else {
        result = fixedStirng.concat(name).toUpperCase();
        console.log(result);
    }
    if (result.length > 8) {
        console.log('invalid Company code');
    }
    else {
        console.log('valid Company code');

    }


}



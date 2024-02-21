/*----------------------
1/positive or negative
--------------------*/
// let x=0;
// if(x>0){
//     console.log(x,"positive number");
// }
// else if(x<0){
//     console.log(x,"negative number");
// }
// else{
//     console.log("zero");
// }

// let a=-43;
// a>0 ? console.log("positive number"): console.log("negative number");


/*---------------
2/odd or even
--------------*/
// let a=45;
// if(a%2==0){
//     console.log(a,"even number");
// }
// else{
//     console.log(a,"is odd number");
// }


/*----------------------
3/max between two number
----------------------*/
// let a=34;
// let b=14;
// if(a>b){
//     console.log("a is max number");
// }
// else if(a==b){
//     console.log("both is equal");
// }
// else{
//     console.log("b is max number");
// }



/*--------------------
4/max between 3 number
---------------------*/
// let a=93;
// let b=49;
// let c=46;
// if(a>b&&a>c){
//     console.log("a is max number");
// }
// else if(b>a&&b>c){
//     console.log("b is max number");
// }
// else{
//     console.log("c is big number");
// }


/*week number and console total days*/

// let week=7;
// console.log(week*5,"days");

// let year=12;
// console.log(year*2,"month");


/*----------------
5/vowel-consonant
----------------*/
// let letter="o";
// switch(letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("vowel");
//         break;
//     default:
//         console.log("consonant");
// }



/*-----------
10/current bill
-------------*/
// let unit=25;
// let additional_meter_charge=55;
// if(unit<=50){
//     let par_unit=.50;
//     let result=(unit*par_unit)+additional_meter_charge;
//     console.log(result);
// }
// else if(unit<=100){
//     let par_unit=.75;
//     let result=(unit*par_unit)+additional_meter_charge;
//     console.log(result);
// }
// else if(unit<=250){
//     let par_unit=1.20;
//     let result=(unit*par_unit)+additional_meter_charge;
//     console.log(result);
// }
// else{
//     let par_unit=1.50;
//     let result=(unit*par_unit)+additional_meter_charge;
//     console.log(result);
// }


/*--------------------------------------------------------------
7/input month number and console number of days in that month
// --------------------------------------------------------------*/
// let year=2021
// let month=2
// let feb=(year%4==0 && year%100!==0)||(year%400==0)?28:29
// if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//     console.log(31);
// }
// else if(month==4 || month==6 || month==9 || month==11){
//     console.log(30);
// }
// else if(month==2){
//     console.log(feb);

// }
// else{
//     console.log("no month");
// }





/*-------------------
9/Result sheet
// -----------------------*/
// let marks=33;
// if(marks>=80){
//     console.log("A+");
// }
// else if(marks>=70){
//     console.log("A");
// }
// else if(marks>=60){
//     console.log("A-");
// }
// else if(marks>=50){
//     console.log("B");
// }
// else if(marks>=40){
//     console.log("C");
// }
// else{
//     console.log("F");
// }



/*-----------------------
8/number of day in a date
// -------------------------*/
// let year=2001
// let month=2
// let day=0
// totalDays=0
// let feb=(year%4==0 && year%100!==0)||(year%400==0)?29:28
// if(month==1){
//     totalDays=day
// }
// else if(month==2){
//     totalDay=31+day
// }
// else if(month==3){
//     totalDay=31+feb+day
// }

// console.log(totalDay);




/*loop part*/
/*--------------------
caculate the avarage marks
// --------------------*/
// let math=75.25
// let biology=56
// let chemestry=80
// let physics=35.45
// let bangla =99.5
// let totalMarks=(math+biology+chemestry+physics+bangla)/5
// console.log(totalMarks.toFixed(2));



// const numbers=[12,34,56,78,45,23,67,89,14,5];
// numbers.forEach(number=>{
//     if(number<50){
//         console.log(number);
//     }
// });


/*--------------
odd number
-------------*/
 for(let i=1;i<=100;i=i+2){
     console.log(i);
 }

 for(let x=2;x<=100;x=x+2){
     console.log(x);
}

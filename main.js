/* here is the situation where i borrowed some money from my friend and promised him to return it back by the next day
if it resolve/fulfilled the resolved value will be printed else reject value will be printed.
*/
let givemoney = new Promise((fulfilled, fail) => {
    fail(`Money has not given on the time`);
    //fulfilled(`Money returned`)
});
givemoney.then((value) => {
    console.log(value);
    console.log(`Here is your amount, thanks man!`);
}).catch((value) => {
    console.log(value);
    console.log(`Sorry i couldn't give your amount on time, trying best to give it back asap.`);
});
export {};

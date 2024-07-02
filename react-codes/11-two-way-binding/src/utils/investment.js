// this func expects a js object as an argument
// object 'd contain the following properties: 

// initialInvestent - the initial investment amount (principal amount)
// annualInvestment - the amount invested every year
// expectedreturn - the expected annual rate of return
// duration - the duration period/ time frame of the investment

export function calcInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration }) {

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i=0; i< duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        // console.log(interestEarnedInYear);
        investmentValue += interestEarnedInYear + annualInvestment;
        annualData.push({
            year: i + 1,
            //  year identifier

            interest: interestEarnedInYear,
            // amount of interest earned in that year

            valueEndOfYear: investmentValue,
            // investment value at the end of the year

            annualInvestment: annualInvestment,
            // investment added in the year
        });
    }

    return annualData;
};

// the browser provided initial API is used to prepare a formatted object
//  this obj offers a 'format()' method that can be used to format numbers as currency
// example : formatter.format() ==> yields '$1,000'

export const formatter = new Intl.NumberFormat('en-US',{
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0,
});

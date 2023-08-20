const simpleInterestCalculator = (p, r, t) => {
    // Assumes that data has been sanitised to the Numerical inputs {p, r, t}

    const totalInterestEarned = (p * r * t)

    const finalBalance = p + totalInterestEarned

    return {"totalInterestEarned": totalInterestEarned.toFixed(0), "finalBalance": finalBalance.toFixed(0) }
};

const compoundInterestCalculator = (principalAmount, rate, term, interval) => {
     // Assumes that data has been sanitised to the Numerical inputs {p, r, t}

    const finalBalance = principalAmount * (1 + rate / interval) ** (interval * term)

    const totalInterestEarned = finalBalance - principalAmount

    return {"totalInterestEarned": totalInterestEarned.toFixed(0), "finalBalance": finalBalance.toFixed(0) }
};

export {simpleInterestCalculator, compoundInterestCalculator};


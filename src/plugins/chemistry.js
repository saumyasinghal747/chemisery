// checks if b is between a and c
function between(a,b,c){
    return 0 > (a-b)/(c-b)
}

export function tempChangeEnthalpy(startTemp,
                                   endTemp, mass,
                                   { gasSpecificHeat, liquidSpecificHeat, solidSpecificHeat,
                                       fusionEnthalpy, vaporEnthalpy , molarMass, boilingPoint, meltingPoint}
                                       = { gasSpecificHeat: 1.84, liquidSpecificHeat: 4.18, solidSpecificHeat: 2.09,
                                   fusionEnthalpy: 6.01, vaporEnthalpy: 4.07, molarMass: 18.02,
                                       boilingPoint:100, meltingPoint:0
                                   }
){
    let totalEnergy = 0;

    // gaseous phase
    {
        // figure out where to start
        const startingPoint = Math.max(boilingPoint, startTemp);
        const endingPoint = Math.max(boilingPoint, endTemp);
        totalEnergy += mass*gasSpecificHeat*(startingPoint-endingPoint); // cooling would reduce the energy
    }
    // vaporization
    if (between(startTemp, boilingPoint, endTemp)) {
        totalEnergy += vaporEnthalpy*mass/molarMass*1000
    }
    // liquid phase
    {
        // figure out where to start
        const startingPoint = Math.max(Math.min(boilingPoint, startTemp), meltingPoint);
        const endingPoint = Math.max(Math.min(boilingPoint, endTemp), meltingPoint);
        totalEnergy += mass*liquidSpecificHeat*(startingPoint-endingPoint); // cooling would reduce the energy
    }
    // fusion
    if (between(startTemp, meltingPoint, endTemp)) {
        totalEnergy += fusionEnthalpy*mass/molarMass*1000
    }
    // solid phase
    {
        const startingPoint = Math.min(meltingPoint, startTemp);
        const endingPoint = Math.min(meltingPoint, endTemp);
        totalEnergy += mass*solidSpecificHeat*(startingPoint-endingPoint);
    }
    // done

    return totalEnergy
}


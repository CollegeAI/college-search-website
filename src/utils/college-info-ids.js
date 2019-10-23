// @flow

const collegeInfoIds = [
  {
    infoId: "name",
    path: "name"
  },
  { infoId: "majorGraduates", path: "academics.majors" },
  {
    infoId: "entryProb",
    path: "academics.academicIndex.entryProb.distribution"
  },
  {
    infoId: "appliedDist",
    path: "academics.academicIndex.applied.distribution"
  },
  {
    infoId: "acceptedDist",
    path: "academics.academicIndex.accepted.distribution"
  },
  { infoId: "classSizeRangeOver100", path: "academics.classSize.rangeOver100" },
  { infoId: "classSizeRange2To9", path: "academics.classSize.range2To9" },
  { infoId: "classSizeRange10To19", path: "academics.classSize.range10To19" },
  { infoId: "classSizeRange20To29", path: "academics.classSize.range20To29" },
  { infoId: "classSizeRange30To39", path: "academics.classSize.range30To39" },
  { infoId: "classSizeRange40To49", path: "academics.classSize.range40To49" },
  { infoId: "classSizeRange50To99", path: "academics.classSize.range50To99" },
  {
    infoId: "numberOfFullTimeFaculty",
    path: "academics.staff.numberOfFullTimeFaculty"
  },
  {
    infoId: "numberOfPartTimeFaculty",
    path: "academics.staff.numberOfPartTimeFacult"
  },

  // typicalSatRange: c =>  `${Math.round(
  // typicalActRange: c.admissions.act.cumulative

  { infoId: "totalEnrolled", path: "admissions.enrolled.total" },
  { infoId: "acceptanceRate", path: "admissions.acceptanceRate" },
  {
    infoId: "studentsSubmittingACT",
    path: "admissions.act.percentSubmitting"
  },
  {
    infoId: "studentsSubmittingSAT",
    path: "admissions.sat.percentSubmitting"
  },
  { infoId: "totalApplicants", path: "admissions.applicants.total" },
  { infoId: "menApplicants", path: "admissions.applicants.men" },
  { infoId: "womenApplicants", path: "admissions.applicants.women" },
  { infoId: "totalAdmitted", path: "admissions.applicants.total" },
  { infoId: "menAdmitted", path: "admissions.applicants.men" },
  { infoId: "womenAdmitted", path: "admissions.applicants.women" },
  { infoId: "totalEnrolled", path: "admissions.enrolled.total" },
  { infoId: "menEnrolled", path: "admissions.enrolled.men" },
  { infoId: "womenEnrolled", path: "admissions.enrolled.women" },
  { infoId: "hsGPARequirement", path: "admissions.hsGPARequirement" },
  { infoId: "hsRankRequirement", path: "admissions.hsRankRequirement" },
  {
    infoId: "secondarySchoolRecordRequirement",
    path: "admissions.secondarySchoolRecordRequirement"
  },
  { infoId: "TOEFLRequirement", path: "admissions.TOEFLRequirement" },
  {
    infoId: "completionOfCollegePreparatoryProgram",
    path: "admissions.completionOfCollegePreparatoryProgram"
  },
  { infoId: "recommendations", path: "admissions.recommendations" },
  {
    infoId: "formalDemonstrationOfCompetencies",
    path: "admissions.formalDemonstrationOfCompetencies"
  },
  { infoId: "admissionTestScores", path: "admissions.admissionTestScores" },
  { infoId: "otherTest", path: "admissions.otherTest" },
  { infoId: "satMathPercentile25", path: "admissions.sat.math.percentile25" },
  { infoId: "satMathPercentile75", path: "admissions.sat.math.percentile75" },
  {
    infoId: "satReadingPercentile25",
    path: "admissions.sat.reading.percentile25"
  },
  {
    infoId: "satReadingPercentile75",
    path: "admissions.sat.reading.percentile75"
  },
  {
    infoId: "actCumulativePercentile25",
    path: "admissions.act.cumulative.percentile25"
  },
  {
    infoId: "actCumulativePercentile75",
    path: "admissions.act.cumulative.percentile75"
  },
  { infoId: "actMathPercentile25", path: "admissions.act.math.percentile25" },
  { infoId: "actMathPercentile75", path: "admissions.act.math.percentile75" },
  {
    infoId: "actEnglishPercentile25",
    path: "admissions.act.english.percentile25"
  },
  {
    infoId: "actEnglishPercentile75",
    path: "admissions.act.english.percentile75"
  },
  {
    infoId: "actSciencePercentile25",
    path: "admissions.act.science.percentile25"
  },
  {
    infoId: "actSciencePercentile75",
    path: "admissions.act.science.percentile75"
  },
  {
    infoId: "actWritingPercentile25",
    path: "admissions.act.writing.percentile25"
  },
  {
    infoId: "actWritingPercentile75",
    path: "admissions.act.writing.percentile75"
  },

  { infoId: "federalLoanRate", path: "aid.federalLoanRate" },
  { infoId: "loanPrincipal", path: "aid.loanPrincipal" },
  {
    infoId: "percentStudentsReceivingFederalGrantAid",
    path: "aid.percentOfUndergraduateStudentsAwardedFederalStudentLoans"
  },

  { infoId: "avgCostOfAttendance", path: "cost.avgCostOfAttendance" },
  { infoId: "averageNetCost", path: "cost.avgNetPrice" },
  { infoId: "avgNetPrice", path: "cost.avgNetPrice" },
  { infoId: "inStateTuition", path: "cost.tuition.inState" },
  { infoId: "outOfStateTuition", path: "cost.tuition.outOfState" },
  {
    infoId: "anyAlternativeTuitionPlansOfferedByInstitution",
    path: "cost.plans.anyAlternativeTuitionPlansOfferedByInstitution"
  },
  { infoId: "tuitionGuaranteePlan", path: "cost.plans.tuitionGuaranteed" },
  { infoId: "prepaidTuitionPlan", path: "cost.plans.prepaidTuition" },
  { infoId: "tuitionPaymentPlan", path: "cost.plans.tuitionPayment" },
  {
    infoId: "otherAlternativeTuitionPlan",
    path: "cost.plans.otherAlternativeTuitionPlan"
  },
  {
    infoId: "percentOfStudentsWhoReceiveFinancialAid",
    path: "aid.studentsWithAnyLoan"
  },
  {
    infoId: "studentShareByIncomeLevel0To30000",
    path: "student.shareIncome.range0To30000"
  },
  {
    infoId: "studentShareByIncomeLevel30001To48000",
    path: "student.shareIncome.range30001To48000"
  },
  {
    infoId: "studentShareByIncomeLevel480001To75000",
    path: "student.shareIncome.range48001To75000"
  },
  {
    infoId: "studentShareByIncomeLevel75001To110000",
    path: "student.shareIncome.range75001To110000"
  },
  {
    infoId: "studentShareByIncomeLevel110001Plus",
    path: "student.shareIncome.range110000Plus"
  },
  { infoId: "netPriceByIncomeLevel", path: "cost.netPriceByIncomeLevel" },
  {
    infoId: "netPriceByIncomeLevel0To3000",
    path: "cost.netPriceByIncomeLevel.range0To30000"
  },
  {
    infoId: "netPriceByIncomeLevel30001To48000",
    path: "cost.netPriceByIncomeLevel.range30001To48000"
  },
  {
    infoId: "netPriceByIncomeLevel48001To75000",
    path: "cost.netPriceByIncomeLevel.range48001To75000"
  },
  {
    infoId: "netPriceByIncomeLevel75001To110000",
    path: "cost.netPriceByIncomeLevel.range75001To110000"
  },
  {
    infoId: "netPriceByIncomeLevel110001Plus",
    path: "cost.netPriceByIncomeLevel.range110001ToPlus"
  },
  { infoId: "percentMale", path: "demographics.men" },
  { infoId: "percentFemale", path: "demographics.women" },
  { infoId: "undergraduateSize", path: "school.size" },

  { infoId: "demographicsMen", path: "demographics.man" },
  { infoId: "demographicsWomen", path: "demographics.woman" },

  {
    infoId: "demographicsWhite",
    path: "demographics.percentageRaceEthnicity.white"
  },
  {
    infoId: "demographicsBlack",
    path: "demographics.percentageRaceEthnicity.black"
  },
  {
    infoId: "demographicsHisp",
    path: "demographics.percentageRaceEthnicity.hisp"
  },
  {
    infoId: "demographicsAsian",
    path: "demographics.percentageRaceEthnicity.asian"
  },
  {
    infoId: "demographicsAian",
    path: "demographics.percentageRaceEthnicity.aian"
  },
  {
    infoId: "demographicsNhpi",
    path: "demographics.percentageRaceEthnicity.nhpi"
  },
  {
    infoId: "demographics2mor",
    path: "demographics.percentageRaceEthnicity.2mor"
  },
  {
    infoId: "demographicsNra",
    path: "demographics.percentageRaceEthnicity.nra"
  },
  {
    infoId: "demographicsUnkn",
    path: "demographics.percentageRaceEthnicity.unkn"
  },

  {
    infoId: "demographicsAvgFamilyIncome",
    path: "demographics.avgfamilyincome"
  },
  {
    infoId: "demographicsMedianFamilyIncome",
    path: "demographics.medianfamilyincome"
  },
  {
    infoId: "demographicsMedianHouseholdIncome",
    path: "demographics.medianhhincome"
  },
  { infoId: "percentFirstGeneration", path: "demographics.firstgeneration" },
  { infoId: "averageAgeOfEntry", path: "demographics.ageentry" },

  {
    infoId: "onCampusHousingAvailable",
    path: "student.housing.providesOnCampusHousing"
  },
  {
    infoId: "freshmenRequiredToLiveOnCampus",
    path: "student.housing.freshmenRequiredToLiveOnCampus"
  },
  {
    infoId: "sororitiesPercentParticipation",
    path: "student.sororities.percentParticipation"
  },
  {
    infoId: "fraternitiesPercentParticipation",
    path: "student.fraternities.percentParticipation"
  },
  { infoId: "rotcOffered", path: "studentRotc.offered" },
  { infoId: "rotcArmyOffered", path: "studentRotc.army.offered" },
  { infoId: "rotcNavyOffered", path: "studentRotc.navy.offered" },
  { infoId: "rotcAirforceOffered", path: "studentRotc.airforce.offered" },
  { infoId: "city", path: "address.city" },
  { infoId: "stateAbbr", path: "address.state.abbr" },
  { infoId: "stateName", path: "address.state.name" },
  { infoId: "zipcode", path: "address.zipcode" },
  { infoId: "addr", path: "address.addr" },
  { infoId: "locationLat", path: "location.lat" },
  { infoId: "locationLong", path: "location.long" },
  { infoId: "aliases", path: "aliases" },
  { infoId: "colors", path: "colors" },
  { infoId: "isPrivate", path: "school.isPrivate" },
  { infoId: "localeClass", path: "school.localeClass" },
  { infoId: "localeSize", path: "school.localeSize" },
  { infoId: "studentFacultyRatio", path: "school.studentFacultyRatio" },
  { infoId: "typeYear", path: "type.year" },
  { infoId: "region", path: "school.region" },
  { infoId: "menOnly", path: "school.menOnly" },
  { infoId: "womenOnly", path: "school.womenOnly" },
  { infoId: "calendarSystem", path: "school.calendarSystem" },
  { infoId: "religiousAffiliation", path: "school.religiousAffiliation" },
  { infoId: "primaryFaith", path: "school.primaryFaith" },
  { infoId: "studentFacultyRatio", path: "school.studentFacultyRatio" },
  { infoId: "shortDescription", path: "description.short" },
  { infoId: "longDescription", path: "description.long" },
  { infoId: "descriptionCitation", path: "description.source.link" },
  { infoId: "financialAidWebsite", path: "links.fasite" },
  { infoId: "admissionsWebsite", path: "links.admissionsSite" },
  { infoId: "applicationWebsite", path: "links.applicationSite" },
  { infoId: "website", path: "links.website" },
  { infoId: "netPriceWebsite", path: "links.netPriceSite" },
  { infoId: "vetMilitaryServiceWebsite", path: "links.vetMilitaryServiceSite" },
  {
    infoId: "studentRightToKnowAthleteWebsite",
    path: "links.studentRightToKnowAthleteSite"
  },
  { infoId: "campusImage", path: "images.campus" },
  { infoId: "rankingsBestColleges", path: "rankings.bestColleges" },
  { infoId: "rankingsBestValueColleges", path: "rankings.bestValueColleges" },
  {
    infoId: "rankingsBestCollegeAcademics",
    path: "rankings.bestCollegeAcademics"
  },
  { infoId: "rankingsTopPrivate", path: "rankings.topPrivate" },
  {
    infoId: "rankingsMostDiverseColleges",
    path: "rankings.mostDiverseColleges"
  },
  {
    infoId: "rankingsBestCollegeCampuses",
    path: "rankings.bestCollegeCampuses"
  },
  {
    infoId: "rankingsBestCollegeAthletics",
    path: "rankings.bestCollegeAthletics"
  },
  {
    infoId: "rankingsBestCollegesForBiology",
    path: "rankings.bestCollegesForBiology"
  },
  {
    infoId: "rankingsBestCollegesForBusiness",
    path: "rankings.bestCollegesForBusiness"
  },
  { infoId: "rankingsBestCollegeFood", path: "rankings.bestCollegeFood" },
  { infoId: "rankingsTopPartySchools", path: "rankings.topPartySchools" },
  {
    infoId: "rankingsBestCollegeLocations",
    path: "rankings.bestCollegeLocations"
  },
  {
    infoId: "rankingsBestCollegeProfessors",
    path: "rankings.bestCollegeProfessors"
  },
  { infoId: "rankingsBestStudentLife", path: "rankings.bestStudentLife" },
  { infoId: "rankingsHardestToGetIn", path: "rankings.hardestToGetIn" },
  {
    infoId: "rankingsBestStudentAthletes",
    path: "rankings.bestStudentAthletes"
  },
  { infoId: "rankingsHottestGuys", path: "rankings.hottestGuys" },
  {
    infoId: "rankingsBestCatholicColleges",
    path: "rankings.bestCatholicColleges"
  },
  {
    infoId: "rankingsCollegesThatAcceptTheCommonApp",
    path: "rankings.collegesThatAcceptTheCommonApp"
  },
  {
    infoId: "rankingsBestCollegesForChemistry",
    path: "rankings.bestCollegesForChemistry"
  },
  {
    infoId: "rankingsBestCollegesForCommunications",
    path: "rankings.bestCollegesForCommunications"
  },
  {
    infoId: "rankingsBestCollegesForComputerScience",
    path: "rankings.bestCollegesForComputerScience"
  },
  {
    infoId: "rankingsBestCollegesForEconomics",
    path: "rankings.bestCollegesForEconomics"
  },
  {
    infoId: "rankingsBestCollegesForHistory",
    path: "rankings.bestCollegesForHistory"
  },
  {
    infoId: "rankingsBestCollegesForNursing",
    path: "rankings.bestCollegesForNursing"
  },
  {
    infoId: "rankingsMostLiberalColleges",
    path: "rankings.mostLiberalColleges"
  },
  {
    infoId: "rankingsMostConservativeColleges",
    path: "rankings.mostConservativeColleges"
  },
  { infoId: "rankingsBestCollegesForArt", path: "rankings.bestCollegesForArt" },
  {
    infoId: "rankingsBestCollegesForEngineering",
    path: "rankings.bestCollegesForEngineering"
  },
  {
    infoId: "rankingsBestGreekLifeColleges",
    path: "rankings.bestGreekLifeColleges"
  },
  {
    infoId: "rankingsCollegesWithNoApplicationFee",
    path: "rankings.collegesWithNoApplicationFee"
  },
  {
    infoId: "rankingsBestCollegesForDesign",
    path: "rankings.bestCollegesForDesign"
  },
  {
    infoId: "rankingsBestTestOptionalColleges",
    path: "rankings.bestTestOptionalColleges"
  },
  {
    infoId: "rankingsBestCollegesForPhysics",
    path: "rankings.bestCollegesForPhysics"
  },
  {
    infoId: "theprincetonreviewbest382colleges2018",
    path: "press.theprincetonreviewbest382colleges2018"
  },
  {
    infoId: "collegesthatchangelivesfourthedition",
    path: "press.collegesthatchangelivesfourthedition"
  },
  {
    infoId: "graduationRate",
    path: "afterCollege.graduationRate"
  },
  {
    infoId: "medianEarningsSixYrsAfterEntry",
    path: "earnings.median.sixYrsAfterEntry"
  },
  {
    infoId: "medianEarningsTenYrsAfterEntry",
    path: "earnings.median.tenYrsAfterEntry"
  }
]

export default collegeInfoIds

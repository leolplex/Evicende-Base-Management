import { Iteration } from '../Interfaces/iterations';
export class IterationMappers {
  public static mapToIteration(response: any): Iteration {
    return {
      id: response?.id ? response.id : '',
      idProduct: response?.idProduct ? response.idProduct : '',
      name: response?.name ? response.name : '',
      goal: response?.goal ? response.goal : '',
      startDate: response?.startDate ? response.startDate : '',
      endDate: response?.endDate ? response.endDate : '',
      state: response?.state ? response.state : '',
      KVM: {
        A2I: {
          id: response?.kva?.kvaAbilityToInnovate
            ? response.kva.kvaAbilityToInnovate.id
            : '',
          Active_Code_Branches: response?.kva?.kvaAbilityToInnovate
            ? response.kva.kvaAbilityToInnovate
                .activeCodeBranchesTimeSpentMergingCodeBetweenBranches
            : '',
          Defect_Trends: response?.kva?.kvaAbilityToInnovate
            ? response.kva.kvaAbilityToInnovate.defectTrends
            : '',
          Feature_Usage_Index: response?.kva?.kvaAbilityToInnovate
            ? response.kva.kvaAbilityToInnovate.featureUsageIndex
            : '',
          Innovation_Rate: response?.kva?.kvaAbilityToInnovate
            ? response.kva.kvaAbilityToInnovate.innovationRate
            : '',
          Installed_Version_Index: response?.kva?.kvaAbilityToInnovate
            ? response.kva.kvaAbilityToInnovate.installedVersionIndex
            : '',
          On_Product_Index: response?.kva?.kvaAbilityToInnovate
            ? response.kva.kvaAbilityToInnovate.onProductIndex
            : '',
          Production_Incident_Trends: response?.kva?.kvaAbilityToInnovate
            ? response.kva.kvaAbilityToInnovate.productionIncidentTrends
            : '',
          Technical_Debt: response?.kva?.kvaAbilityToInnovate
            ? response.kva.kvaAbilityToInnovate.technicalDebt
            : '',
          Time_Spent_Context_Switching: response?.kva?.kvaAbilityToInnovate
            ? response.kva.kvaAbilityToInnovate.timeSpentContextSwitching
            : '',
        },
        CV: {
          id: response?.kva?.kvaCurrentValue
            ? response.kva.kvaCurrentValue.id
            : '',
          Customer_Satisfaction: response?.kva?.kvaCurrentValue
            ? response.kva.kvaCurrentValue.customerSatisfaction
            : '',
          Customer_Usage_Index: response?.kva?.kvaCurrentValue
            ? response.kva.kvaCurrentValue.customerUsageIndex
            : '',
          Employee_Satisfaction: response?.kva?.kvaCurrentValue
            ? response.kva.kvaCurrentValue.employeeSatisfaction
            : '',
          Product_Cost_Ratio: response?.kva?.kvaCurrentValue
            ? response.kva.kvaCurrentValue.productCostRatio
            : '',
          Revenue_Per_Employee: response?.kva?.kvaCurrentValue
            ? response.kva.kvaCurrentValue.revenuePerEmployee
            : '',
        },
        T2M: {
          id: response?.kva?.kvaTimeToMarket
            ? response.kva.kvaTimeToMarket.id
            : '',
          Build_And_Integration_Frequency: response?.kva?.kvaTimeToMarket
            ? response.kva.kvaTimeToMarket.buildAndIntegrationFrequency
            : '',
          Cycle_Time: response?.kva?.kvaTimeToMarket
            ? response.kva.kvaTimeToMarket.cycleTime
            : '',
          Lead_Time: response?.kva?.kvaTimeToMarket
            ? response.kva.kvaTimeToMarket.leadTime
            : '',
          Mean_Time_To_Repair: response?.kva?.kvaTimeToMarket
            ? response.kva.kvaTimeToMarket.meanTimeToRepair
            : '',
          Release_Frequency: response?.kva?.kvaTimeToMarket
            ? response.kva.kvaTimeToMarket.releaseFrequency
            : '',
          Release_Stabilization_Period: response?.kva?.kvaTimeToMarket
            ? response.kva.kvaTimeToMarket.releaseStabilizationPeriod
            : '',
          Time_To_Learn: response?.kva?.kvaTimeToMarket
            ? response.kva.kvaTimeToMarket.timeToLearn
            : '',
        },
        UV: {
          id: response?.kva?.kvaUnrealizedValue
            ? response.kva.kvaUnrealizedValue.id
            : '',
          Customer_Or_User_Satisfaction_Gap: response?.kva?.kvaUnrealizedValue
            ? response.kva.kvaUnrealizedValue.customerSatisfactionGap
            : '',
          Market_Share: response?.kva?.kvaUnrealizedValue
            ? response.kva.kvaUnrealizedValue.marketShare
            : '',
        },
      },
    };
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app.routes';
import { IterationsService } from 'src/app/services/iterations/iterations.service';
import { IterationCardComponent } from '../iteration-card/iteration-card.component';

import { IterationComponent } from './iteration.component';
import { KeyValueMesuresComponent } from '../key-value-mesures/key-value-mesures.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { NewIterationComponent } from './new-iteration/new-iteration.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { KVAUnrealizedValueService } from 'src/app/services/key-value-areas/kvaunrealized-value.service';
import { KVATimeToMarketService } from 'src/app/services/key-value-areas/kvatime-to-market.service';
import { KVACurrentValueService } from 'src/app/services/key-value-areas/kvacurrent-value.service';
import { KVAAbilityToInnovateService } from 'src/app/services/key-value-areas/kvaability-to-innovate.service';
import { ProductService } from 'src/app/services/products/product.service';

describe('IterationComponent', () => {
  let component: IterationComponent;
  let fixture: ComponentFixture<IterationComponent>;
  let iterationsService: IterationsService;
  let kvaUnrealizedValueService: KVAUnrealizedValueService;
  let kvaCurrentValueService: KVACurrentValueService;
  let kvaTimeToMarkerService: KVATimeToMarketService;
  let kvaAbilityToInnovateService: KVAAbilityToInnovateService;
  let activatedRoute: ActivatedRoute;

  let iterationFake = {
    id: '-1',
    name: 'Fake',
    idProduct: 1,
    goal: 'sprint goal -1',
    startDate: '01/01/2020',
    endDate: '01/31/2020',
    state: 'Completed',
    kva: {
      kvaUnrealizedValue: {
        id: '1',
        marketShare: '3%',
        customerSatisfactionGap: '5/10',
        idTeam: 2,
        idIteration: 2,
      },
      kvaCurrentValue: {
        id: '1',
        revenuePerEmployee: '8.500.000 COP',
        productCostRatio: '500.000.000 - 100.000.000 COP',
        employeeSatisfaction: '4/5',
        customerSatisfaction: '3/5',
        customerUsageIndex: '50/180 min',
      },
      kvaAbilityToInnovate: {
        id: '1',
        featureUsageIndex: '30 min by day',
        innovationRate: '0.33',
        defectTrends: '+60',
        onProductIndex: '80%',
        installedVersionIndex: '2',
        technicalDebt: '2 month',
        productionIncidentTrends: '3 times by iteration',
        activeCodeBranchesTimeSpentMergingCodeBetweenBranches: '5 hours',
        timeSpentContextSwitching: '3',
      },
      kvaTimeToMarket: {
        id: '1',
        buildAndIntegrationFrequency: '10 by week',
        releaseFrequency: 'Monthly',
        releaseStabilizationPeriod: '3 days',
        meanTimeToRepair: '3/5',
        cycleTime: '1 month',
        leadTime: '3 months',
        timeToLearn: '1 months',
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IterationComponent,
        IterationCardComponent,
        KeyValueMesuresComponent,
        NewIterationComponent,
      ],
      imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatSelectModule,
        FormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
      providers: [
        {
          provide: KVACurrentValueService,
          useValue: {
            save: () => of({}),
            update: () => of({}),
          },
        },
        {
          provide: KVAUnrealizedValueService,
          useValue: {
            save: () => of({}),
            update: () => of({}),
          },
        },
        {
          provide: KVATimeToMarketService,
          useValue: {
            save: () => of({}),
            update: () => of({}),
          },
        },
        {
          provide: KVAAbilityToInnovateService,
          useValue: {
            save: () => of({}),
            update: () => of({}),
          },
        },
        {
          provide: IterationsService,
          useValue: {
            getIterationById: () => of(iterationFake),
            save: () => of(iterationFake),
            update: () => of(iterationFake),
          },
        },
        {
          provide: ProductService,
          useValue: {
            getIterationsByPoduct: (idTeam: number) =>
              of({
                id: 2,
                name: 'Increibles',
                dateJoin: '2020-01-01T05:00:00',
                iterations: [
                  {
                    id: 2,
                    name: 'Iteration 1',
                    goal: 'My goal',
                    startDate: '2020-10-01T05:00:00',
                    endDate: '2020-10-21T05:00:00',
                    state: 'Completed',
                    kva: {
                      kvaUnrealizedValue: {
                        id: 1,
                        marketShare: '3%',
                        customerSatisfactionGap: '5/10',
                        idTeam: 2,
                        idIteration: 2,
                      },
                      kvaCurrentValue: {
                        id: 1,
                        revenuePerEmployee: '8.500.000 COP',
                        productCostRatio: '500.000.000 - 100.000.000 COP',
                        employeeSatisfaction: '4/5',
                        customerSatisfaction: '3/5',
                        customerUsageIndex: '50/180 min',
                      },
                      kvaAbilityToInnovate: {
                        id: 2,
                        featureUsageIndex: [
                          '30 min by day',
                          '5 min by day',
                          '60 min by day',
                        ],
                        innovationRate: '0.33',
                        defectTrends: '+60',
                        onProductIndex: '80%',
                        installedVersionIndex: '2',
                        technicalDebt: '2 month',
                        productionIncidentTrends: '3 times by iteration',
                        activeCodeBranchesTimeSpentMergingCodeBetweenBranches:
                          '5 hours',
                        timeSpentContextSwitching: '3',
                      },
                      kvaTimeToMarket: {
                        id: 1,
                        buildAndIntegrationFrequency: '10 by week',
                        releaseFrequency: 'Monthly',
                        releaseStabilizationPeriod: '3 days',
                        meanTimeToRepair: '3/5',
                        cycleTime: '1 month',
                        leadTime: '3 months',
                        timeToLearn: '1 months',
                      },
                    },
                  },
                ],
              }),
            getProductByUser: () =>
              of([
                {
                  id: 1,
                  name: 'Kioskos',
                  startDate: '2021-01-08T22:03:00',
                  idTeam: 2,
                  idUser: 1,
                  team: {
                    id: 2,
                    name: 'Pacman',
                    dateJoin: '2020-01-01T05:00:00',
                    idUser: 1,
                  },
                },
              ]),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationComponent);
    component = fixture.componentInstance;
    iterationsService = TestBed.inject(IterationsService);
    kvaUnrealizedValueService = TestBed.inject(KVAUnrealizedValueService);
    kvaCurrentValueService = TestBed.inject(KVACurrentValueService);
    kvaTimeToMarkerService = TestBed.inject(KVATimeToMarketService);
    kvaAbilityToInnovateService = TestBed.inject(KVAAbilityToInnovateService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    spyOn(component.router, 'navigate').and.resolveTo();
  });

  it('should create with idIteration', () => {
    // Arrange
    fixture.detectChanges();

    // Act

    const name = fixture.debugElement.queryAll(
      By.css('.h4.mb-0.font-weight-bold.text-gray-800')
    );

    const goal = fixture.debugElement.queryAll(By.css('.blockquote-footer'));

    // Assert
    expect(name[0].nativeElement.innerHTML).toBe(' Fake ');
    expect(goal[0].nativeElement.innerHTML).toBe(' sprint goal -1 ');

    expect(component).toBeTruthy();
  });

  it('should create without idIteration', () => {
    spyOn(activatedRoute.snapshot.paramMap, 'get').and.returnValue(null);

    // Arrange
    fixture.detectChanges();

    // Act
    const iterationName = fixture.debugElement.queryAll(
      By.css('#iterationName')
    );
    const iteratioGoal = fixture.debugElement.queryAll(By.css('#iteratioGoal'));
    const iteratioStartDate = fixture.debugElement.queryAll(
      By.css('#iteratioStartDate')
    );
    const iteratioEndDate = fixture.debugElement.queryAll(
      By.css('#iteratioEndDate')
    );

    // Assert
    expect(iterationName[0].attributes['data-placeholder']).toBe(
      'Iteration Name'
    );
    expect(iteratioGoal[0].attributes['data-placeholder']).toBe(
      'Iteration Goal'
    );
    expect(iteratioStartDate[0].attributes['data-placeholder']).toBe(
      'Start Date'
    );
    expect(iteratioEndDate[0].attributes['data-placeholder']).toBe('End Date');

    expect(component.iteration).toEqual({
      id: null,
      idProduct: null,
      name: null,
      goal: null,
      state: 'newIteration',
      startDate: null,
      endDate: null,
      KVM: {
        CV: {
          id: null,
          Customer_Satisfaction: null,
          Customer_Usage_Index: null,
          Employee_Satisfaction: null,
          Product_Cost_Ratio: null,
          Revenue_Per_Employee: null,
        },
        T2M: {
          id: null,
          Build_And_Integration_Frequency: null,
          Cycle_Time: null,
          Lead_Time: null,
          Mean_Time_To_Repair: null,
          Release_Frequency: null,
          Release_Stabilization_Period: null,
          Time_To_Learn: null,
        },
        A2I: {
          id: null,
          Active_Code_Branches: null,
          Defect_Trends: null,
          Feature_Usage_Index: null,
          Innovation_Rate: null,
          Installed_Version_Index: null,
          On_Product_Index: null,
          Production_Incident_Trends: null,
          Technical_Debt: null,
          Time_Spent_Context_Switching: null,
        },
        UV: {
          id: null,
          Customer_Or_User_Satisfaction_Gap: null,
          Market_Share: null,
        },
      },
    });

    expect(component).toBeTruthy();
  });

  it('should get empty iterations - getIterationById()', () => {
    // Arrange
    spyOn(iterationsService, 'getIterationById').and.returnValue(of({}));
    fixture.detectChanges();

    // Act
    component.getIteration();

    // Assert
    expect(component.iteration).toBeDefined();
  });

  it('should get an iteration - getIterationById()', () => {
    // Arrange

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    fixture.detectChanges();

    // Act
    component.getIteration();

    // Assert

    expect(component.iteration.name).toEqual(iterationFake.name);
  });

  it('should exist 5 KeyValueMesuresComponent CV at first HTML Tabs', () => {
    // Arrange

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();
    const KVMComponent_CV = fixture.debugElement.queryAll(
      By.directive(KeyValueMesuresComponent)
    );
    // Assert
    expect(KVMComponent_CV.length).toEqual(5);
  });

  it('should exist data for CV at input HTML Tabs', () => {
    // Arrange

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const Revenue_Per_Employee = fixture.debugElement.queryAll(
        By.css('#input_Revenue_Per_Employee')
      );
      const Product_Cost_Ratio = fixture.debugElement.queryAll(
        By.css('#input_Product_Cost_Ratio')
      );
      const Employee_Satisfaction = fixture.debugElement.queryAll(
        By.css('#input_Employee_Satisfaction')
      );
      const Customer_Satisfaction = fixture.debugElement.queryAll(
        By.css('#input_Customer_Satisfaction')
      );
      const Customer_Usage_Index = fixture.debugElement.queryAll(
        By.css('#input_Customer_Usage_Index')
      );
      // Assert
      expect(Revenue_Per_Employee[0].nativeElement.value).toEqual(
        '8.500.000 COP'
      );
      expect(Product_Cost_Ratio[0].nativeElement.value).toEqual(
        '500.000.000 - 100.000.000 COP'
      );
      expect(Employee_Satisfaction[0].nativeElement.value).toEqual('4/5');
      expect(Customer_Satisfaction[0].nativeElement.value).toEqual('3/5');
      expect(Customer_Usage_Index[0].nativeElement.value).toEqual('50/180 min');
    });
    expect(component.idIteration.length).toBe(1);
  });

  it('should exist 7 KeyValueMesuresComponent T2M at second HTML Tabs', () => {
    // Arrange

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();

    const KVMComponent_T2M = fixture.debugElement.queryAll(
      By.css('.mat-ripple.mat-tab-label.mat-focus-indicator')
    );

    KVMComponent_T2M[1].triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const KVMComponents_T2M = fixture.debugElement.queryAll(
        By.directive(KeyValueMesuresComponent)
      );

      // Assert (5 from CV + 7 from T2M)
      const totalKeyValueMesuresComponent = 7 + 5;

      expect(KVMComponents_T2M.length).toEqual(totalKeyValueMesuresComponent);
    });
    expect(KVMComponent_T2M.length).toBeGreaterThan(1);
  });

  it('should exist data for T2M at inputs HTML Tabs', () => {
    // Arrange

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();

    const tabsT2M = fixture.debugElement.queryAll(
      By.css('.mat-ripple.mat-tab-label.mat-focus-indicator')
    );

    tabsT2M[1].triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const Build_And_Integration_Frequency = fixture.debugElement.queryAll(
        By.css('#input_Build_And_Integration_Frequency')
      );
      const Release_Frequency = fixture.debugElement.queryAll(
        By.css('#input_Release_Frequency')
      );
      const Release_Stabilization_Period = fixture.debugElement.queryAll(
        By.css('#input_Release_Stabilization_Period')
      );
      const Mean_Time_To_Repair = fixture.debugElement.queryAll(
        By.css('#input_Mean_Time_To_Repair')
      );
      const Cycle_Time = fixture.debugElement.queryAll(
        By.css('#input_Cycle_Time')
      );
      const Lead_Time = fixture.debugElement.queryAll(
        By.css('#input_Lead_Time')
      );
      const Time_To_Learn = fixture.debugElement.queryAll(
        By.css('#input_Time_To_Learn')
      );

      // Assert
      expect(Build_And_Integration_Frequency[0].nativeElement.value).toEqual(
        '10 by week'
      );
      expect(Release_Frequency[0].nativeElement.value).toEqual('Monthly');
      expect(Release_Stabilization_Period[0].nativeElement.value).toEqual(
        '3 days'
      );
      expect(Mean_Time_To_Repair[0].nativeElement.value).toEqual('3/5');
      expect(Cycle_Time[0].nativeElement.value).toEqual('1 month');
      expect(Lead_Time[0].nativeElement.value).toEqual('3 months');
      expect(Time_To_Learn[0].nativeElement.value).toEqual('1 months');
    });

    expect(tabsT2M.length).toBeGreaterThan(1);
  });

  it('should exist 8 KeyValueMesuresComponent A2I at third HTML Tabs', () => {
    // Arrange

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();

    const KVMComponent_A2I = fixture.debugElement.queryAll(
      By.css('.mat-ripple.mat-tab-label.mat-focus-indicator')
    );

    KVMComponent_A2I[2].triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const KVMComponents_A2I = fixture.debugElement.queryAll(
        By.directive(KeyValueMesuresComponent)
      );

      // Assert (5 from CV +  8 from A2I)
      const totalKeyValueMesuresComponent = 5 + 9;
      expect(KVMComponents_A2I.length).toEqual(totalKeyValueMesuresComponent);
    });
    expect(KVMComponent_A2I.length).toBeGreaterThan(1);
  });

  it('should exist data for A2I at inputs HTML Tabs', () => {
    // Arrange

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();

    const KVMComponent_A2I = fixture.debugElement.queryAll(
      By.css('.mat-ripple.mat-tab-label.mat-focus-indicator')
    );

    KVMComponent_A2I[2].triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const Feature_Usage_Index = fixture.debugElement.queryAll(
        By.css('#input_Feature_Usage_Index')
      );
      const Innovation_Rate = fixture.debugElement.queryAll(
        By.css('#input_Innovation_Rate')
      );
      const Defect_Trends = fixture.debugElement.queryAll(
        By.css('#input_Defect_Trends')
      );
      const On_Product_Index = fixture.debugElement.queryAll(
        By.css('#input_On_Product_Index')
      );
      const Installed_Version_Index = fixture.debugElement.queryAll(
        By.css('#input_Installed_Version_Index')
      );
      const Technical_Debt = fixture.debugElement.queryAll(
        By.css('#input_Technical_Debt')
      );
      const Production_Incident_Trends = fixture.debugElement.queryAll(
        By.css('#input_Production_Incident_Trends')
      );
      const Active_Code_Branches = fixture.debugElement.queryAll(
        By.css('#input_Active_Code_Branches')
      );
      const Time_Spent_Context_Switching = fixture.debugElement.queryAll(
        By.css('#input_Time_Spent_Context_Switching')
      );

      // Assert
      expect(Feature_Usage_Index[0].nativeElement.value).toEqual(
        '30 min by day'
      );
      expect(Innovation_Rate[0].nativeElement.value).toEqual('0.33');
      expect(Defect_Trends[0].nativeElement.value).toEqual('+60');
      expect(On_Product_Index[0].nativeElement.value).toEqual('80%');
      expect(Installed_Version_Index[0].nativeElement.value).toEqual('2');
      expect(Technical_Debt[0].nativeElement.value).toEqual('2 month');
      expect(Production_Incident_Trends[0].nativeElement.value).toEqual(
        '3 times by iteration'
      );
      expect(Active_Code_Branches[0].nativeElement.value).toEqual('5 hours');
      expect(Time_Spent_Context_Switching[0].nativeElement.value).toEqual('3');
    });

    expect(KVMComponent_A2I.length).toBeGreaterThan(1);
  });

  it('should exist 2 KeyValueMesuresComponent UV at second HTML Tabs', () => {
    // Arrange

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();

    const KVMComponent_UV = fixture.debugElement.queryAll(
      By.css('.mat-ripple.mat-tab-label.mat-focus-indicator')
    );

    KVMComponent_UV[3].triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const KVMComponents_UV = fixture.debugElement.queryAll(
        By.directive(KeyValueMesuresComponent)
      );

      // Assert (5 from CV +  2 from UV)
      const totalKeyValueMesuresComponent = 5 + 2;
      expect(KVMComponents_UV.length).toEqual(totalKeyValueMesuresComponent);
    });
    expect(KVMComponent_UV.length).toBeGreaterThan(1);
  });

  it('should exist data for UV at inputs HTML Tabs', () => {
    // Arrange

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();

    const KVMComponent_UV = fixture.debugElement.queryAll(
      By.css('.mat-ripple.mat-tab-label.mat-focus-indicator')
    );

    KVMComponent_UV[3].triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const Market_Share = fixture.debugElement.queryAll(
        By.css('#input_Market_Share')
      );
      const Customer_Or_User_Satisfaction_Gap = fixture.debugElement.queryAll(
        By.css('#input_Customer_Or_User_Satisfaction_Gap')
      );

      // Assert
      expect(Market_Share[0].nativeElement.value).toEqual('3%');
      expect(Customer_Or_User_Satisfaction_Gap[0].nativeElement.value).toEqual(
        '5/10'
      );
    });

    expect(KVMComponent_UV.length).toBeGreaterThan(1);
  });

  it('should exist a button when the iteration is In_Progress', () => {
    // Arrange
    iterationFake = {
      id: '-1',
      idProduct: 1,
      name: 'Fake',
      goal: 'sprint goal -1',
      startDate: '01/01/2020',
      endDate: '01/31/2020',
      state: 'In_Progress',
      kva: {
        kvaUnrealizedValue: {
          id: '1',
          marketShare: '3%',
          customerSatisfactionGap: '5/10',
          idTeam: 2,
          idIteration: 2,
        },
        kvaCurrentValue: {
          id: '1',
          revenuePerEmployee: '8.500.000 COP',
          productCostRatio: '500.000.000 - 100.000.000 COP',
          employeeSatisfaction: '4/5',
          customerSatisfaction: '3/5',
          customerUsageIndex: '50/180 min',
        },
        kvaAbilityToInnovate: {
          id: '1',
          featureUsageIndex: '30 min by day',
          innovationRate: '0.33',
          defectTrends: '+60',
          onProductIndex: '80%',
          installedVersionIndex: '2',
          technicalDebt: '2 month',
          productionIncidentTrends: '3 times by iteration',
          activeCodeBranchesTimeSpentMergingCodeBetweenBranches: '5 hours',
          timeSpentContextSwitching: '3',
        },
        kvaTimeToMarket: {
          id: '1',
          buildAndIntegrationFrequency: '10 by week',
          releaseFrequency: 'Monthly',
          releaseStabilizationPeriod: '3 days',
          meanTimeToRepair: '3/5',
          cycleTime: '1 month',
          leadTime: '3 months',
          timeToLearn: '1 months',
        },
      },
    };
    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();
    const buttonSave = fixture.debugElement.queryAll(By.css('button'));

    // Assert
    expect(buttonSave.length).toBe(1);
  });

  it('should not exist a button when the iteration is Completed', () => {
    // Arrange
    iterationFake = {
      id: '-1',
      idProduct: 1,
      name: 'Fake',
      goal: 'sprint goal -1',
      startDate: '01/01/2020',
      endDate: '01/31/2020',
      state: 'Completed',
      kva: {
        kvaUnrealizedValue: {
          id: '1',
          marketShare: '3%',
          customerSatisfactionGap: '5/10',
          idTeam: 2,
          idIteration: 2,
        },
        kvaCurrentValue: {
          id: '1',
          revenuePerEmployee: '8.500.000 COP',
          productCostRatio: '500.000.000 - 100.000.000 COP',
          employeeSatisfaction: '4/5',
          customerSatisfaction: '3/5',
          customerUsageIndex: '50/180 min',
        },
        kvaAbilityToInnovate: {
          id: '1',
          featureUsageIndex: '30 min by day',
          innovationRate: '0.33',
          defectTrends: '+60',
          onProductIndex: '80%',
          installedVersionIndex: '2',
          technicalDebt: '2 month',
          productionIncidentTrends: '3 times by iteration',
          activeCodeBranchesTimeSpentMergingCodeBetweenBranches: '5 hours',
          timeSpentContextSwitching: '3',
        },
        kvaTimeToMarket: {
          id: '1',
          buildAndIntegrationFrequency: '10 by week',
          releaseFrequency: 'Monthly',
          releaseStabilizationPeriod: '3 days',
          meanTimeToRepair: '3/5',
          cycleTime: '1 month',
          leadTime: '3 months',
          timeToLearn: '1 months',
        },
      },
    };
    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();

    const buttonSave = fixture.debugElement.queryAll(By.css('button'));

    // Assert
    expect(buttonSave.length).toBe(0);
  });

  it('should not exist a button when the iteration is Fail', () => {
    // Arrange
    iterationFake = {
      id: '-1',
      idProduct: 1,
      name: 'Fake',
      goal: 'sprint goal -1',
      startDate: '01/01/2020',
      endDate: '01/31/2020',
      state: 'Fail',
      kva: {
        kvaUnrealizedValue: {
          id: '1',
          marketShare: '3%',
          customerSatisfactionGap: '5/10',
          idTeam: 2,
          idIteration: 2,
        },
        kvaCurrentValue: {
          id: '1',
          revenuePerEmployee: '8.500.000 COP',
          productCostRatio: '500.000.000 - 100.000.000 COP',
          employeeSatisfaction: '4/5',
          customerSatisfaction: '3/5',
          customerUsageIndex: '50/180 min',
        },
        kvaAbilityToInnovate: {
          id: '1',
          featureUsageIndex: '30 min by day',
          innovationRate: '0.33',
          defectTrends: '+60',
          onProductIndex: '80%',
          installedVersionIndex: '2',
          technicalDebt: '2 month',
          productionIncidentTrends: '3 times by iteration',
          activeCodeBranchesTimeSpentMergingCodeBetweenBranches: '5 hours',
          timeSpentContextSwitching: '3',
        },
        kvaTimeToMarket: {
          id: '1',
          buildAndIntegrationFrequency: '10 by week',
          releaseFrequency: 'Monthly',
          releaseStabilizationPeriod: '3 days',
          meanTimeToRepair: '3/5',
          cycleTime: '1 month',
          leadTime: '3 months',
          timeToLearn: '1 months',
        },
      },
    };
    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();

    const buttonSave = fixture.debugElement.queryAll(By.css('button'));

    // Assert
    expect(buttonSave.length).toBe(0);
  });

  it('should not exist a button when the iteration is empty', () => {
    // Arrange
    iterationFake = {
      id: '-1',
      idProduct: 1,
      name: 'Fake',
      goal: 'sprint goal -1',
      startDate: '01/01/2020',
      endDate: '01/31/2020',
      state: '',
      kva: {
        kvaUnrealizedValue: {
          id: '1',
          marketShare: '3%',
          customerSatisfactionGap: '5/10',
          idTeam: 2,
          idIteration: 2,
        },
        kvaCurrentValue: {
          id: '1',
          revenuePerEmployee: '8.500.000 COP',
          productCostRatio: '500.000.000 - 100.000.000 COP',
          employeeSatisfaction: '4/5',
          customerSatisfaction: '3/5',
          customerUsageIndex: '50/180 min',
        },
        kvaAbilityToInnovate: {
          id: '1',
          featureUsageIndex: '30 min by day',
          innovationRate: '0.33',
          defectTrends: '+60',
          onProductIndex: '80%',
          installedVersionIndex: '2',
          technicalDebt: '2 month',
          productionIncidentTrends: '3 times by iteration',
          activeCodeBranchesTimeSpentMergingCodeBetweenBranches: '5 hours',
          timeSpentContextSwitching: '3',
        },
        kvaTimeToMarket: {
          id: '1',
          buildAndIntegrationFrequency: '10 by week',
          releaseFrequency: 'Monthly',
          releaseStabilizationPeriod: '3 days',
          meanTimeToRepair: '3/5',
          cycleTime: '1 month',
          leadTime: '3 months',
          timeToLearn: '1 months',
        },
      },
    };
    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    // Act
    fixture.detectChanges();
    const buttonSave = fixture.debugElement.queryAll(By.css('button'));

    // Assert
    expect(buttonSave.length).toBe(0);
  });

  it('should update an iteration', () => {
    // Arrange
    iterationFake = {
      id: '-1',
      idProduct: 1,
      name: 'Fake',
      goal: 'sprint goal -1',
      startDate: '01/01/2020',
      endDate: '01/31/2020',
      state: '',
      kva: {
        kvaUnrealizedValue: {
          id: '1',
          marketShare: '3%',
          customerSatisfactionGap: '5/10',
          idTeam: 2,
          idIteration: 2,
        },
        kvaCurrentValue: {
          id: '1',
          revenuePerEmployee: '8.500.000 COP',
          productCostRatio: '500.000.000 - 100.000.000 COP',
          employeeSatisfaction: '4/5',
          customerSatisfaction: '3/5',
          customerUsageIndex: '50/180 min',
        },
        kvaAbilityToInnovate: {
          id: '1',
          featureUsageIndex: '30 min by day',
          innovationRate: '0.33',
          defectTrends: '+60',
          onProductIndex: '80%',
          installedVersionIndex: '2',
          technicalDebt: '2 month',
          productionIncidentTrends: '3 times by iteration',
          activeCodeBranchesTimeSpentMergingCodeBetweenBranches: '5 hours',
          timeSpentContextSwitching: '3',
        },
        kvaTimeToMarket: {
          id: '1',
          buildAndIntegrationFrequency: '10 by week',
          releaseFrequency: 'Monthly',
          releaseStabilizationPeriod: '3 days',
          meanTimeToRepair: '3/5',
          cycleTime: '1 month',
          leadTime: '3 months',
          timeToLearn: '1 months',
        },
      },
    };
    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    spyOn(iterationsService, 'save').and.returnValue(of(iterationFake));
    // Act
    fixture.detectChanges();

    // Act
    component.saveIteration();

    // Assert
    expect(component.iteration.name).toBe(iterationFake.name);
  });

  it('should save an iteration', () => {
    // Arrange
    iterationFake = {
      id: '-1',
      idProduct: 1,
      name: 'Fake',
      goal: 'sprint goal -1',
      startDate: '01/01/2020',
      endDate: '01/31/2020',
      state: '',
      kva: {
        kvaUnrealizedValue: {
          id: '1',
          marketShare: '3%',
          customerSatisfactionGap: '5/10',
          idTeam: 2,
          idIteration: 2,
        },
        kvaCurrentValue: {
          id: '1',
          revenuePerEmployee: '8.500.000 COP',
          productCostRatio: '500.000.000 - 100.000.000 COP',
          employeeSatisfaction: '4/5',
          customerSatisfaction: '3/5',
          customerUsageIndex: '50/180 min',
        },
        kvaAbilityToInnovate: {
          id: '1',
          featureUsageIndex: '30 min by day',
          innovationRate: '0.33',
          defectTrends: '+60',
          onProductIndex: '80%',
          installedVersionIndex: '2',
          technicalDebt: '2 month',
          productionIncidentTrends: '3 times by iteration',
          activeCodeBranchesTimeSpentMergingCodeBetweenBranches: '5 hours',
          timeSpentContextSwitching: '3',
        },
        kvaTimeToMarket: {
          id: '1',
          buildAndIntegrationFrequency: '10 by week',
          releaseFrequency: 'Monthly',
          releaseStabilizationPeriod: '3 days',
          meanTimeToRepair: '3/5',
          cycleTime: '1 month',
          leadTime: '3 months',
          timeToLearn: '1 months',
        },
      },
    };
    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    spyOn(iterationsService, 'save').and.returnValue(of(iterationFake));

    component.validateIteration = jasmine.createSpy().and.returnValue(true);
    // Act
    fixture.detectChanges();

    // Act
    component.saveIteration();

    // Assert
    expect(component.iteration.name).toBe(iterationFake.name);
  });
  

  it('should save an iteration false', () => {
    // Arrange
    iterationFake = {
      id: '-1',
      idProduct: 1,
      name: 'Fake',
      goal: 'sprint goal -1',
      startDate: '01/01/2020',
      endDate: '01/31/2020',
      state: '',
      kva: {
        kvaUnrealizedValue: {
          id: '1',
          marketShare: '3%',
          customerSatisfactionGap: '5/10',
          idTeam: 2,
          idIteration: 2,
        },
        kvaCurrentValue: {
          id: '1',
          revenuePerEmployee: '8.500.000 COP',
          productCostRatio: '500.000.000 - 100.000.000 COP',
          employeeSatisfaction: '4/5',
          customerSatisfaction: '3/5',
          customerUsageIndex: '50/180 min',
        },
        kvaAbilityToInnovate: {
          id: '1',
          featureUsageIndex: '30 min by day',
          innovationRate: '0.33',
          defectTrends: '+60',
          onProductIndex: '80%',
          installedVersionIndex: '2',
          technicalDebt: '2 month',
          productionIncidentTrends: '3 times by iteration',
          activeCodeBranchesTimeSpentMergingCodeBetweenBranches: '5 hours',
          timeSpentContextSwitching: '3',
        },
        kvaTimeToMarket: {
          id: '1',
          buildAndIntegrationFrequency: '10 by week',
          releaseFrequency: 'Monthly',
          releaseStabilizationPeriod: '3 days',
          meanTimeToRepair: '3/5',
          cycleTime: '1 month',
          leadTime: '3 months',
          timeToLearn: '1 months',
        },
      },
    };
    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    spyOn(iterationsService, 'save').and.returnValue(of(iterationFake));

    component.validateIteration = jasmine.createSpy().and.returnValue(false);
    // Act
    fixture.detectChanges();

    // Act
    component.saveIteration();

    // Assert
    expect(component.iteration.name).toBe(iterationFake.name);
  });
  it('should has a iteration without kva', () => {
    // Arrange
    const iterationFakewoKva = {
      id: '-1',
      name: 'Fake',
      goal: 'sprint goal -1',
      startDate: '01/01/2020',
      endDate: '01/31/2020',
      state: '',
      kva: {},
    };
    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFakewoKva)
    );

    // Act
    fixture.detectChanges();

    expect(component.iteration).toBeDefined();
  });

  it('should has a iteration null', () => {
    // Arrange
    const iterationFakewoKva = null;
    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFakewoKva)
    );

    // Act
    fixture.detectChanges();

    expect(component.iteration).toBeDefined();
  });

  it('should save a KVA UnrealizedValue', () => {
    // Arrange
    const kvaUnrealizedValue = {};
    iterationFake.kva.kvaUnrealizedValue.id = '';

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );

    spyOn(kvaUnrealizedValueService, 'save').and.returnValue(
      of(kvaUnrealizedValue)
    );
    // Act
    fixture.detectChanges();

    // Act
    component.saveKVA();

    // Assert
    expect(component.router.navigate.length).toBe(1);
  });

  it('should update a KVA UnrealizedValue', () => {
    // Arrange
    const kvaUnrealizedValue = {};
    iterationFake = {
      id: '-1',
      idProduct: 1,
      name: 'Fake',
      goal: 'sprint goal -1',
      startDate: '01/01/2020',
      endDate: '01/31/2020',
      state: '',
      kva: {
        kvaUnrealizedValue: {
          id: '1',
          marketShare: '3%',
          customerSatisfactionGap: '5/10',
          idTeam: 2,
          idIteration: 2,
        },
        kvaCurrentValue: {
          id: '1',
          revenuePerEmployee: '8.500.000 COP',
          productCostRatio: '500.000.000 - 100.000.000 COP',
          employeeSatisfaction: '4/5',
          customerSatisfaction: '3/5',
          customerUsageIndex: '50/180 min',
        },
        kvaAbilityToInnovate: {
          id: '1',
          featureUsageIndex: '30 min by day',
          innovationRate: '0.33',
          defectTrends: '+60',
          onProductIndex: '80%',
          installedVersionIndex: '2',
          technicalDebt: '2 month',
          productionIncidentTrends: '3 times by iteration',
          activeCodeBranchesTimeSpentMergingCodeBetweenBranches: '5 hours',
          timeSpentContextSwitching: '3',
        },
        kvaTimeToMarket: {
          id: '1',
          buildAndIntegrationFrequency: '10 by week',
          releaseFrequency: 'Monthly',
          releaseStabilizationPeriod: '3 days',
          meanTimeToRepair: '3/5',
          cycleTime: '1 month',
          leadTime: '3 months',
          timeToLearn: '1 months',
        },
      },
    };
    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    spyOn(kvaUnrealizedValueService, 'update').and.returnValue(
      of(kvaUnrealizedValue)
    );
    // Act
    fixture.detectChanges();
    component.saveKVA();

    // Assert
    expect(component.router.navigate.length).toBe(1);
  });

  it('should save a KVA Current Value', () => {
    // Arrange
    const kvaCurrentValue = {};
    iterationFake.kva.kvaCurrentValue.id = '';

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );

    spyOn(kvaCurrentValueService, 'save').and.returnValue(of(kvaCurrentValue));
    // Act
    fixture.detectChanges();

    // Act
    component.saveKVA();

    // Assert
    expect(component.router.navigate.length).toBe(1);
  });

  it('should update a KVA UnrealizedValue', () => {
    // Arrange
    const kvaCurrentValue = {};

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    spyOn(kvaCurrentValueService, 'update').and.returnValue(
      of(kvaCurrentValue)
    );

    // Act
    fixture.detectChanges();
    component.saveKVA();

    // Assert
    expect(component.router.navigate.length).toBe(1);
  });

  it('should save a KVA Time To Marker', () => {
    // Arrange
    const kvaTimeToMarket = {};
    iterationFake.kva.kvaTimeToMarket.id = '';

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );

    spyOn(kvaTimeToMarkerService, 'save').and.returnValue(of(kvaTimeToMarket));
    // Act
    fixture.detectChanges();

    // Act
    component.saveKVA();

    // Assert
    expect(component.router.navigate.length).toBe(1);
  });

  it('should update a KVA Time To Market', () => {
    // Arrange
    const kvaTimeToMarket = {};

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    spyOn(kvaTimeToMarkerService, 'update').and.returnValue(
      of(kvaTimeToMarket)
    );

    // Act
    fixture.detectChanges();
    component.saveKVA();

    // Assert

    expect(component.router.navigate.length).toBe(1);
  });

  it('should save a KVA Ability To Inovate', () => {
    // Arrange
    const kvaAbilityToInnovate = {};
    iterationFake.kva.kvaAbilityToInnovate.id = '';

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );

    spyOn(kvaAbilityToInnovateService, 'save').and.returnValue(
      of(kvaAbilityToInnovate)
    );
    // Act
    fixture.detectChanges();

    // Act
    component.saveKVA();

    // Assert
    expect(component.router.navigate.length).toBe(1);
  });

  it('should update a KVA Ability To Inovate', () => {
    // Arrange
    const kvaAbilityToInnovate = {};

    spyOn(iterationsService, 'getIterationById').and.returnValue(
      of(iterationFake)
    );
    spyOn(kvaAbilityToInnovateService, 'update').and.returnValue(
      of(kvaAbilityToInnovate)
    );

    // Act
    fixture.detectChanges();
    component.saveKVA();

    // Assert

    expect(component.router.navigate.length).toBe(1);
  });

  it('should update a Iteraton', () => {
    // Arrange
    spyOn(iterationsService, 'update').and.returnValue(of(iterationFake));
    fixture.detectChanges();

    // Act
    component.updateIteration('Completed');
    const iterationCard = fixture.debugElement.queryAll(
      By.css('app-iteration-card')
    );

    expect(iterationCard.length).toBe(1);
  });

  it('should validateIteration valid', () => {
    fixture.detectChanges();

    component.iteration.idProduct = 1;
    component.iteration.startDate = '1';
    component.iteration.endDate = '1';
    component.iteration.name = '1';
    component.iteration.goal = '1';
    expect(component.validateIteration()).toBeTruthy();
  });

  it('should validateIteration invalid', () => {
    fixture.detectChanges();
    component.iteration.idProduct = null;
    component.iteration.startDate = null;
    component.iteration.endDate = null;
    component.iteration.name = null;
    component.iteration.goal = null;
    expect(component.validateIteration()).toBeFalsy();
  });
});

// This file is to calculate and estimate the quote for the customer

export class Equations{

  // How we charge per hour for development
  public readonly hourlyRate = 156.23;

  // South African tax rate
  private taxRate = 0.15;

  // The tax total
  private taxAmount: number;

  // total feature cost
  totalFeatureCost: number;

  // Total Cost for services with taxes
  totalCost = 0;

  // This method is for calculating percentages
  private percentageCalculator(numaratorValue: number, denominator: number): number{
    const result = (numaratorValue / denominator) * 100;
    return result;
  }


  // calculate the tax amount
  public calculateTaxAmount(pvtsubtotal: number): number{

    this.taxAmount = 0;

    this.taxAmount = pvtsubtotal * this.taxRate;

    return this.taxAmount;
  }


  // Subtotal calculator (Before tax)
  public calculateSubTotal(pvtCosts: number): number{

    const subTotal = pvtCosts;

    return subTotal;
  }

  // Returns the amount to be paid as a deposit which is 20%
  public calculateDepostAmount(pvtTotal): number{
    const depositAmount = pvtTotal * 0.20;

    return depositAmount;
  }

  // calculates the individual item cost
  public featureCost(pvtHoursReq: number): number{
    let itemFeatureCost: number;
    return itemFeatureCost = pvtHoursReq * this.hourlyRate;
  }

  // Calculates the Total amount for the invoice
  public calculateTotalQuote(pvtSubTotal: number, pvtTaxAmount: number, pvtAdjustments): number{

    console.log('total cost value: ', this.totalCost);
    console.log('subtotal cost value: ', pvtSubTotal);
    console.log('Adujustment value: ', pvtAdjustments);

    return this.totalCost = pvtSubTotal + pvtTaxAmount + pvtAdjustments;
  }
}

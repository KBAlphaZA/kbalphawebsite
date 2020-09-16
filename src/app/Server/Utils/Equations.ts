// This file is to calculate and estimate the quote for the customer

export class Equations{

  // How we charge per hour of development
  private hourlyRate = 156.23;

  // South African tax rate
  private taxRate = 0.15;

  // The tax total
  private taxAmount: number;

  // total feature cost
  totalFeatureCost: number;

  // Total Cost for services with taxes
  totalCost: number;

  // This method is for calculating percentages
  private percentageCalculator(numaratorValue: number, denominator: number): number{
    const result = (numaratorValue / denominator) * 100;
    return result;
  }


  // calculate the tax amount
  private calculateTaxAmount(pvtsubtotal: number): number{
    this.taxAmount = 0;

    this.taxAmount = pvtsubtotal * this.taxRate;

    return this.taxAmount;
  }


  // Subtotal calculator
  private calculateSubTotal(pvtTimeReq: number): number{
    const subTotal = this.totalFeatureCost * this.hourlyRate;

    return subTotal;
  }

  // Calculates the Total amount for the invoice
  private calculateTotalQuote(pvtSubTotal: number, pvtTaxAmount: number, pvtAdjustments){

    this.totalCost = 0;

    this.totalCost = pvtSubTotal + pvtTaxAmount + pvtAdjustments;

    return this.totalCost;
  }
}

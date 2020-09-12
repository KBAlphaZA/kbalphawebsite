// This file is to calculate and estimate the quote for the customer

export class QuoteGen{

  // How we charge per hour of development
  hourlRate = 156.23;

  // South African tax rate
  taxRate = 0.15;

  // The tax total
  taxAmount: number;

  // cost before tax
  cost: number;

  // total feature cost
  totalFeatureCost: number;

  // Total Cost for services with taxes
  totalCost: number;


  private CalculateTotalQuote(features: number, hoursNeeded: number){

    // The amount of development time needed for that feature, as entered in the portal.


    this.taxAmount = this.taxRate * this.cost;

    return this.totalCost = this.cost + this.taxAmount;
  }
}


export class QuoteFinance{
  total: number;
  tax: number;
  adjustments: number;
  hourlyRate: number;
  subTotal: number;
  deposit: number;
  selectedPaymentOptions: KBAlphaPaymentOptions;
}

export class ProjectFinance{
  projectId: any;
  totalPaid: number;
  agreedAmountQuote: QuoteFinance;
  percentagePaid: number;
}

export class CompanyFinance{
  revenue: number;
  costs: number;
  pNL: number;
}

export interface KBAlphaPaymentOptions{
  optionId: number;
  paymentOptionName: string;
  description: string;
  term: string;
  deposit: number;
  onCompletion: number;
  maintaince: number;
}

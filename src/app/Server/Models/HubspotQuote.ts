export interface Properties {
  hs_createdate: Date;
  hs_expiration_date: Date;
  hs_quote_amount: string;
  hs_quote_number: string;
  hs_status: string;
  hs_terms: string;
  hs_title: string;
  hubspot_owner_id: string;
}

export interface Result {
  properties: Properties;
}

export interface Next {
  link: string;
  after: string;
}

export interface Paging {
  next: Next;
}

export interface HubspotQuote {
  results: Result[];
  paging: Paging;
}

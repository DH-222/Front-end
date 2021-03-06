export interface IChargeback {
  id: number;
  merchant_number: number;
  post_date: Date;
  item_type: string;
  card_number: string;
  acquirer_reference: string;
  rc_code: string;
  rc_description: string;
  currency: string;
  amount: number;
  cnn: string;
  original_post_date: Date;
  original_transaction_date: Date;
  original_type: string;
  original_transaction_currency: string;
  original_transaction_amount: number;
  merchant_settlement_currency: string;
  merchant_settlement_amount: number;
  network_settlement_currency: string;
  network_settlement_amount: number;
  original_slip: string;
  item_slip_number: string;
  auth_code: string;
  batch_number: string;
  merchant_dba_name: string;
  merchant_transaction_reference: string;
  capture_method: string;
  member_message_text: string;
  document_indicator: string;
  retrieval_request_id: string;
  chargeback_reference_id: string;
  due_date: Date;
  central_processing_date: Date;
  work_by_date: Date;
  chargeback_amount: number;
  chargeback_currency: string;
  partial_amount: string;
  chargeback_account_amount: string;
  chargeback_account_currency: string;
  e_wallet_type: string;
  vme_add_auth_method: string;
  vme_add_auth_reason_code: string;
  ppol_program_data: string;
  processed_transaction_id: number;
  merchant_id: number;
  merchant_name: string;
  created_at: Date;
  updated_at: Date;
  case_id: string;
  item_type_code: string;
  original_chargeback_slip: string;
  client_number: string;
  merchant_funding_currency: string;
  merchant_funding_amount: string;
  authorization_record_sequence: string;
  previous_transfer_to_merchant: string;
  unique_tran_id: string;
  dispute_condition_code: string;
}

import {IProcessedTransaction} from '@utils/interfaces';

export class ProcessedTransaction implements IProcessedTransaction {
  id = null;
  merchant_number = null;
  batch_number = null;
  batch_date = null;
  transaction_date = null;
  post_date = null;
  item_number = null;
  transaction_type = null;
  card_number = null;
  capture_method = null;
  terminal_id = null;
  terminal_name = null;
  terminal_capability = null;
  auth_code = null;
  currency = null;
  amount = null;
  status = null;
  merchant_transaction_reference = null;
  account_currency = null;
  account_amount_gross = null;
  account_total_charges = null;
  account_amount_net = null;
  interchange_category = null;
  original_slip_number = null;
  descriptor = null;
  acquirer_reference = null;
  dcc_indicator = null;
  custom_data = null;
  ucaf = null;
  rt_flag = null;
  card_brand = null;
  merchant_category_code = null;
  pos_entry_mode = null;
  bin_country = null;
  service_type_desc = null;
  merchant_country = null;
  base = null;
  percentage = null;
  min = null;
  max = null;
  record_id = null;
  merchant_city = null;
  area_of_event = null;
  e_wallet_type = null;
  vme_add_auth_method = null;
  vme_add_auth_reason_code = null;
  ppol_program_data = null;
  payment_transaction_id = null;
  merchant_id: number = null;
  merchant_name = null;
  created_at = null;
  updated_at = null;
  batch_slip_number = null;
  deposit_slip_number = null;
  transaction_type_code = null;
  terminal_capability_code = null;
  transaction_status_code = null;
  internal_merchant_account = null;
  cross_rate = null;
  client_number = null;
  service_id_code = null;
  card_scheme_code = null;
  card_scheme = null;
  capture_method_code = null;
  spend_qualified_indicator = null;
  visa_transaction_id = null;
  mastercard_banknet_reference = null;
  service_id = null;
  retrieval_reference = null;
  mastercard_banknet_reference_settle_date = null;
  fee_currency = null;
  unique_tran_id = null;
  merchant_street = null;
  merchant_post_code = null;
  merchant_state_code = null;

  constructor(c?: IProcessedTransaction) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.merchant_number = c.merchant_number ? c.merchant_number : null;
      this.batch_number = c.batch_number ? c.batch_number : null;
      this.batch_date = c.batch_date ? c.batch_date : null;
      this.transaction_date = c.transaction_date ? c.transaction_date : null;
      this.post_date = c.post_date ? c.post_date : null;
      this.item_number = c.item_number ? c.item_number : null;
      this.transaction_type = c.transaction_type ? c.transaction_type : null;
      this.card_number = c.card_number ? c.card_number : null;
      this.capture_method = c.capture_method ? c.capture_method : null;
      this.terminal_id = c.terminal_id ? c.terminal_id : null;
      this.terminal_name = c.terminal_name ? c.terminal_name : null;
      this.terminal_capability = c.terminal_capability ? c.terminal_capability : null;
      this.auth_code = c.auth_code ? c.auth_code : null;
      this.currency = c.currency ? c.currency : null;
      this.amount = c.amount ? c.amount : null;
      this.status = c.status ? c.status : null;
      this.merchant_transaction_reference = c.merchant_transaction_reference ? c.merchant_transaction_reference : null;
      this.account_currency = c.account_currency ? c.account_currency : null;
      this.account_amount_gross = c.account_amount_gross ? c.account_amount_gross : null;
      this.account_total_charges = c.account_total_charges ? c.account_total_charges : null;
      this.account_amount_net = c.account_amount_net ? c.account_amount_net : null;
      this.interchange_category = c.interchange_category ? c.interchange_category : null;
      this.original_slip_number = c.original_slip_number ? c.original_slip_number : null;
      this.descriptor = c.descriptor ? c.descriptor : null;
      this.acquirer_reference = c.acquirer_reference ? c.acquirer_reference : null;
      this.dcc_indicator = c.dcc_indicator ? c.dcc_indicator : null;
      this.custom_data = c.custom_data ? c.custom_data : null;
      this.ucaf = c.ucaf ? c.ucaf : null;
      this.rt_flag = c.rt_flag ? c.rt_flag : null;
      this.card_brand = c.card_brand ? c.card_brand : null;
      this.merchant_category_code = c.merchant_category_code ? c.merchant_category_code : null;
      this.pos_entry_mode = c.pos_entry_mode ? c.pos_entry_mode : null;
      this.bin_country = c.bin_country ? c.bin_country : null;
      this.service_type_desc = c.service_type_desc ? c.service_type_desc : null;
      this.merchant_country = c.merchant_country ? c.merchant_country : null;
      this.base = c.base ? c.base : null;
      this.percentage = c.percentage ? c.percentage : null;
      this.min = c.min ? c.min : null;
      this.max = c.max ? c.max : null;
      this.record_id = c.record_id ? c.record_id : null;
      this.merchant_city = c.merchant_city ? c.merchant_city : null;
      this.area_of_event = c.area_of_event ? c.area_of_event : null;
      this.e_wallet_type = c.e_wallet_type ? c.e_wallet_type : null;
      this.vme_add_auth_method = c.vme_add_auth_method ? c.vme_add_auth_method : null;
      this.vme_add_auth_reason_code = c.vme_add_auth_reason_code ? c.vme_add_auth_reason_code : null;
      this.ppol_program_data = c.ppol_program_data ? c.ppol_program_data : null;
      this.payment_transaction_id = c.payment_transaction_id ? c.payment_transaction_id : null;
      this.merchant_id = c.merchant_id ? c.merchant_id : null;
      this.merchant_name = c.merchant_name ? c.merchant_name : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.updated_at = c.updated_at ? c.updated_at : null;
      this.batch_slip_number = c.batch_slip_number ? c.batch_slip_number : null;
      this.deposit_slip_number = c.deposit_slip_number ? c.deposit_slip_number : null;
      this.transaction_type_code = c.transaction_type_code ? c.transaction_type_code : null;
      this.terminal_capability_code = c.terminal_capability_code ? c.terminal_capability_code : null;
      this.transaction_status_code = c.transaction_status_code ? c.transaction_status_code : null;
      this.internal_merchant_account = c.internal_merchant_account ? c.internal_merchant_account : null;
      this.cross_rate = c.cross_rate ? c.cross_rate : null;
      this.client_number = c.client_number ? c.client_number : null;
      this.service_id_code = c.service_id_code ? c.service_id_code : null;
      this.card_scheme_code = c.card_scheme_code ? c.card_scheme_code : null;
      this.card_scheme = c.card_scheme ? c.card_scheme : null;
      this.capture_method_code = c.capture_method_code ? c.capture_method_code : null;
      this.spend_qualified_indicator = c.spend_qualified_indicator ? c.spend_qualified_indicator : null;
      this.visa_transaction_id = c.visa_transaction_id ? c.visa_transaction_id : null;
      this.mastercard_banknet_reference = c.mastercard_banknet_reference ? c.mastercard_banknet_reference : null;
      this.service_id = c.service_id ? c.service_id : null;
      this.retrieval_reference = c.retrieval_reference ? c.retrieval_reference : null;
      this.mastercard_banknet_reference_settle_date = c.mastercard_banknet_reference_settle_date ? c.mastercard_banknet_reference_settle_date : null;
      this.fee_currency = c.fee_currency ? c.fee_currency : null;
      this.unique_tran_id = c.unique_tran_id ? c.unique_tran_id : null;
      this.merchant_street = c.merchant_street ? c.merchant_street : null;
      this.merchant_post_code = c.merchant_post_code ? c.merchant_post_code : null;
      this.merchant_state_code = c.merchant_state_code ? c.merchant_state_code : null;
    }
  }
}
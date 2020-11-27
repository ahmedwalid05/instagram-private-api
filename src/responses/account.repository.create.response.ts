export interface AccountRepositoryCreateResponsePhoneNumberSendSms {
  status: string;
  tos_version: string;
  gdpr_required?: boolean;
  age_required: boolean;
}

export interface AccountRepositoryCreateResponsePhoneNumber {
  nonce_valid: boolean;
  verified: boolean;
  status: string;
}

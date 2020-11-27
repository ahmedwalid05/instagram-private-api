import { StatusResponse } from 'src';
import { IgResponseError } from './ig-response.error';

export class IgParameterError extends IgResponseError<StatusResponse> {}

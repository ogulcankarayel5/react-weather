import { IObject } from "types";

export interface IRequestConfig {
	params?: IObject;
	body?: IObject;
	method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
}

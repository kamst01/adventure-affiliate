import handleRequest from '@/lib/handleRequest.ts';
import { RequestMethod } from '@/types';

type GetCRMProps = {
	url: string;
	method: RequestMethod;
	body?: FormData;
}

export function getCRM(props: GetCRMProps) {
	const request = { ...props };

	return handleRequest(request);
}
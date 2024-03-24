export interface Slip {

    slip_id: number;
    advice: string;
}

export interface SlipResponse {
    slip: Slip;
}

export interface SearchResponse {
    total_results: number;
    query: string;
    slips: Slip[];
}
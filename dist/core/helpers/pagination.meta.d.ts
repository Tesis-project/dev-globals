export interface PaginationMeta_I {
    page: number;
    limit: number;
    total: number;
    lastPage: number;
    hasPrevious: boolean;
    hasNext: boolean;
}
export declare function pagination_meta(page: number, limit: number, total: number): PaginationMeta_I;
export interface Pagination_I<T = []> {
    data: T[];
    meta: PaginationMeta_I;
}

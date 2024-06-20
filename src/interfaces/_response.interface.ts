
export interface _paginatorModel_I {

    meta: { [s: string]: any; itemCount: number; totalItems?: number; itemsPerPage: number; totalPages?: number; currentPage: number; },
    links: {
        first?: string;
        previous?: string;
        next?: string;
        last?: string;
    }

}

export interface _Response_I<T = any> {

    ok?: boolean;
    statusCode?: number;
    path?: string;
    data?: T;
    message?: any;
    paginator?: _paginatorModel_I;
    err?: any;
    context?: string;

}



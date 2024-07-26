declare class Direction_Dto {
    address?: string;
    city?: string;
    state?: string;
}
declare class InstituesCompanies_Dto {
    name: string;
    rif_nif: string;
    position: string;
    phone: string;
    direction?: Direction_Dto;
}
export declare class Update_Meta_Contratist_Dto {
    institutes_companies: InstituesCompanies_Dto;
}
export {};

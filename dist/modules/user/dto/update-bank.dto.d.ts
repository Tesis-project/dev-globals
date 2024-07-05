export declare class Bank_Data_Dto {
    _id: string;
    type: string;
    bank_name: string;
    number: string;
    titular: string;
    person_id: string;
    phone: string;
}
export declare class Update_Bank_Data_Dto {
    payment_accounts: Bank_Data_Dto[];
}

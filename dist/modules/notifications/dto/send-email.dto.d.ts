export declare class Email_Confirm_Account_Dto {
    name: string;
    key: string;
}
export declare class Email_Reset_Password_Dto {
    name: string;
    key: string;
}
export declare class Email_Change_Email_Dto {
    name: string;
    key: string;
    new_email: string;
}
export declare class Send_Email_Dto {
    to: string;
    confirm_account?: Email_Confirm_Account_Dto;
    reset_password?: Email_Reset_Password_Dto;
    change_email?: Email_Change_Email_Dto;
}

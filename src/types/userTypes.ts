export interface IRegisterRequestBody{
    name:string;
    email:string;
    password:string;
    phoneNumber?:string;
    concent?:boolean;
}
import joi from 'joi'
import { IRegisterRequestBody } from '../types/userTypes'

export const validationRegisterBody =joi.object<IRegisterRequestBody>({
        name:joi.string().min(2).max(72).trim().required(),
        email:joi.string().email().required(),
        phoneNumber:joi.string().min(4).max(20).required(),
        password:joi.string().min(8).max(24).trim().required(),
        concent:joi.boolean().valid(true).required(),
})

export const validationSchema = <T>(schema:joi.Schema,value:unknown)=>{
        const result = schema.validate(value)

        return{
            value: result.value as  
        }
        
}
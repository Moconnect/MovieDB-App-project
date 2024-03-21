// validationSchema.js
import * as yup from 'yup';

export const ValidationSchema = yup.object({
  searchTerm: yup.string().required('Search term is required'),
}).required();



export type FormData = {
    searchTerm: string;
};

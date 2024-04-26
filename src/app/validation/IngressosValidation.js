import * as Yup from 'yup';

export const ingressosValidationSchema = Yup.object().shape({
    tipoIngresso: Yup.string().required("Por favor, selecione um tipo de ingresso"),
});

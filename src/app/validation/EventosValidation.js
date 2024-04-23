import * as Yup from 'yup'

export const eventoValidationSchema = Yup.object().shape({
    NomeEvento: Yup.string().required('Nome do evento é obrigatório'),
    dataInicio: Yup.date().required('Data do inicio é obriagatoria'),
    dataFinal: Yup.date(),
    local: Yup.string().required('Nome do local é obrigatorio'),
    atracoes: Yup.string()
})
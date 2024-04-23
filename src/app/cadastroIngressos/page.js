'use client'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ingressosValidationSchema } from '../validation/IngressosValidation';


export default function CategoriaIngressoForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ingressosValidationSchema)
    });

    const onSubmit = (data) => {
        //chamar api POST
        console.log(data);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="tipoIngresso" className="block mb-1">Tipo de Ingresso:</label>
                    <select
                        id="tipoIngresso"
                        {...register("tipoIngresso")}
                        className="form-select"
                    >
                        <option value="inteira">Inteira</option>
                        <option value="meia">Meia</option>
                        <option value="vip">VIP</option>
                    </select>
                    {errors.tipoIngresso && <p className="text-red-500">{errors.tipoIngresso.message}</p>}
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

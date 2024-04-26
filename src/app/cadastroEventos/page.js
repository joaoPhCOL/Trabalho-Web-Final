'use client'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import handler from '@/api/index'
import { yupResolver } from '@hookform/resolvers/yup';
import { eventoValidationSchema } from '../validation/EventosValidation';



export default function EventForm() {

  //register: registra os campos do form, para podermos identifica-los por meio do name ou id qual campo é qual campo
  //handleSubimt: função ja vem pornta para manipular os campos do formulario
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(eventoValidationSchema)
  });

  //recebe os dados do form 
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(handler, data);
      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('erro ao enviar dados para API', error);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block">Nome do Evento:</label>
          <input
            name="NomeEvento"
            type="text"
            placeholder="Digite o nome do evento"
            className="form-input mt-1 w-full"
            {...register('NomeEvento')}
          />
          <div>{errors.NomeEvento?.message}</div>
        </div>

        <div>
          <label className="block">Início:</label>
          <input
            name="dataInicio"
            type="date"
            className="form-input mt-1 w-full"
            {...register('dataInicio')}
          />
          <div>{errors.dataInicio?.message}</div>
        </div>

        <div>
          <label className="block">Término:</label>
          <input
            name="dataFinal"
            type="date"
            className="form-input mt-1 w-full"
            {...register('dataFinal')}
          />
          <div>{errors.dataFinal?.message}</div>
        </div>

        <div>
          <label className="block">Local:</label>
          <input
            name="local"
            type="text"
            className="form-input mt-1 w-full"
            {...register('local')}
          />
          <div>{errors.local?.message}</div>
        </div>

        <div>
          <label className="block">Atrações:</label>
          <input
            name="atracoes"
            type="text"
            placeholder="Digite as atrações do evento"
            className="form-input mt-1 w-full"
            {...register('atracoes')}
          />
          <div>{errors.atracoes?.message}</div>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Adicionar
        </button>
      </form>
    </div>
  );
}



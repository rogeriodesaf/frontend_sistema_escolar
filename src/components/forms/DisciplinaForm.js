import { useState} from 'react';
import React from 'react';

import formStyles from './Form.module.css';
import useFlashMessage from '../../hooks/useFlashMessage';

import { useHistory } from 'react-router-dom';


import Input from './Input';

// Componente
function DisciplineForm({ btnText }) {
  
 
 
  const history = useHistory();
  const { setFlashMessage } = useFlashMessage();
  

  const [discipline, setDiscipline] = useState({
    nome: '',
    descricao: '',
    creditos: '',
    cargaHoraria: ''
  });

  function handleChange(e) {
    setDiscipline({ ...discipline, [e.target.name]: e.target.value });
  }

  const submit = async (e) => {
    e.preventDefault();

   
    let msgText = 'Cadastro realizado com sucesso!';
    let msgType = 'sucess';
  
   
      setFlashMessage(msgText, msgType);
    history.push('/home-coordenador')
  };

  return (
    <div>
      <form onSubmit={submit} className={formStyles.form_container}>
        <Input
          text="Nome da Disciplina"
          type="text"
          name="nome"
          placeholder="Digite o nome"
          handleOnChange={handleChange}
          value={discipline.nome }
        />
        <Input
          text="Descrição da Disciplina"
          type="text"
          name="descricao"
          placeholder="Digite a descrição"
          handleOnChange={handleChange}
          value={discipline.descricao }
        />
        <Input
          text="Créditos da Disciplina"
          type="number"
          name="creditos"
          placeholder="Digite os créditos"
          handleOnChange={handleChange}
          value={discipline.creditos }
        />
        <Input
          text="Carga Horária da Disciplina"
          type="number"
          name="cargaHoraria"
          placeholder="Digite a carga horária"
          value={discipline.cargaHoraria }
          handleOnChange={handleChange}
        />
        {/*{flashMessage && <div>{flashMessage}</div>}*/}
        <input type="submit" value={btnText} />
      </form>
    </div>
  );
}

export default DisciplineForm;








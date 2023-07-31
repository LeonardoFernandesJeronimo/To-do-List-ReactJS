import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    
    if(!value || !category) return

    // add todo
    addTodo(value, category)

    // limpar todo
    setValue('')
    setCategory('')
  }

  return (
    <div className='todo-form'>
      <h2>Criar tarefa</h2>

      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Digite o título'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />

        <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        >
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>

        <button>Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm

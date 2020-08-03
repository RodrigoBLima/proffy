import React from 'react'
import whastappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
export default function TeacherCard() {
    return (
        <div>
            <main>
        <article className="teacher-item">
       <header>
       <img src="" alt="Nome" />
          <div>
            <strong>Nome</strong>
            <span>materia</span>
          </div>
       </header>
       <p>textosososoososasajisa</p>

       <footer>
           <p>Preço/Hora : <strong>R$ </strong></p>
          <button type="button">
              <img src={whastappIcon} alt="whatsapp"/>
              Entrar em contato
          </button>
       </footer>
        </article>
      </main>
        </div>
    )
}

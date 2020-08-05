import React from "react";
import whastappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";
import "./styles.css";

export interface Teacher {
  avatar: string;
  bio: string;
  name: string;
  id: number;
  cost: number;
  subject: string;
  whatsapp: string;
}

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  function createConnection() {
    api
      .post("/connections", {
        user_id: teacher.id,
      })
      .catch((error) => {
        alert("Erro em fazer conexão");
      });
  }

  return (
    <div>
      <main>
        <article className="teacher-item">
          <header>
            <img src={teacher.avatar} alt={teacher.name} />
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
            </div>
          </header>
          <p>{teacher.bio}</p>

          <footer>
            <p>
              Preço/Hora : <strong>R$ {teacher.cost}</strong>
            </p>
            <a
              target="_blank"
              onClick={createConnection}
              href={`https://wa.me/${teacher.whatsapp}`}
            >
              <img src={whastappIcon} alt="whatsapp" />
              Entrar em contato
            </a>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default TeacherCard;

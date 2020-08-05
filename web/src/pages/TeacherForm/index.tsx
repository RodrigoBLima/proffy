import React from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Inputs";
import warningIcon from "../../assets/images/icons/warning.svg";
import "./styles.css";
import Textarea from "../../components/TextArea";
import SelectBox from "../../components/SelectBox";
export default function TeacherForm() {
  return (
    <>
      <div id="page-teacher-form" className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas"
          description="O primeiro passo, é você preencher esse formulário de inscrição"
        />
        <main>
          <fieldset>
            <legend>Seus dados</legend>
            <Input name="name" label="Nome Completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="whatsapp" />
            <Textarea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <SelectBox
              name="subject"
              label="Matéria"
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Quimica", label: "Quimica" },
                { value: "Portugues", label: "Portugues" },
                { value: "Matematica", label: "Matematica" },
                { value: "Sociologia", label: "Sociologia" },
                { value: "Fisica", label: "Fisica" },
              ]}
            />
            <Input name="cost" label="Custo da sua hora por aula (em R$)" />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button"> + Novo horário</button>
            </legend>
            <div className="schedule-item">
              <SelectBox
                name="week_day"
                label="Dia da semana"
                options={[
                  { value: "0", label: "Segunda - feira" },
                  { value: "1", label: "Terça - Feira" },
                  { value: "2", label: "Quarta - Feira" },
                  { value: "3", label: "Quinta - Feira" },
                  { value: "4", label: "Sexta - Feira" },
                  { value: "5", label: "Sábado" },
                ]}
              />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante ! Preencha com todos os seus dados <br />
            </p>
            <button type="button">Salvar Cadastro</button>
          </footer>
        </main>
      </div>
    </>
  );
}

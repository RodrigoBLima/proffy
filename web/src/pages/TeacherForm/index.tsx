import React, { useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Inputs";
import warningIcon from "../../assets/images/icons/warning.svg";
import "./styles.css";
import Textarea from "../../components/TextArea";
import SelectBox from "../../components/SelectBox";

import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const history = useHistory()

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems
    });

    api.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost:Number(cost),
      schedule: scheduleItems
    })
    .then(res =>{
      alert('Cadastro realizado com sucesso')
      history.push('/')

    })
    .catch((error)=>{
      alert('Erro no cadastro')
    })
}

  function setScheduleItemValue(position: number,field: string,value: string) {

    const updateScheduleItem = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem
    });
    setScheduleItems(updateScheduleItem)
  }

  return (
    <>
      <div id="page-teacher-form" className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas"
          description="O primeiro passo, é você preencher esse formulário de inscrição"
        />
        <main>
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Seus dados</legend>
              <Input
                value={name}
                name="name"
                label="Nome Completo"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                value={avatar}
                name="avatar"
                label="Avatar"
                onChange={(e) => setAvatar(e.target.value)}
              />
              <Input
                value={whatsapp}
                name="whatsapp"
                label="whatsapp"
                onChange={(e) => setWhatsapp(e.target.value)}
              />
              <Textarea
                value={bio}
                name="bio"
                label="Biografia"
                onChange={(e) => setBio(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>Sobre a aula</legend>
              <SelectBox
                name="subject"
                label="Matéria"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
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
              <Input
                name="cost"
                label="Custo da sua hora por aula (em R$)"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <legend>
                Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                  {" "}
                  + Novo horário
                </button>
              </legend>
              {scheduleItems.map((scheduleItem, index) => {
                return (
                  <div className="schedule-item" key={scheduleItem.week_day}>
                    <SelectBox
                      name="week_day"
                      onChange={e =>
                        setScheduleItemValue(index, "week_day", e.target.value)
                      } 
                      value={scheduleItem.week_day}
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
                    <Input
                      name="from"
                      label="Das"
                      type="time"
                      onChange={(e) =>
                        setScheduleItemValue(index, "from", e.target.value)
                      }
                      value={scheduleItem.from}
                    />
                    <Input
                      name="to"
                      label="Até"
                      type="time"
                      onChange={(e) =>
                        setScheduleItemValue(index, "to", e.target.value)
                      }
                      value={scheduleItem.to}
                    />
                  </div>
                );
              })}
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante ! Preencha com todos os seus dados <br />
              </p>
              <button type="submit">Salvar Cadastro</button>
            </footer>
          </form>
        </main>
      </div>
    </>
  );
}

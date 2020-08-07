import React, { useEffect, useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import TeacherCard, { Teacher } from "../../components/TeacherCard";
import Input from "../../components/Inputs";

import "./styles.css";
import SelectBox from "../../components/SelectBox";
import api from "../../services/api";

export default function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [teachers, setTeachers] = useState([]) ;

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.get("/classes", {
        params: {
          week_day,
          subject,
          time,
        },
      });
      setTeachers(response.data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    api.get("proffys").then((res) => {
      console.log(res.data);
      setTeachers(res.data);
    });
  }, []);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
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
          <SelectBox
            name="week_day"
            label="Dia da semana"
            onChange={(e) => setWeekDay(e.target.value)}
            value={week_day}
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
            value={time}
            type="time"
            name="time"
            label="Hora"
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherCard key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

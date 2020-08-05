import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherCard from "../../components/TeacherCard";
import Input from '../../components/Inputs'

import "./styles.css";
import SelectBox from "../../components/SelectBox";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">

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
          <Input  type="time" name="time" label="Hora"/>

        </form>
      </PageHeader>

      <TeacherCard />   
    </div>
  );
}

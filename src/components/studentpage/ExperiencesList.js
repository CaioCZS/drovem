import styled from "styled-components"
import dayjs from "dayjs"
export default function ExperiencesList({ list }) {
  return (
    <UlExperiences>
      {list.map((l) => (
        <CardExperiences>
          <h1>
            <b>{l.className}</b>
          </h1>
          <p>
            <b>Data de ingresso: </b>
            {dayjs(l.startDate).format("DD/MM/YYYY")}
          </p>
          <p>
            <b>Data de saída: </b>
            {l.endDate
              ? dayjs(l.endDate).format("DD/MM/YYYY")
              : "Curso em andamento"}
          </p>
        </CardExperiences>
      ))}
    </UlExperiences>
  )
}

const UlExperiences = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardExperiences = styled.div`
  width: 98%;
  height: 100px;
  border: thin solid black;
  border-radius: 5px;
  h1 {
    font-size: 20px;
  }
`

import styled from '@emotion/styled';
import { takeRight } from "lodash";
import React, { FunctionComponent } from "react";
import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { contrastColor } from 'contrast-color';

import { useRegion } from "../facade/fetchData";

interface Props {
  rs: string;
  entriesToShow: number;
}

const Body = styled.div`
  padding: 8px;
  `


function formatDiff(diff: number | undefined): string {
  if (diff === undefined || diff === 0) {
    return "";
  }
  return diff > 0 ? `+${ diff }` : `-${ Math.abs(diff) }`;
}

const colors = [undefined, "#fefac0", "#f6c97a", "#ec925b", "#dc543f", "#ac3135"]

function colorIndexFor(incidence: number): number {
  if (incidence > 200) {
    return 5;
  }
  if (incidence > 100) {
    return 4;
  }
  if (incidence > 50) {
    return 3;
  }
  if (incidence > 35) {
    return 2;
  }
  return 1;
}

function colorFor(incidence: number): string | undefined {
  return colors[colorIndexFor(incidence)];
}

function formatIncidence(incidence: number): number {
  if (incidence > 100) {
    return Math.ceil(incidence);
  }

  return Math.ceil(incidence * 10) / 10;
}

interface Entry {
  date: string;
  incidence: number;
  color: string | undefined;
}

export const Region: FunctionComponent<Props> = ({ rs, entriesToShow }) => {
  const { data: regionData } = useRegion(rs)

  console.log(contrastColor({bgColor: '#ac3135'}))
  if (!regionData) {
    return null;
  }


  const graphData: Entry[] = takeRight(regionData.entries, entriesToShow)
    .map(day => ( { ...day, date: day.date.split(".").slice(0, 2).join(".") } ))
    .map(day => ( {
      date: day.date,
      incidence: day.incidence,
      color: colorFor(day.incidence),
      casesDiff: formatDiff(day.casesDiff),
      formattedIncidence: formatIncidence(day.incidence)
    } ));

  return <Body>
    <h3>{ regionData.name }</h3>

    <ResponsiveContainer height={300}>
    <BarChart
      data={ graphData }
      margin={ {
        top: 15,
        right: 5,
        left: 15,
        bottom: 5,
      } }
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis tick={{fontSize: 12}} dataKey="date"/>
      <YAxis tick={{fontSize: 10}} width={18}/>
      <Bar dataKey="incidence">
        {
          graphData.map((entry, index) => (
            <React.Fragment key={ `graph_${index}` }>
              <Cell key={ `cell-${ index }` } fill={ entry.color }/>
              <LabelList dataKey="casesDiff" position="top" fill="#000000" fontSize={12} fontWeight={100}/>
              <LabelList dataKey="formattedIncidence" position="insideBottom" fill={contrastColor({bgColor: entry.color})} fontSize={12}  fontWeight={400}/>
            </React.Fragment>
          ))
        }
      </Bar>
    </BarChart>
    </ResponsiveContainer>
  </Body>
}

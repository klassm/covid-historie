import { fetchData, RkiData } from "./rkiFacade";
import { DayData, load, Region, save, writeRegionsFile } from "./storedData";

function newDataFrom(lastData: DayData | undefined, newData: RkiData): DayData {
  return {
    date: newData.lastUpdate,
    cases: newData.cases,
    incidence: newData.incidence,
    casesDiff: lastData === undefined ? 0 : newData.cases - lastData.cases
  }
}

async function updateLkData(data: RkiData) {
  const storedData = await load(data.rs);
  const baseData: Region = storedData ?? {
    rs: data.rs,
    name: data.name,
    entries: []
  }

  const withoutToday = baseData.entries.filter(entry => entry.date !== data.lastUpdate);
  const yesterday = withoutToday[withoutToday.length - 1];
  const newData = newDataFrom(yesterday, data);
  console.log(`${data.name} - incidence to ${data.incidence}`)

  const allNewData = [...withoutToday, newData];
  save({ ...baseData, entries: allNewData });
}

export async function updateData() {
  const data = await fetchData();
  for (const item of data) {
    await updateLkData(item);
  }

  const regions = data.map(({ name, rs}) => ({ name, rs }));
  writeRegionsFile(regions);
}

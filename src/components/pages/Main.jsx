import React, { useEffect } from 'react';

import {
  DayActivity,
  Mission,
  History,
  OfficeMap,
  Statistic,
  Etiquette,
  EmployeesDeliver,
  FoodCort
} from '../';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DayActivity />
      <Mission />
      <History />
      <OfficeMap />
      <Statistic />
      <Etiquette />
      <EmployeesDeliver />
      <FoodCort />
    </>
  )
}

export default Main;

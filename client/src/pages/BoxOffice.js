import React, { useCallback, useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { BsFillCalendar2DayFill, BsFillCalendar2WeekFill } from 'react-icons/bs'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useBoxofficeDispatch, useBoxofficeState, getBoxoffice } from '../contexts/BoxofficeContext';
import AppLayout from '../components/AppLayout';

const headerStyle = css`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  height: 70px;
  padding-bottom: 5px;
`;

const StyledDailyIcon = styled(BsFillCalendar2DayFill)`
  font-size: 30px;
  margin-right: 10px;
  cursor: pointer;
  opacity: ${(props) => (props.period ? '1' : '0.5')};
  &:hover {
    opacity: 1;
  }
`;

const StyledWeeklyIcon = styled(BsFillCalendar2WeekFill)`
  font-size: 30px;
  margin-right: 10px;
  cursor: pointer;
  opacity: ${(props) => (props.period ? '0.5' : '1')};
  &:hover {
    opacity: 1;
  }
`;

function Boxoffice() {
  // true: daily / false: weekly
  const [period, setPeriod] = useState(true);
  const movieList = [];
  const state = useBoxofficeState();
  const dispatch = useBoxofficeDispatch();

  const boxoffice = state.boxoffice;

  useEffect(() => {
    getBoxoffice(dispatch, period);
  }, [period, dispatch]);

  boxoffice.map((item) => {
    movieList.push(item.movieCd);
  })

  // daily <-> weekly
  const handlePeriod = useCallback((selected) => {
    if (selected && !period) {
      setPeriod(true);
    } else if (!selected && period) {
      setPeriod(false);
    } else {
      return;
    };
  }, [period]);

  return (
    <Container maxWidth="lg">
      <Box css={headerStyle}>
        <StyledDailyIcon period={period} onClick={handlePeriod.bind(this, true)} />
        <StyledWeeklyIcon period={period} onClick={handlePeriod.bind(this, false)} />
        {period ? "Daily BoxOffice" : "Weekly BoxOffice" }
      </Box>
      <AppLayout movieList={movieList}/>
    </Container>
  );
};

export default Boxoffice;

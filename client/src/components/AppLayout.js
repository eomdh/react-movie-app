import React, { useCallback, useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BsFillCalendar2DayFill, BsFillCalendar2WeekFill } from 'react-icons/bs'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MovieCard from './MovieCard';
import { useBoxofficeDispatch, useBoxofficeState, getBoxoffice } from '../contexts/BoxofficeContext';

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

function AppLayout() {
  // true: daily / false: weekly
  const [period, setPeriod] = useState(true);
  const state = useBoxofficeState();
  const dispatch = useBoxofficeDispatch();

  const boxoffice = state.boxoffice;

  boxoffice.map((item) => {
    console.log(item);
  })

  useEffect(() => {
    getBoxoffice(dispatch, period);
  }, [period]);

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
      <Grid container spacing={1}>
        {boxoffice.map((item) => {
          return (
            <Grid item xs={6} md={3}>
              <MovieCard title={item.movieNm} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
};

export default AppLayout;

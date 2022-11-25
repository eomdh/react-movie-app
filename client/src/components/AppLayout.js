import React, { useCallback, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BsFillCalendar2DayFill, BsFillCalendar2WeekFill } from 'react-icons/bs'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MovieCard from './MovieCard';


const headerStyle = css`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  height: 60px;s
  margin-bottom: 5px;
  padding-left: 5px;
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
  const [movies, setMovies] = useState([
    { 
      title: '기생충',
      genre: '드라마',
      directorNm: '봉준호',
      repRlsDate: '2019. 05. 30',
    },
    { 
      title: '한산: 용의 출현',
      genre: '액션',
      directorNm: '김한민',
      repRlsDate: '2022. 07. 27',
    },
    { 
      title: '공조2: 인터내셔날',
      genre: '액션', 
      directorNm: '이석훈',
      repRlsDate: '2022. 09. 07',
    }
  ]);

  // daily <-> weekly
  const handlePeriod = useCallback((selected) => {
    if (selected && !period) {
      setPeriod(true);
    } else if (!selected && period) {
      setPeriod(false);
    } else {
      return;
    }
  }, [period]);

  return (
    <Container maxWidth="lg">
      <Box css={headerStyle}>
          <StyledDailyIcon period={period} onClick={handlePeriod.bind(this, true)} />
          <StyledWeeklyIcon period={period} onClick={handlePeriod.bind(this, false)} />
          {period ? "Daily BoxOffice" : "Weekly BoxOffice" }
      </Box>
      <Grid container spacing={1}>
          {movies.map((item) => (
              <Grid item xs={6} md={3}>
                <MovieCard></MovieCard>
              </Grid>
          ))};
      </Grid>
    </Container>
  );
};

export default AppLayout;
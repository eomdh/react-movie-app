import React, { useCallback, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BsFillCalendar2DayFill, BsFillCalendar2WeekFill } from 'react-icons/bs'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyle = css`
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    height: 60px;
    margin-bottom: 5px;
    padding-left: 5px;
`;

const iconStyle = css`
    font-size: 30px;
    margin-right: 10px;
`;

function AppLayout() {
    // true : daily, false : weekly
    const [period, setPeriod] = useState(true);

    // daily <-> weekly 전환하기 구현
    const handleTimePeriod = useCallback(() => {
        setPeriod((prev) => !prev);
    }, [period]);

    return (
        <Container maxWidth="lg">
            <Box css={headerStyle}>
                <BsFillCalendar2DayFill css={iconStyle} onClick={handleTimePeriod} />
                <BsFillCalendar2WeekFill css={iconStyle} onClick={handleTimePeriod} />
                Daily BoxOffice
            </Box>
            <Grid container spacing={1}>
                <Grid item xs={6} md={3}>
                    <Box bgcolor="info.main">
                        1
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box bgcolor="info.main">
                        2
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box bgcolor="info.main">
                        3
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box bgcolor="info.main">
                        4
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box bgcolor="info.main">
                        5
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box bgcolor="info.main">
                        6
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box bgcolor="info.main">
                        7
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box bgcolor="info.main">
                        8
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box bgcolor="info.main">
                        9
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box bgcolor="info.main">
                        10
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppLayout;
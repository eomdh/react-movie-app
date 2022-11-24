import React, { useCallback, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { BsFillCalendar2DayFill, BsFillCalendar2WeekFill } from 'react-icons/bs'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const headerStyle = css`
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    height: 60px;
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

    // daily <-> weekly 전환하기
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
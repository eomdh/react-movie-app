import React from 'react';
import { Box, Container, Grid } from '@mui/material';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const HeaderStyle = css`
    display: flex;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    height: 60px;
    margin-bottom: 5px;
`;

const IconStyle = css`
    font-size: 40px;
    margin-right: 5px;
`;

function AppLayout() {
    return (
        <Container maxWidth="lg">
            <Box css={HeaderStyle}>
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
import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  Grid,
  Box
} from "@mui/material";
import dayjs from "dayjs";

const ChipStyled = styled(Chip)`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: white;
  padding: 0 20px;
`;

export default function LaunchDetails({ flight }) {
  const formattedDate = (launchDate) =>
    dayjs(launchDate).format("DD/MM/YYYY HH:MM");

  return flight ? (
    <Card sx={{ maxWidth: 430, mx: "auto", my: 4 }} data-testid="launchDetails">
      <CardActionArea>
        <ChipStyled
          variant="outlined"
          color="primary"
          label={flight.flight_number}
        />
        <CardMedia
          component="img"
          height="430"
          image={flight?.links?.patch?.large}
          alt={`flight ${flight.name}`}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 24,
                  fontWeight: "bold"
                }}
              >
                {flight.name}
              </Box>
            </Grid>
            <Grid item>
              <Chip label="Rocket" />
            </Grid>
            <Grid item xs sx={{ textAlign: "right" }}>
              <Box
                sx={{
                  fontSize: 18,
                  fontWeight: "regular",
                  lineHeight: 2
                }}
              >
                {formattedDate(flight.date_local)}
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ pt: 2 }}>
              {flight.details}
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : null;
}

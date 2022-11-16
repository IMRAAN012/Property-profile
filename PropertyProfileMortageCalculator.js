/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { shadowColor } from "theme/color";
import { Card, Grid, Button, InputAdornment } from "@mui/material";
import { fontsize24, poppins500, poppins400 } from "theme/common.style";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";
import PercentTwoToneIcon from "@mui/icons-material/PercentTwoTone";
import TextField from "@mui/material/TextField";

function PropertyProfileMortageCalculator(props) {
  return (
    <Card
      variant="outlined"
      style={{
        borderRadius: "8px",
        boxShadow: `0px 1px 8px ${shadowColor}`,
        padding: "30px 20px",
        marginTop: "14px",
      }}
    >
      <Grid>
        <Grid sx={{ ...poppins500, ...fontsize24 }}>Mortgage Calculator</Grid>
        <Grid container>
          <Grid
            item
            sx={{
              display: "flex",
            }}
          >
            <Grid
              rowGap={2}
              columnGap={12}
              container
              sx={{
                borderRadius: "10px",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#F8F8F8",
                padding: "20px",
              }}
            >
              <Grid
                xs={3}
                color="#666666"
                display="flex"
                flexDirection="column"
                sx={{ ...poppins400, ...fontsize24 }}
              >
                Total Amount
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyTwoToneIcon
                          style={{
                            paddingRight: "6px",
                            borderRight: "1px solid black",
                            color: "#000000",
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid
                xs={3}
                color="#666666"
                display="flex"
                flexDirection="column"
                sx={{ ...poppins400, ...fontsize24 }}
              >
                Total Amount
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyTwoToneIcon
                          style={{
                            paddingRight: "6px",
                            borderRight: "1px solid black",
                            color: "#000000",
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid
                xs={3}
                color="#666666"
                display="flex"
                flexDirection="column"
                sx={{ ...poppins400, ...fontsize24 }}
              >
                Total Amount
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PercentTwoToneIcon
                          style={{
                            paddingRight: "6px",
                            borderRight: "1px solid black",
                            color: "#000000",
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid
                xs={3}
                columnGap={3}
                color="#666666"
                display="flex"
                flexDirection="column"
                sx={{ ...poppins400, ...fontsize24 }}
              >
                Loan Terms
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthTwoToneIcon
                          style={{
                            paddingRight: "6px",
                            borderRight: "1px solid black",
                            color: "#000000",
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid
                xs={3}
                columnGap={3}
                color="#666666"
                display="flex"
                flexDirection="column"
                sx={{ ...poppins400, ...fontsize24 }}
              >
                Property Tax
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyTwoToneIcon
                          style={{
                            paddingRight: "6px",
                            borderRight: "1px solid black",
                            color: "#000000",
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid
                xs={3}
                columnGap={3}
                color="#666666"
                display="flex"
                flexDirection="column"
                sx={{ ...poppins400, ...fontsize24 }}
              >
                Home Insurance
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PercentTwoToneIcon
                          style={{
                            paddingRight: "6px",
                            borderRight: "1px solid black",
                            color: "#000000",
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              sx={{
                display: "flex",
              }}
            >
              <Grid container padding={5}>
                <Grid
                  xs={12}
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ ...poppins500, ...fontsize24 }}
                >
                  <Button color="secondary" variant="contained">
                    Calculate
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

PropertyProfileMortageCalculator.propTypes = {};

export default PropertyProfileMortageCalculator;

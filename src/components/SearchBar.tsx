import React from "react";
import {
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  titleText: {
    width: "242px",
    height: "23px",
    top: "123px",
    left: "370px",
    gap: "0px",
    opacity: "0px",
    font: "Pretendard",
    weight: "600",
    size: "32px",
    Letter: "-0.3px",
  },
});

const SearchBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" mb={2} position="relative">
      <Grid container sx={{ color: "text.primary" }}>
        <Grid item xs={4}>
          <Typography className={`${classes.titleText}`}>
            행사 등록 요청 목록
          </Typography>
        </Grid>

        <Box position="relative" width="788px" height="120px" bgcolor="#F8FCFF">
          <TextField
            label="검색"
            variant="outlined"
            size="small"
            style={{ marginRight: 16, marginTop: 30, marginLeft: 40 }}
          />
          <FormControl
            variant="outlined"
            size="small"
            style={{ marginRight: 16, marginTop: 30 }}
          >
            <InputLabel>승인 상태</InputLabel>
            <Select label="승인 상태" defaultValue="전체">
              <MenuItem value="전체">전체</MenuItem>
              <MenuItem value="승인 대기">승인 대기</MenuItem>
              <MenuItem value="승인 허가">승인 허가</MenuItem>
              <MenuItem value="승인 거절">승인 거절</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginRight: 36, marginBottom: "auto" }}
        >
          승인
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 36, marginBottom: "auto" }}
        >
          승인 거절
        </Button>
      </Grid>
    </Box>
  );
};

export default SearchBar;

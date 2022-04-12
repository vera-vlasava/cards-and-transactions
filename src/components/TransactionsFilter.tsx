import React, { useState } from "react";

import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const InputFilter = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 7,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 14,
    color: "gray",
    width: "100%",
    padding: "10px 30px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: "sans-serif",
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

type Props = {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TransactionsFilter = ({ changeHandler }: Props): React.ReactElement => {
  return (
    <div className="input-wrapper">
      <FormControl fullWidth variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Amount Filter
        </InputLabel>
        <InputFilter
          fullWidth
          defaultValue="Filter your transactions"
          id="bootstrap-input"
          onChange={changeHandler}
        />
      </FormControl>
    </div>
  );
};

export default TransactionsFilter;

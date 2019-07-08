import React from "react";
import { ActivityIndicator } from "react-native";
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";
import styled from "styled-components";

const Containermine =styled.View`
    flex:1;
    background-color : ${BG_COLOR};
    justify-content: center;
`;

export default () => (
  <Containermine>
    <ActivityIndicator color={TINT_COLOR}/>
  </Containermine>
);

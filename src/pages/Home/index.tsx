import React from "react";
import * as S from "./styles";
import { useTheme } from "../../contexts/theme";

import { Text, TouchableOpacity } from "react-native";

export function Home() {
  const { handleChangeTheme } = useTheme();

  return (
    <S.Container>
      <S.Title>Home</S.Title>

      <TouchableOpacity style={{ marginTop: 20, backgroundColor: "red" }} onPress={handleChangeTheme}>
        <Text>Change Color</Text>
      </TouchableOpacity>
    </S.Container>
  );
}

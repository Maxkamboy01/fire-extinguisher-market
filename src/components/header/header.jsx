import React from "react";
import { HeaderStyle } from "./style";

function header() {
  return (
    <HeaderStyle>
      <h1>
        Действуйте
        <span>
          <mark>разумно,</mark>
        </span>
        <br />
        оставайтесь в безопасности
      </h1>
    </HeaderStyle>
  );
}

export default header;

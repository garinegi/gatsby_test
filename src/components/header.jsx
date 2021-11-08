import React from "react";
//import Image from "@components/image"; //追加
import { StaticImage } from "gatsby-plugin-image";

export const Header = () => {
  return(
    <header className="header">
    <div className="headerLogo">
      {/*<Image filename="logo.png" alt="ミチノエキin滋賀" />*/}
      <StaticImage
        src="../images/logo.png" // 相対パス
        width={750}
        alt="ミチノエキin滋賀"
        placeholder="tracedSVG" // ボヤッと読み込ませるオプション。他にもいくつかある
      />
    </div>
    <div className="headerLine">
      {/*<Image filename="separation.png" alt="区切り線" />*/}
      <StaticImage src="../images/separation.png" alt="区切り線" width={750} placeholder="tracedSVG" />
      </div>
    </header>
  )
}


import React from "react";
import { Link } from "gatsby"; //追加
import { Layout } from "@components/layout";
//import Image from "@components/image"; //追加
import { Meta } from "@components/meta"; //追加
import { StaticImage } from "gatsby-plugin-image";

export default () => {
  return (
  <Layout>
    <Meta /> {/* 追加 */}
    <main>
    <Link to={"/test"}>Secondページへのリンク</Link>
      <section className="mainSection -bg">
      <div className="mainContents -center">
      <div className="mainContents__tittle">
      <StaticImage src="../images/main_tittle.png" alt="ミチノエキとは" placeholder="tracedSVG" />
      </div>
      <h1 className="mainComtents__subTittle">ミチノエキとは</h1>
      <div className="mainComtents__text">街づくりの発信地“道の駅”を中心とする地域情報満載の配信コンテンツ。<br /><br />
道の駅が提供する滋賀の新しい価値・魅力をより多くの人へお届けしさらなる可能性を拡げるため「ミチノエキ」をスタートさせました。<br />
ゆかりある滋賀から非日常体験な滋賀まで全ての滋賀情報がここに。</div>
      </div>
      </section>
      <section className="mainSection -bg2">
<ul className="mainItemContainer -col2">
	<li className="mainItemContainer__item">
	<figure className="mainItemContents">
  <StaticImage src="../images/main_icon01.png" alt="フリーペーパー道の駅" placeholder="tracedSVG" />
　<h2 className="mainItemContents__tittle -greenFt">フリーペーパー 道の駅 滋賀版<br />
2022年3月1日発刊</h2>
	<figcaption className="mainItemContents__text">地元の特産品・グルメ・レジャーなど、今や目的地として注目されている道の駅。<br />
そんな道の駅の魅力と滋賀情報を発信しているのが「フリーペーパー道の駅」です。<br />
地元をより深く知る、より愉しむきっかけになるため手にした人が本誌を通して、滋賀の暮らしをより楽しめることを願い人と街をつなぐ情報誌に。
</figcaption>
</figure></li>
	<li className="mainItemContainer__item -spMt">
	<figure className="mainItemContents">
  <StaticImage src="../images/main_icon02.png" alt="滋賀「近江百景」" placeholder="tracedSVG" />
　<h2 className="mainItemContents__tittle -blueFt">滋賀「近江百景」を作ろう！<br />
Instagramで投稿募集中！</h2>
	<figcaption className="mainItemContents__text">滋賀を愛する人のフォト記録を大募集！<br />
「滋賀のええとこ」「滋賀のうまいもん」あなた目線の滋賀を「ミチノエキ」を通してみなさまへお届けしませんか？<br />
レンズ越しならではのディープな滋賀まで、あらゆる世界観を募集しています。<br />
「＃近江百景を作ろう」フォトコンテストを 近日実施予定！詳細は後日配信させていただきます。 </figcaption>
</figure></li>
</ul>
</section>
<section className="instaArea">
<div className="instaArea__tittle"><StaticImage src="../images/instagram.png" alt="インスタタイトル" placeholder="tracedSVG" /></div>
<ul className="instaArea__photos">
<li className="instaArea__list"><a href="https://www.instagram.com/omi100kei/" target="_blank">
  <StaticImage src="../images/insta_photo01.png" alt="インスタ写真" placeholder="tracedSVG" /></a></li>
  <li className="instaArea__list"><a href="https://www.instagram.com/omi100kei/" target="_blank">
  <StaticImage src="../images/insta_photo02.png" alt="インスタ写真" placeholder="tracedSVG" /></a></li>
  <li className="instaArea__list"><a href="https://www.instagram.com/omi100kei/" target="_blank">
    <StaticImage src="../images/insta_photo03.png" alt="インスタ写真" placeholder="tracedSVG" /></a></li>
    <li className="instaArea__list"><a href="https://www.instagram.com/omi100kei/" target="_blank">
      <StaticImage src="../images/insta_photo04.png" alt="インスタ写真" placeholder="tracedSVG" /></a></li>
      <li className="instaArea__list"><a href="https://www.instagram.com/omi100kei/" target="_blank">
        <StaticImage src="../images/insta_photo05.png" alt="インスタ写真" placeholder="tracedSVG" /></a></li>
        <li className="instaArea__list"><a href="https://www.instagram.com/omi100kei/" target="_blank">
          <StaticImage src="../images/insta_photo06.png" alt="インスタ写真" placeholder="tracedSVG" /></a></li>
</ul>

<div className="instagramLink mb4 buttonH">
				<div className="button arrow taC">
					<a href="https://www.instagram.com/omi100kei/" target="_blank">
					<StaticImage src="../images/instagram-btn_sp.png" alt="インスタボタン" placeholder="tracedSVG" />
					</a>
				</div>
</div>


</section>
<section className="contactArea -bg">
<div className="mainContents -center">
<div className="mainContents__tittle -mt-50">
  <StaticImage src="../images/contact_tittle.png" alt="お問い合わせ" placeholder="tracedSVG" />
</div>
<h1 className="mainComtents__subTittle">運営会社／お問い合わせ先</h1>
</div>

<div className="companyArea">
<p className="companyArea__Name">株式会社REED ホールディングス</p>
<div className="companyArea__address">〒525-0001　滋賀県草津市下物町1091-161<br />
TEL：077-598-0185</div>
</div>

<figure className="contactIconArea">
<div className="contactIconArea__icon">
    <StaticImage src="../images/contact_icon.png" alt="mail" placeholder="tracedSVG" />
    </div>
</figure>
</section>
    </main>
  </Layout>
)
}


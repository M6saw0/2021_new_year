import React from "react"
import {Link} from "react-router-dom"
import { Header } from "./Header"
import {defaultPath} from "./Home"
import { makeStyles } from '@material-ui/core/styles';
import {Footer} from "./Footer"

const singlePageStyles = makeStyles((theme) => ({
  root: {
        backgroundColor: "#ffffff",
        minHeight: "100vh",
  },
  wrap: {
        margin: "5% 5% 0 5%",
  },
  content: {
        fontFamily: "'Sawarabi Mincho', sans-serif",
        fontSize: "4wv",
  },
  h1: {
    fontFamily: "'M PLUS 1p', sans-serif",
    color: "#000000",
    fontSize: "7.5wv",
    borderBottom: "1px solid #cccccc",
  },
  h2: {
    fontFamily: "'M PLUS 1p', sans-serif",
    color: "#000000",
    fontSize: "6wv",
    paddingLeft: "5px",
    borderLeft: "15px solid #9cb4a4",
  },
  p: {
        margin: "0 5%",
  },
  linkClass: {
    color: "#555555",
    textDecoration: "none",
    borderBottom: "2px solid #555555",
    paddingBottom: "0.2wv",
  }
}));

const Greet = () => {
    const classes = singlePageStyles()

    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.wrap}>
                <div className={classes.content}>
                    <h1 className={classes.h1}>新年のご挨拶</h1>
                    <div className={classes.p}>
                        <p>新年あけましておめでとうございます。(でいいでしょうか？)</p>
                        <p>お元気ですか？僕のほうはまあまあです。</p>
                        <p>早速ですが、卒業後の近況を勝手に話していこうと思います。</p>
                    </div>
                    <h2 className={classes.h2}>近況報告</h2>
                    <div className={classes.p}>
                        <p>
                            まずはお仕事について。三ヶ月の研修が終わり、７月の頭でプロジェクトに配属されました。現在も継続してそのプロジェクトに参画しています。プロジェクトはデータベース系のものであんまり機械学習とかは関係ないです。会社の同僚はプライドが高い人が多く、会話の中で頻繁に褒める必要があるため鬱陶しいです。友達は一人だけできました。
                        </p>
                        <p>
                            私生活については特に更新はありません。筋トレは継続しています。肩幅が広がり、最近スーツが入らなくなりました。また最近は一人カラオケができるようになりました。お金が入ってくるようになったのでボルダリングもシューズを買って楽しんでいます。あとは、５月に籍を入れられるように動いています。
                        </p>
                        <p>
                            次は仕事について少し書いていこうと思います。教え子が働いている様をしみじみ感じていただければ幸いです。
                        </p>
                    </div>
                    <b>Next &gt;&gt; <Link to={defaultPath + "/work"} className={classes.linkClass}>お仕事について</Link></b>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export {Greet, singlePageStyles}
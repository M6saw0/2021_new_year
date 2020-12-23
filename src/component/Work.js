import React from "react"
import {Link} from "react-router-dom"
import {Header} from "./Header"
import { Footer } from "./Footer"
import {singlePageStyles} from "./Greet"

const Work = () => {
    const classes = singlePageStyles()

    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.wrap}>
                <div className={classes.content}>
                    <h1 className={classes.h1}>お仕事について</h1>
                    <div className={classes.p}>
                        <p>
                            仕事の内容について簡単に紹介します。こんなことがやりたい教え子がいたら（いないと思いますが）僕を紹介してくれれば説明します。
                        </p>
                    </div>
                    <h2 className={classes.h2}>職種</h2>
                    <div className={classes.p}>
                        <p>
                            職種はデータベースエンジニアなのかな、データベース設計に関するお仕事に従事しています。天文でもデータがたくさんあるのでデータベースなど使ってるかもしれませんが、工場やアプリケーションで発生したデータもデータベースにたまります。それらのデータを速く処理するためのデータベースやデータ変換処理の設計をするプロジェクトに参画して働いています。（といっても設計などは新卒でやらしてもらえませんが…）
                        </p>
                        <h2>初めてのプロジェクト配属</h2>
                        <p>
                            ７月に配属された初プロジェクトに継続的にアサインされ（僕も横文字を使うような大人になってしまいました）、現在に至ります。プロジェクト内容は、半導体工場のデータベース設計です。全国三箇所にある工場で生じるデータを統合して一元管理するためのデータベース及びデータ変換処理設計をしています。僕自身はユーザー向けのツールやテストツールなどの作成などをしています。
                        </p>
                        <p>
                            仕事は基本的に在宅ですが、9月後半からは長崎に出張していました。誕生日も長崎で過ごすという最悪の展開になりました。出張は筋トレもできずに、だいぶストレスが溜まりました。在宅の素晴らしさを噛み締めました。
                        </p>
                    </div>
                    <h2 className={classes.h2}>いま興味のあること</h2>
                    <div className={classes.p}>
                        <p>
                            データベース設計は面白いですが、今後はもう少し個人でできるスケールのことをやりたいなぁと考えています。具体的には、強化学習やスクレイピングなどを使用する案件に入りたいなぁと思っています。
                        </p>
                        <br/>
                        <p>お仕事についてはこんな感じです。</p>
                    </div>
                    <b>Next &gt;&gt; <Link to="/closing" className={classes.linkClass}>最後に</Link></b>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export {Work}
import React from "react"
import {Header} from "./Header"
import { Footer } from "./Footer"
import {singlePageStyles} from "./Greet"

const Closing = () => {
    const classes = singlePageStyles()

    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.wrap}>
                <div className={classes.content}>
                    <h1 className={classes.h1}>最後に</h1>
                    <div className={classes.p}>
                        <p>
                            僕の近況はこんなところです。興味なかったかもしれませんが、元気にやっていることだけでもわかっていただけたかなと思います。
                        </p>
                        <p>
                            エリックはD進するようですが、高エネもD進する方は出ましたか？天体理論グループは非常に良い研究室だと思います。研究室の益々の発展をお祈りしています。就活の不採用通知のような締めになってしまい大変恐縮ですが、このあたりで閉じさせていただきます。
                        </p>
                        <p>それでは良いお年を。</p>
                        <br/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export {Closing}
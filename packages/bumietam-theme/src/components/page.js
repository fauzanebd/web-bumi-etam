import React from "react"
import { connect, Head } from "frontity"

const Page = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]

    const Html2React = libraries.html2react.Component

    return (
        <div>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
            <h2>{page.title.rendered}</h2>
            {/* <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} /> */}
            <Html2React html={page.content.rendered} />
        </div>
    )
}

export default connect(Page)
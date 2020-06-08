import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"

//const axios = require("axios")

// const foo = async () => {
//   const fetchFormItems = () =>
//     axios.get(
//       `https://sheets.googleapis.com/v4/spreadsheets/1tfg7yW8GKWSHRVGey-o3AQ-fqcKR3aZUqyY2_lE1AB0/values:batchGet?ranges=1&majorDimension=ROWS&key=AIzaSyAvHGj2tlVVdPnqq3stJdYB3sJuT-2h9aQ`
//     )

//   const response = await fetchFormItems()
//   const arrayOfItems = response.data.valueRanges[0].values
//   let rows = []
//   for (var i = 1; i < arrayOfItems.length; i++) {
//     var rowObject = {}
//     for (var j = 0; j < arrayOfItems[i].length; j++) {
//       rowObject[arrayOfItems[0][j]] = arrayOfItems[i][j]
//     }
//     rows.push(rowObject)
//   }

//   console.log("data", rows)
// }
// foo()
//const app_id = process.env.GATSBY_GOOGLESS_URL;

const fee = () => {
  // console.log("app_id",app_id)
}
fee()
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allPost {
        edges {
          node {
            text
            postID
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        {data.allPost.edges.map(i => {
          return( 
            <Link to={`article/${i.node.postID}`}><h2>{i.node.text}</h2></Link>
              )
        })}
      </div>
    </Layout>
  )
}

export default BlogPage

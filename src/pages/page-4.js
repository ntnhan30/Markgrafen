// import React from "react"
// import Layout from "../components/layout"
// import { graphql, useStaticQuery } from "gatsby"


// const fourthPage = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allitem{
//         edges {
//           node {
//             url
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <Layout>
//       <div>
//         <h1>Blog</h1>
//         {data.allitem.edges.map(i => {
//           return <h2>{i.node.url}</h2>
//         })}
//       </div>
//     </Layout>
//   )
// }

// export default fourthPage

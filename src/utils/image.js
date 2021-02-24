
// const optimizedImage = (relativePath) => {
//   const query = graphql`
//   query {
//     fileName: file(relativePath: { eq: { regex: "/${relativePath}/" } } }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
//   `
//   return query
// }

// export default optimizedImage
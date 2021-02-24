// import { Link, graphql, useStaticQuery } from 'gatsby'
// import { gql, useQuery } from '@apollo/client';

// const optimizedImage = (relativePath) => {
//   const query = useStaticQuery(graphql`
//   query ($path: String="${relativePath}") {
//     fileName: file(relativePath: { eq: $path }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
//   `)
//   return query
// }

// export default optimizedImage

// function Dogs({ onDogSelected }) {
//   const { loading, error, data } = useQuery(GET_DOGS);

//   if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;

//   return (
//     <select name="dog" onChange={onDogSelected}>
//       {data.dogs.map(dog => (
//         <option key={dog.id} value={dog.breed}>
//           {dog.breed}
//         </option>
//       ))}
//     </select>
//   );
// }
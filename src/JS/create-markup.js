// export { createMarkup };

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => `<div class="photo-card">
//         <a href="${largeImageURL}"><img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy" width="320" height="200" /></a>
//       <div class="info">
//         <p class="info-item">
//           <b>Likes: ${likes}</b>
//         </p>
//         <p class="info-item">
//           <b>Views: ${views}</b>
//         </p>
//         <p class="info-item">
//           <b>Comments: ${comments}</b>
//         </p>
//         <p class="info-item">
//           <b>Downloads: ${downloads}</b>
//         </p>
//       </div>
//     </div>`
//     )
//     .join('');
// }

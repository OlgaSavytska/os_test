// import photoSetTemplate from "../templates/gallery.hbs";
// import handleGalleryClick from "./handle-gallery";
// import observer from "./observer";

// export default function applyNewGallery(domElement) {
//   // console.log("applyNewGallery start -> domElement :", domElement);
//   const galleryMarkup = photoSetTemplate();
//   let galleryRef = document.querySelector(".gallery");
//   let loadMoreRef = document.querySelector(".loader-ellips");
//   domElement.insertAdjacentHTML("afterend", galleryMarkup);

//   if (galleryRef !== null) {
//     galleryRef.remove();
//   }

//   if (loadMoreRef !== null) {
//     observer.unobserve(loadMoreRef);
//     loadMoreRef.remove();
//   }


//   galleryRef = document.querySelector(".gallery");

//   galleryRef.addEventListener("click", handleGalleryClick);

//   // console.log("applyNewGallery finish -> galleryRef :", galleryRef);

//   return galleryRef;
// }

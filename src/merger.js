// kindly borrowed from Alex Fernandez to check existing prototype methods

exports.mergeExtension = function(prototype, newExtension) {
   for (var key in newExtension) {
      if (prototype.hasOwnProperty(key)) {
         console.warn(`${key} already exists on ${prototype}`)
         continue;
      }
      Object.defineProperty(prototype, key, {
         value: newExtension[key],
         writable: true,
      });
   }
};

exports.mergeGetters = (prototype, getter) => {
   for (var key in getter) {
      if (prototype.hasOwnProperty(key)) {
         console.warn(`${key} already exists on ${prototype}`)
         continue;
      }
      Object.defineProperty(prototype, key, getter[key]);
   }
}
/**
 * Get offset element
 * @param { Element } input Element to find out coordinates
 * @returns { Object } The coordinates of elemnt in object
 */
const offset = (elem) => {
  const rect = elem.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  return {
    top: rect.top + scrollTop
  }
}

/**
 * Show prioritets of mission
 * @param {*} input HTML element
 * @param {number} input when start animation
 * @param {*} input set state
 * @return {Boolean} Boolean
 */
export const AnimationPosition = (elemRef, animStart, isAnimate) => {
  const windowScrollTop = window.scrollY;
  const elemHeight = elemRef.current.offsetHeight;
  const elemOffset = offset(elemRef.current).top;
  const animationStart = animStart;

  let animationPoint = window.innerHeight - elemHeight / animationStart;

  if (elemHeight > window.innerHeight) {
    animationPoint = window.innerHeight - window.innerHeight / animationStart;
  }

  if ((windowScrollTop > elemOffset - animationPoint) && windowScrollTop < (elemOffset + elemHeight)) {
    return isAnimate(true);
  } else {
    return isAnimate(false);
  }
}

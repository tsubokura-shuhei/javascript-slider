const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-image');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  let activeIndex = 0

  thumbnails[1].addEventListener('click', () => {
    mainImage.src = thumbnails[1].src;
    thumbnails[1].classList.add("active")
    thumbnails[0].classList.remove("active")
    thumbnails[2].classList.remove("active")
    activeIndex = 1
  });
  thumbnails[0].addEventListener('click', () => {
    mainImage.src = thumbnails[0].src;
    thumbnails[0].classList.add("active")
    thumbnails[1].classList.remove("active")
    thumbnails[2].classList.remove("active")
    activeIndex = 0
  });
  thumbnails[2].addEventListener('click', () => {
    mainImage.src = thumbnails[2].src;
    thumbnails[2].classList.add("active")
    thumbnails[0].classList.remove("active")
    thumbnails[1].classList.remove("active")
    activeIndex = 2
  });

  next.addEventListener("click",() => {
    activeIndex++;

    if(activeIndex > 2){
      activeIndex = 0;
    }
    mainImage.src = thumbnails[activeIndex].src
    thumbnails[0].classList.remove("active")
    thumbnails[1].classList.remove("active")
    thumbnails[2].classList.remove("active")
    thumbnails[activeIndex].classList.add("active")
  })

  prev.addEventListener("click",() => {
    activeIndex--;

    if(activeIndex < 0){
      activeIndex = 2;
    }
    mainImage.src = thumbnails[activeIndex].src
    thumbnails[0].classList.remove("active")
    thumbnails[1].classList.remove("active")
    thumbnails[2].classList.remove("active")
    thumbnails[activeIndex].classList.add("active")
  })
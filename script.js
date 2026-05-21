(function() {
  function createSlide(imgUrl, alt, isActive) {
    const div = document.createElement('div');
    div.className = 'carousel-item' + (isActive ? ' active' : '');
    div.innerHTML = `<div class="screenshot-carousel-item text-center p-2"><img src="${imgUrl}" class="d-block w-100 carousel-img-fixed" alt="${alt}" style="border-radius: 20px; object-fit: contain;"></div>`;
    return div;
  }

  // Internship images
  const internPaths = [
    "IMAGE/AZ_Submission/Screenshot 2026-05-21 150018.png", "IMAGE/AZ_Submission/Screenshot 2026-05-21 142147.png",
    "IMAGE/AZ_Submission/Screenshot 2026-03-05 134456.png", "IMAGE/AZ_Submission/Screenshot 2026-03-05 100733.png",
    "IMAGE/AZ_Submission/Screenshot 2026-03-05 100712.png", "IMAGE/AZ_Submission/Screenshot 2026-03-04 151629.png",
    "IMAGE/AZ_Submission/Screenshot 2026-03-04 151522.png", "IMAGE/AZ_Submission/Screenshot 2026-02-26 101641.png",
    "IMAGE/AZ_Submission/Screenshot 2026-02-26 094820.png", "IMAGE/AZ_Submission/Screenshot 2026-02-24 102834.png"
  ];
  const internContainer = document.getElementById('internshipCarouselInner');
  if(internContainer){
    internPaths.forEach((p, idx) => {
      internContainer.appendChild(createSlide(p, `Internship ${idx+1}`, idx===0));
    });
  }

  // Admin capstone
  const adminPaths = [
    "IMAGE/Admin_Registrar/Screenshot 2026-05-21 153252.png","IMAGE/Admin_Registrar/Screenshot 2026-05-21 153259.png",
    "IMAGE/Admin_Registrar/Screenshot 2026-05-21 153307.png","IMAGE/Admin_Registrar/Screenshot 2026-05-21 153319.png",
    "IMAGE/Admin_Registrar/Screenshot 2026-05-21 153331.png","IMAGE/Admin_Registrar/Screenshot 2026-05-21 153406.png",
    "IMAGE/Admin_Registrar/Screenshot 2026-05-21 153416.png","IMAGE/Admin_Registrar/Screenshot 2026-05-21 153427.png",
    "IMAGE/Admin_Registrar/Screenshot 2026-05-21 153446.png","IMAGE/Admin_Registrar/Screenshot 2026-05-21 153503.png",
    "IMAGE/Admin_Registrar/Screenshot 2026-05-21 153922.png"
  ];
  const studentPaths = [
    "IMAGE/student_registrar/Screenshot 2026-05-21 153801.png","IMAGE/student_registrar/Screenshot 2026-05-21 153811.png",
    "IMAGE/student_registrar/Screenshot 2026-05-21 153816.png","IMAGE/student_registrar/Screenshot 2026-05-21 153825.png",
    "IMAGE/student_registrar/Screenshot 2026-05-21 153851.png","IMAGE/student_registrar/Screenshot 2026-05-21 153904.png",
    "IMAGE/student_registrar/Screenshot 2026-05-21 153914.png","IMAGE/student_registrar/Screenshot 2026-05-21 153927.png"
  ];
  const adminContainer = document.getElementById('adminCarouselInner');
  const studentContainer = document.getElementById('studentCarouselInner');
  if(adminContainer){
    adminPaths.forEach((p,idx) => adminContainer.appendChild(createSlide(p, `Admin view ${idx+1}`, idx===0)));
  }
  if(studentContainer){
    studentPaths.forEach((p,idx) => studentContainer.appendChild(createSlide(p, `Student view ${idx+1}`, idx===0)));
  }

  // profile fallback
  const profile = document.getElementById('profileImage');
  if(profile && profile.complete && profile.naturalWidth===0) profile.src = 'https://placehold.co/500x500?text=Emmar+Canas';
  profile?.addEventListener('error',()=> profile.src = 'https://placehold.co/500x500?text=Profile+Photo');

  // scroll navbar effect
  window.addEventListener('scroll', function(){
    document.querySelector('.navbar')?.classList.toggle('navbar-scrolled', window.scrollY > 24);
  });

  // Mailto fallback: ensure mail links open the mail client
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      // prevent default navigation behavior and explicitly set location
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    });
  });
})();
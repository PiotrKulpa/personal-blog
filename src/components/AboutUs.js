import React, { memo } from 'react';

const AboutUs = () => {
    return (
      <section className="about-wrap-layout1">
          <div className="container">
              <div className="row">
                  <div className="col-lg-7 d-flex align-items-center order-lg-2">
                      <div className="about-box-layout2">
                          <h5 className="item-title"><span>A</span> bsolwent Uniwersytetu Medycznego w Lublinie. Autor publikacji w czasopismach branżowych. Uczestnik licznych krajowych i zagranicznych kursów oraz konferencji naukowych. Zajmuję się również zabiegami Medycyny Estetycznej. Obecnie jestem adiunktem w Katedrze i Zakładzie Protetyki Stomatologicznej Uniwersytetu Medycznego w Lublinie.</h5>
                          <p>W latach 2001-2002 byłem asystentem w Zakładzie Stomatologii Zachowawczej UM w Lublinie. 2001-2007 byłem asystentem w Poradni Chirurgii Stomatologicznej Wojewódzkiej Przychodni Stomatologicznej w Lublinie. 2002-2006 byłem rezydentem w trakcie specjalizacji w Katedrze i Zakładzie Protetyki Stomatologicznej z Pracownią Implantologii Stomatologicznej i Pracownią Zaburzeń Czynnościowych Narządu Żucia Uniwersytetu Medycznego w Lublinie. W 2004 uzyskałem stopień doktora nauk medycznych. W 2006 uzyskałem tytuł specjalisty w dziedzinie Protetyki Stomatologicznej. W 2014 roku ukończyłem czteroletni Implant Continuum Education Program w Collage of Dentistry New York University. W 2015 uzyskałem certyfikat Umiejętności w Dziedzinie Implantologii Stomatologicznej EDI OSIS. Moje prywatne zainteresowania to: sporty wodne i zimowe, motoryzacja, film. Zapraszam do zapoznania się z moim blogiem...</p>
                          <div className="about-right-side-content">O Mnie</div>
                      </div>
                  </div>
                  <div className="col-lg-5 order-lg-1">
                      <div className="about-box-layout1">
                          <img src="/img/aboutme-img.jpg" alt="About Us" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default memo(AboutUs);

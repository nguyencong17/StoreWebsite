import React from 'react';
import CarouselContainer from '../../components/Carousel/Carousel.jsx';
import './Home.scss';
function Home(props) {
  return (
    <div style={{marginBottom: '200px'}}>

    <div className="wrapper" style={{marginTop: '96px'}}>
        <div className="background">
            <CarouselContainer></CarouselContainer>
        </div>
        <div className="header__title" data-aos="fade-right">
                <div className="header__title--name">
                    <h3>Feel The Rhythm</h3>
                </div>
                <div className="header__title--slogan">
                    <h2>Inspired Design Quality Sound With Beats </h2>
                </div>
                <div className="header__title--des">

                    Love what you listen, listen to what you love. Music speaks when words don’t. Make it clear. Let
                    music reach your heart.

                </div>
                <div className="header__title--action ">
                    <a href="catalog.html"><button className="btn btn-shopnow btn-rouded">SHOP NOW</button></a>
                </div>
            </div>
    </div>
      <div className="wrapper2 ">
        <div className="section">
          <div className="section__1">
            <div className="section--image" data-aos="fade-right">
              <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/1.png" alt="Section1" id="pro-section-1" />
            </div>
            <div className="section__detail" data-aos="fade-left">
              <div className="section__deatil--name">Shoe Nike Air Max Sneakers</div>
              <div className="section__detail--title">Amazing Sound gadgets for runner long distance</div>
              <div className="section__detail--des">
                Sed viverra ipsum nunc aliquet bibendum. Viverra ipsum nunc aliquet bibendum enim facilisis gravida
                neque. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper.
              </div>
              <a href="catalog.html">
                <button className="btn btn-shopnow btn-rouded">SHOP NOW</button>
              </a>
            </div>
          </div>
          <div className="section__2">
            <div className="section__detail" data-aos="fade-right">
              <div className="section__deatil--name">Sneakers Shoe Nike ONE</div>
              <div className="section__detail--title">High-Quality Material True Wireless Earbuds</div>
              <div className="section__detail--des">
                Morbi quis commodo odio aenean. Adipiscing diam donec adipiscing tristique. Sit amet aliquam id diam
                maecenas ultricies mi eget.
              </div>
              <a href="catalog.html">
                <button className="btn btn-shopnow btn-rouded">SHOP NOW</button>
              </a>
            </div>
            <div className="section--image" data-aos="fade-left">
              <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/2.png" alt="Section1" id="pro-section-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper3">
        <div className="introduce">
          <div className="introduce__left">
            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/8.png" alt="" id="image-ban" />
          </div>

          <div className="introduce__right" data-aos="fade-up">
            <h2>Advanced Features</h2>
            <h3>Ultimate comfort and best sound</h3>
            <div className="introduce__right--ex">
              <i className="fab fa-asymmetrik"></i>
              <h4>Bluetooth connectivity</h4>
            </div>
            <div className="introduce__right--ex">
              <i className="fab fa-accusoft"></i>
              <h4>Wireless headphones</h4>
            </div>
            <div className="introduce__right--ex">
              <i className="fas fa-asterisk"></i>
              <h4>Long lasting battery</h4>
            </div>
            <div className="introduce__right--ex">
              <i className="fab fa-audible"></i>
              <h4>Higher water dust resistance</h4>
            </div>

            <a href="catalog.html">
              <button className="btn btn-shopnow btn-rouded btn-rip">SHOP NOW</button>
            </a>
          </div>
        </div>
      </div>

      <div className="wrapper4">
        <div className="square-image"></div>
        <div className="manage">
          <div className="manage__left">
            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/product/about/7.jpg" alt="" />
          </div>
          <div className="manage__right" data-aos="fade-left">
            <hr />
            <div className="mange__right--name">
              <h2>Magical listening experience</h2>
            </div>
            <div className="manage__right--title">
              <h3>Wireless Headphones Ear-buds are Comfort Fit</h3>
            </div>
            <div className="manage__right--des">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt at sint minus ipsa magni corrupti
                nulla, labore perspiciatis tempora ipsam quis est odit inventore, velit ratione reprehenderit sunt
                excepturi eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde praesentium laborum
                cumque, quia officiis facilis dolores beatae totam inventore dolorem cupiditate aspernatur quaerat esse
                eveniet, repudiandae, harum illo. Aliquid!
              </p>
            </div>
            <div className="manage__right--author">
              <h3>Nguyen Duy Cong - VietNam</h3>
            </div>
            <div className="manage__right--note">
              <p>Website Developer</p>
            </div>
          </div>
        </div>
        {/* <div className="pagination">
          <a href="#" className="active"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div> */}
      </div>

      <div className="wrapper5">
        <div className="banner">
          <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/3.jpg" alt="" />
          <div className="banner__title">The Right Headphones</div>
          <div className="banner__des">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat{' '}
              odit minima quia reprehenderit.
            </p>
          </div>

          <div className="banner__video">
            <a href="#video" id="videolink" className="btn playvideo">
              Watch Video{' '}
              <span>
                <i className="far fa-play-circle"></i>
              </span>
            </a>
            <div id="video" className="mfp-hide" style={{maxWidth: '50%', marginLeft: '25%'}}>
              {/* <iframe
                width="760"
                height="515"
                src="https://www.youtube.com/embed/fOFfAc-UqYw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper6">
        <div className="blog__title">
          <hr id="mid" />
          <h2>Good treble performance</h2>
          <h3>Rhythmic Music Blog</h3>
        </div>

        <div className="blog__more">
          <div className="blog__view">
            <div className="blog__view--image">
              <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/4.jpg" alt="" />
              <div className="overlay"></div>
            </div>

            <div className="blog__view--title">
              <a href="./blog.html">White Wireless Earbud</a>
            </div>
            <div className="blog__view--datepost">by DuyCong | 2021/1 | 1 comment</div>
            <div className="blog__view--des">
              White in eu mi bibendum neque egestas congue. Tincidunt nunc pulvinar sapien ...
            </div>
            <a href="./blog.html">
              <button className="btn btn-shopnow btn-rouded readmore">Read More</button>
            </a>
          </div>

          <div className="blog__view">
            <div className="blog__view--image">
              <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/4.jpg" alt="" />
              <div className="overlay"></div>
            </div>
            <div className="blog__view--title">
              <a href="./blog.html">Loudest wireless earbuds</a>
            </div>
            <div className="blog__view--datepost">by DuyCong | 2021/1 | 1 comment</div>
            <div className="blog__view--des">
              White in eu mi bibendum neque egestas congue. Tincidunt nunc pulvinar sapien ...
            </div>
            <a href="./blog.html">
              <button className="btn btn-shopnow btn-rouded readmore">Read More</button>
            </a>
          </div>

          <div className="blog__view">
            <div className="blog__view--image">
              <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/4.jpg" alt="" />
              <div className="overlay"></div>
            </div>
            <div className="blog__view--title">
              <a href="./blog.html">Fun with friends Fun </a>
            </div>
            <div className="blog__view--datepost">by DuyCong | 2021/1 | 1 comment</div>
            <div className="blog__view--des">
              White in eu mi bibendum neque egestas congue. Tincidunt nunc pulvinar sapien ...
            </div>
            <a href="./blog.html">
              <button className="btn btn-shopnow btn-rouded readmore">Read More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

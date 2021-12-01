import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import './About.scss';


function About(props) {
    const namePage = "Về Chúng Tôi";
    return (
        <section id="about" className="content" style={{marginTop: '96px'}}>
        <Banner namePage={namePage}/>
        <div className="wrap">
            <article className="ar1">
                <div className="goal-one">
                    <h2 className="goal-title">Fulfill your shoe needs...</h2>
                    <p className="goal-des">Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu
                        turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo
                        eget felis facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
                        euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat</p>
                    <div className="comment">
                        <p className="comment-des">Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse
                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis
                            facilisis fermentum. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod.
                            Sed arcu. Cras consequat Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum."</p>
                        <span className="comment-author">-Nguyen Duy Cong</span>
                    </div>
                </div>
                <div className="image">
                    <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/about/1.jpg" alt=""/>
                </div>
            </article>

            <article className="ar2">
                <div className="goal-two">
                    <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/product/about/2.jpg" alt=""/>
                </div>
                <div className="content">
                    <div className="content__left">
                        <h2 className="content__left--title">Feel the decibels closely...</h2>
                        <p className="content__left--des">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
                            libero venenatis faucibus. Nullam quis ante. Maecenas nec odio et ante tincidunt tempus.
                            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. ec vitae sapien ut libero
                            venenatis faucibus. Nullam quis ante.</p>
                        <button className="btn btn-shopnow btn-rouded">Show more</button>

                    </div>

                    <div className="content__right">
                        <div className="include item1">
                            <span><i className="fas fa-magic"></i></span>
                            <h3>Listen Differently</h3>
                            <p>Fusce ullamcorper pulvinar enim, ac elementum justo vulputate non tristique.</p>
                        </div>

                        <div className="include item4">
                            <span><i className="fas fa-tags"></i></span>
                            <h3>Feel The Rhythm</h3>
                            <p>Donec erat ligula, ultricies ut eleifend egestas, imperdiet vitae felis.</p>
                        </div>

                        <div className="include item2">
                            <span><i className="fas fa-heart"></i></span>
                            <h3>Dance Your Heart</h3>
                            <p>Aliquam quam diam, ornare at luctus quis, auctor sed leo. vivamus.</p>
                        </div>

                        <div className="include item5">
                            <span><i className="fas fa-user"></i></span>
                            <h3>Sound Of Silence</h3>
                            <p>Phasellus imperdiet eget tellus in ullamcorper. Aliquam varius.</p>
                        </div>

                        <div className="include item3">
                            <span><i className="fas fa-users"></i></span>
                            <h3>Go Wireless</h3>
                            <p> Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
                        </div>

                        <div className="include item6">
                            <span><i className="fas fa-sun"></i></span>
                            <h3>Quality Perfectionist</h3>
                            <p>Morbi quis vitae vehicula libero. Quisque sagittis ligula justo eu euismod.</p>
                        </div>

                    </div>
                </div>
            </article>

            <article className="ar3 ">
                <div className="ar3__left--item1">
                    <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/about/2.jpg" alt=""/>
                </div>
                <div className="ar3__right--item1">
                    <p>Fusce tincidunt metus sit amet gravida euismod. Praesent faucibus felis eu quam sagittis, sit
                        amet faucibus urna rutrum. Suspendisse potenti. Sed ac lectus eget velit volutpat commodo ac
                        eget nisl.</p>
                    <strong>Fine engineering only for your ears</strong>
                </div>

                <div className="ar3__left--item2">
                    <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/about/3.jpg" alt=""/>
                </div>
                <div className="ar3__right--item2">
                    <p>Fusce tincidunt metus sit amet gravida euismod. Praesent faucibus felis eu quam sagittis, sit
                        amet faucibus urna rutrum. Suspendisse potenti. Sed ac lectus eget velit volutpat commodo ac
                        eget nisl.</p>
                    <strong>Fine engineering only for your ears</strong>
                </div>
            </article>

            <article className="ar4">
                <hr/>
                <h2>Thus spoke our customers</h2>
                <div className="customer">
                    <div className="custome__cus1 com">
                        <p>
                            "Donec sem neque, tempor sed mi eu, congue tincidunt dolor. Proin in scelerisque arcu, vel
                            aliquet mauris. Suspendisse potenti. Pellentesque nec nibh mi. Nam vulputate, sapien et
                            sagittis malesuada, libero leo bibendum"
                        </p>
                        <hr id="not"/>
                        <div className="com2">
                            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/product/about/5.jpg" alt=""/>
                            <div className="detail">
                                <h5>Henry</h5>
                                <p>Musician</p>
                            </div>

                        </div>
                    </div>
                    <div className="custome__cus2 com">
                        <p>
                            "Donec sem neque, tempor sed mi eu, congue tincidunt dolor. Proin in scelerisque arcu, vel
                            aliquet mauris. Suspendisse potenti. Pellentesque nec nibh mi. Nam vulputate, sapien et
                            sagittis malesuada, libero leo bibendum"
                        </p>
                        <hr id="not"/>
                        <div className="com2">
                            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/product/about/7.jpg" alt=""/>
                            <div className="detail">
                                <h5>Todd Bower</h5>
                                <p>Developer</p>
                            </div>
                        </div>

                    </div>
                    <div className="customer__cus3 com">
                        <p>
                            "Donec sem neque, tempor sed mi eu, congue tincidunt dolor. Proin in scelerisque arcu, vel
                            aliquet mauris. Suspendisse potenti. Pellentesque nec nibh mi. Nam vulputate, sapien et
                            sagittis malesuada, libero leo bibendum"
                        </p>
                        <hr id="not"/>
                        <div className="com2">
                            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/product/about/6.jpeg" alt=""/>
                            <div className="detail">
                                <h5>Erica Ryan</h5>
                                <p>Professor</p>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

            <article className="ar5">
                <h2>They worked while the...</h2>

                <div className="wrap ">
                    <div className="team">
                        <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/product/about/team-1.jpg" alt=""/>
                        <h5>Phạm Thùy Trang</h5>
                        <p>CEO</p>
                    </div>

                    <div className="team">
                        <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/product/about/team-2.jpg" alt=""/>
                        <h5>Phạm Thanh Thủy</h5>
                        <p>Manage Product</p>
                    </div>

                    <div className="team">
                        <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/product/about/team-3.jpg" alt=""/>
                        <h5>Trần Thùy Ngân</h5>
                        <p>Designer</p>
                    </div>

                    <div className="team">
                        <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/product/about/team-4.jpg" alt=""/>
                        <h5>John Nguyen</h5>
                        <p>Fashioner</p>
                    </div>
                </div>
            </article>
        </div>

    </section>
    );
}

export default About;
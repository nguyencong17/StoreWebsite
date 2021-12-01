import { Paper } from '@material-ui/core';
import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import './Blog.scss'
import ListPages from './pages/ListPages.jsx';
import { Link } from 'react-router-dom';
function Blog(props) {
    const namePage = "Blog";
    return (
        <section id="blog" className="content" style={{marginTop: '96px'}}>
        <Banner namePage={namePage}/>
        <article className="content__main">
            <Paper style={{width: '35%', minWidth: '35%'}}>
            <aside className="content__main--aside">
                <div className="aside">
                    <div className="aside__recent">
                        <h4 id="titrecent">Most Viewed</h4>
                        <div className="aside__recent--item1 item">
                            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/blog/2.jpg" alt=""/>
                            <div className="description">
                                <h5>Nike Air Max 370</h5>
                                <p>Energi in eu mi bibendum neque...</p>
                            </div>
                        </div>
                        <hr className="line-bottomsell"/>
                        <div className="aside__recent--item2 item">
                            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/blog/2.jpg" alt=""/>
                            <div className="description">
                                <h5>Ultraboot 2.5</h5>
                                <p>White in eu mi bibendum...</p>
                            </div>
                        </div>
                        <hr className="line-bottomsell"/>
                        <div className="aside__recent--item3 item">
                            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/blog/2.jpg" alt=""/>
                            <div className="description">
                                <h5>Air Jordan 9</h5>
                                <p>Energi in eu mi bibendum neque...</p>
                            </div>
                        </div>
                        <hr className="line-bottomsell"/>
                        <div className="aside__recent--item4 item">
                            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/blog/2.jpg" alt=""/>
                            <div className="description">
                                <h5>Pegasus</h5>
                                <p>Turpis in eu mi bibendum...</p>
                            </div>
                        </div>
                    </div>

                    <div className="aside__category">
                        <h4>Categories</h4>
                        <ul className="menu-category">
                            <li className="menu-item">
                                <Link >Earbud</Link>
                            </li>
                            <li className="menu-item">
                                <Link >Music</Link>
                            </li>
                            <li className="menu-item">
                                <Link >Sports</Link>
                            </li>
                            <li className="menu-item">
                                <Link >Wireless</Link>
                            </li>

                        </ul>
                    </div>

                    <div className="aside__hotdeal">
                        <h4>Hot Deals</h4>
                        <div className="item itemupdate">
                        <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/blog/2.jpg" alt=""/>
                            <ul className="vote">
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                            </ul>
                            <Link>
                                <h4 className="seller">Comfort Earphone</h4>
                            </Link>
                            <p>$910.00</p>
                        </div>
                        <div className="item itemupdate">
                        <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/blog/2.jpg" alt=""/>
                            <ul className="vote">
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                            </ul>
                            <Link>
                                <h4 className="seller">Comfort Earphone</h4>
                            </Link>
                            <p>$910.00</p>
                        </div>
                        <div className="item itemupdate">
                        <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/blog/2.jpg" alt=""/>
                            <ul className="vote">
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                            </ul>
                            <Link>
                                <h4 className="seller">Comfort Earphone</h4>
                            </Link>
                            <p>$910.00</p>
                        </div>
                        <div className="item itemupdate">
                        <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/blog/2.jpg" alt=""/>
                            <ul className="vote">
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                                <li className="vote-item"><i className="fas fa-star"></i></li>
                            </ul>
                            <Link>
                                <h4 className="seller">Comfort Earphone</h4>
                            </Link>
                            <p>$910.00</p>
                        </div>
                    </div>
                </div>
            </aside>
            </Paper>

            <div className="content__main--blogitem">
                <ListPages/>
            </div>

        </article>
    </section>
    );
}

export default Blog;
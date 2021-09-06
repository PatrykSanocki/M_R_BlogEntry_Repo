import React from "react";
import hintersee from "./pictures/hintersee-3601004_1920.jpg";
import field1 from "./pictures/field-176602_1920.jpg";
import field2 from "./pictures/field-3101302_1920.jpg";
import garda from "./pictures/garda-6510155_1920.jpg";
import grass from "./pictures/grass-3743023_1920.jpg";
import grain from "./pictures/grain-4858574_1920.jpg";
import land from "./pictures/land-3799279_1920.jpg";
import mountain from "./pictures/mountain-landscape-2031539_1920.jpg";
import mountains from "./pictures/mountains-6513559_1920.jpg";
import nature from "./pictures/nature-6515696_1920.jpg";
import forest from "./pictures/forest-3119826_1920.jpg";
import terminalMoraine from "./pictures/terminal-moraine-6506920_1920.jpg";
import tree from "./pictures/tree-3398108_1920.jpg";
import mountainVideo from "./videos/Mountain - 22512.mp4";

import "./App.css";

function App() {
  const [sidebarClassName, setSidebarClassName] = React.useState("");
  const [hideContentVisibility, setHideContentVisibility] = React.useState("");
  const [commentSuccess, setCommentSuccess] = React.useState(true);
  const [clickCount, setClickCount] = React.useState(1200000);
  const [imageTranslation, setImageTranslation] = React.useState({});
  const [modalHidden, setModalHidden] = React.useState(true);

  let openSideBar = () => {
    setSidebarClassName("open");
    setHideContentVisibility("visible");
  };

  let closeSideBar = () => {
    setSidebarClassName("");
    setHideContentVisibility("");
  };

  let submitForm = (e) => {
    e.preventDefault();
    setCommentSuccess(false);
  };

  let scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let openModal = (number) => {
    updateTranslations(1200000 + number);
    setClickCount(1200000 + number);
    setModalHidden(false);
  };

  let closeModal = () => {
    setModalHidden(true);
  };

  let modalPrevBtn = () => {
    updateTranslations(clickCount - 1);
  };

  let modalNextBtn = () => {
    updateTranslations(clickCount + 1);
  };

  let updateTranslations = (clicks) => {
    setClickCount(clicks);
    setImageTranslation({
      transform: "translateX(" + -(clicks % 6) * 100 + "%)",
    });
  };

  return (
    <div className="App">
      <div
        id="hide-content-box"
        className={`hide-content ` + hideContentVisibility}
      ></div>
      <header className="headerbar">
        <div
          role="button"
          on="tap:sidebar1.toggle"
          tabIndex="0"
          className="hamburger"
          onClick={() => openSideBar()}
        >
          ☰
        </div>
        <div className="site-name">
          <p>Blog</p>
        </div>
      </header>
      <div id="sidebar-1" className={sidebarClassName}>
        <button
          type="button"
          aria-label="close sidebar"
          className="close-sidebar"
          onClick={closeSideBar}
        >
          ✕
        </button>
        <ul className="sidebar">
          <li className="outer">
            <a href="#entry1">I. A rabbit</a>
          </li>
          <li className="inner">
            <a href="#entry1_1">I.I. Larem lorem lor</a>
          </li>
          <li className="inner">
            <a href="#entry1_2">I.II. Lorem, ipsum dolor</a>
          </li>
          <li className="inner">
            <a href="#entry1_3">I.III. Ipsum, placeat quia</a>
          </li>
          <li className="outer">
            <a href="#entry2">II. A fish</a>
          </li>
          <li className="inner">
            <a href="#entry2_1">II.I. Culpa hic totam</a>
          </li>
          <li className="inner">
            <a href="#entry2_2">II.II. Minima nisi inventore</a>
          </li>
          <li className="outer">
            <a href="#entry3">III. A Snail</a>
          </li>
          <li className="inner">
            <a href="#entry3_1">III.I. Error numquam quisquam</a>
          </li>
          <li className="inner">
            <a href="#entry3_2">III.II. Pariatur praesentium</a>
          </li>
          <li className="outer">
            <a href="#end">END</a>
          </li>
          <li className="outer">
            <a href="#comments">Comments</a>
          </li>
        </ul>
      </div>
      <div className="wrap" id="top">
        <div className="main-photo-wrap">
          <img
            className="card-img big-photo"
            src={hintersee}
            width="1024"
            height="auto"
            alt="hintersee"
          ></img>
          <h1 className="overlay-text">Blog entry - Lorem ipsum dolor sit.</h1>
        </div>
        <div>
          <p id="entry1" className="entry-title">
            I. A rabbit
          </p>
          <p id="entry1_1" className="entry-title entry-subtitle">
            I.I. Larem lorem lor
          </p>
          <p className="normal-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            expedita incidunt illo non voluptatum mollitia tenetur pariatur iure
            voluptatibus. Error numquam quisquam vitae dignissimos, doloribus
            reiciendis facilis dolores soluta perspiciatis corrupti magni
            laudantium consequuntur sint, maxime voluptatum ab deleniti itaque
            expedita amet! Ipsum quia ea velit reprehenderit a quod consectetur,
            veniam iure veritatis, officia quo dolores obcaecati nobis incidunt
            suscipit ad unde. Ipsum, placeat quia iure corporis obcaecati,
            dolore omnis maiores aliquid culpa hic totam officiis rerum libero
            possimus adipisci! Itaque odit temporibus nemo voluptatibus voluptas
            nihil doloremque! Laboriosam voluptas debitis possimus sequi
            accusantium doloribus saepe aliquid aut cumque temporibus.
          </p>
          <p className="normal-text quotation">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            sapiente.
            <span>Jane Doe</span>
          </p>
          <p id="entry1_2" className="entry-title entry-subtitle">
            I.II. Lorem, ipsum dolor
          </p>
          <p className="normal-text">
            Laborum animi repellat laboriosam numquam dolores quis totam sed,
            vel, quibusdam minima nisi inventore fugit doloribus ullam
            aspernatur vitae eaque accusantium iste quas exercitationem beatae
            tempore. Distinctio natus pariatur praesentium!
          </p>

          <div className="photo-gallery">
            <img
              className="card-img"
              src={field1}
              width="100"
              height="auto"
              alt="field"
              onClick={() => openModal(0)}
            ></img>
            <img
              className="card-img"
              src={field2}
              width="100"
              height="auto"
              alt="field"
              onClick={() => openModal(1)}
            ></img>
            <img
              className="card-img"
              src={garda}
              width="100"
              height="auto"
              alt="garda"
              onClick={() => openModal(2)}
            ></img>
            <img
              className="card-img"
              src={grass}
              width="100"
              height="auto"
              alt="grass"
              onClick={() => openModal(3)}
            ></img>
            <img
              className="card-img"
              src={grain}
              width="100"
              height="auto"
              alt="grain"
              onClick={() => openModal(4)}
            ></img>
            <img
              className="card-img"
              src={land}
              width="100"
              height="auto"
              alt="land"
              onClick={() => openModal(5)}
            ></img>
          </div>
          <div hidden={modalHidden} className="modal-gallery">
            <div className="carousel">
              <div className="screen">
                <div className="film">
                  <img
                    src={field1}
                    width="1920"
                    height="auto"
                    alt="field"
                    style={imageTranslation}
                  ></img>
                  <img
                    src={field2}
                    width="1920"
                    height="auto"
                    alt="field"
                    style={imageTranslation}
                  ></img>
                  <img
                    src={garda}
                    width="1920"
                    height="auto"
                    alt="garda"
                    style={imageTranslation}
                  ></img>
                  <img
                    src={grass}
                    width="1920"
                    height="auto"
                    alt="grass"
                    style={imageTranslation}
                  ></img>
                  <img
                    src={grain}
                    width="1920"
                    height="auto"
                    alt="grain"
                    style={imageTranslation}
                  ></img>
                  <img
                    src={land}
                    width="1920"
                    height="auto"
                    alt="land"
                    style={imageTranslation}
                  ></img>
                </div>
                <button onClick={modalPrevBtn} id="prev">
                  {"<"}
                </button>
                <button onClick={modalNextBtn} id="next">
                  {">"}
                </button>
              </div>
              <button onClick={closeModal} id="close">
                x
              </button>
            </div>
          </div>
          <p id="entry1_3" className="entry-title entry-subtitle">
            I.III. Ipsum, placeat quia
          </p>
          <p className="normal-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam
            cum obcaecati aut porro eum sint velit, quasi cumque possimus
            commodi eius dicta! Voluptas aspernatur impedit fugit voluptates
            quibusdam perspiciatis fuga accusantium quis quod, suscipit optio
            rem earum, laudantium beatae nostrum nisi, tenetur corporis eveniet!
            Quae quia ut reprehenderit adipisci quos consequuntur iusto beatae,
            dignissimos molestias nostrum dolor laborum aperiam corrupti. Totam
            reiciendis perspiciatis blanditiis libero soluta magni alias
            voluptatem amet, ducimus laboriosam quaerat quisquam?
          </p>
        </div>
        <div>
          <p id="entry2" className="entry-title">
            II. A fish
          </p>
          <p id="entry2_1" className="entry-title entry-subtitle">
            II.I. Culpa hic totam
          </p>
          <p className="normal-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            expedita incidunt illo non voluptatum mollitia tenetur pariatur iure
            voluptatibus. Error numquam quisquam vitae dignissimos, doloribus
            reiciendis facilis dolores soluta perspiciatis corrupti magni
            laudantium consequuntur sint, maxime voluptatum ab deleniti itaque
            expedita amet! Ipsum quia ea velit reprehenderit a quod consectetur,
            veniam iure veritatis, officia quo dolores obcaecati nobis incidunt
            suscipit ad unde. Ipsum, placeat quia iure corporis obcaecati,
            dolore omnis maiores aliquid culpa hic totam officiis rerum libero
            possimus adipisci! Itaque odit temporibus nemo voluptatibus voluptas
            nihil doloremque! Laboriosam voluptas debitis possimus sequi
            accusantium doloribus saepe aliquid aut cumque temporibus.
          </p>
          <div>
            <img
              className="card-img big-photo"
              src={mountain}
              width="1024"
              height="auto"
              alt="mountain"
            ></img>
          </div>
          <p className="normal-text quotation">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            sapiente.
            <span>Jane Doe</span>
          </p>

          <p className="normal-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            doloremque consequuntur delectus iste, quae placeat quasi ducimus
            voluptatem tenetur maxime!
          </p>
          <div>
            <img
              className="card-img big-photo"
              src={mountains}
              width="1024"
              height="auto"
              alt="mountains"
            ></img>
          </div>
          <p className="normal-text quotation">
            Laboriosam voluptas debitis possimus sequi accusantium doloribus
            saepe aliquid aut cumque temporibus.
            <span>Frog</span>
          </p>
          <p className="normal-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            repudiandae voluptas quas tempore voluptate tenetur vitae id
            recusandae, consequuntur aut consectetur earum! Sit perspiciatis
            alias illo totam, impedit debitis aperiam.
          </p>
          <div>
            <img
              className="card-img big-photo"
              src={nature}
              width="1024"
              height="auto"
              alt="nature"
            ></img>
          </div>
          <p className="normal-text quotation">
            Exercitationem beatae tempore. Distinctio natus pariatur
            praesentium!
            <span>Genius</span>
          </p>
          <p className="normal-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            laboriosam iste! Eum rem, adipisci ex, iusto mollitia voluptatum
            reiciendis dicta a expedita ducimus, voluptatibus quasi cupiditate
            ipsum possimus quo praesentium nisi quas accusamus quis! Nisi dicta
            odit delectus cumque ipsa!
          </p>
          <p id="entry2_2" className="entry-title entry-subtitle">
            II.II. Minima nisi inventore
          </p>
          <p className="normal-text">
            Laborum animi repellat laboriosam numquam dolores quis totam sed,
            vel, quibusdam minima nisi inventore fugit doloribus ullam
            aspernatur vitae eaque accusantium iste quas exercitationem beatae
            tempore. Distinctio natus pariatur praesentium!
          </p>
          <div className="video-frame">
            <video controls width="1024" height="auto">
              <source src={mountainVideo} type="video/mp4" />
              <p>This browser does not support the video element.</p>
            </video>
          </div>
        </div>
        <div>
          <p id="entry3" className="entry-title">
            III. A Snail
          </p>
          <p id="entry3_1" className="entry-title entry-subtitle">
            III.I. Error numquam quisquam
          </p>
          <p className="normal-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            expedita incidunt illo non voluptatum mollitia tenetur pariatur iure
            voluptatibus. Error numquam quisquam vitae dignissimos, doloribus
            reiciendis facilis dolores soluta perspiciatis corrupti magni
            laudantium consequuntur sint, maxime voluptatum ab deleniti itaque
            expedita amet! Ipsum quia ea velit reprehenderit a quod consectetur,
            veniam iure veritatis, officia quo dolores obcaecati nobis incidunt
            suscipit ad unde. Ipsum, placeat quia iure corporis obcaecati,
            dolore omnis maiores aliquid culpa hic totam officiis rerum libero
            possimus adipisci! Itaque odit temporibus nemo voluptatibus voluptas
            nihil doloremque! Laboriosam voluptas debitis possimus sequi
            accusantium doloribus saepe aliquid aut cumque temporibus.
          </p>
          <div>
            <img
              className="card-img big-photo"
              src={forest}
              width="1024"
              height="auto"
              alt="forest"
            ></img>
            <div>
              <img
                className="card-img big-photo"
                src={terminalMoraine}
                width="1024"
                height="auto"
                alt="terminal moraine"
              ></img>
            </div>
            <div>
              <img
                className="card-img big-photo"
                src={tree}
                width="1024"
                height="auto"
                alt="tree"
              ></img>
            </div>
          </div>
          <p id="entry2_2" className="entry-title entry-subtitle">
            III.II. Pariatur praesentium
          </p>
          <p className="normal-text">
            Laborum animi repellat laboriosam numquam dolores quis totam sed,
            vel, quibusdam minima nisi inventore fugit doloribus ullam
            aspernatur vitae eaque accusantium iste quas exercitationem beatae
            tempore. Distinctio natus pariatur praesentium!
          </p>
        </div>
        <div>
          <p id="end" className="entry-title">
            END
          </p>
          <p className="normal-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            expedita incidunt illo non voluptatum mollitia tenetur pariatur iure
            voluptatibus. Error numquam quisquam vitae dignissimos, doloribus
            reiciendis facilis dolores soluta perspiciatis corrupti magni
            laudantium consequuntur sint, maxime voluptatum ab deleniti itaque
            expedita amet! Ipsum quia ea velit reprehenderit a quod consectetur,
            veniam iure veritatis, officia quo dolores obcaecati nobis incidunt
            suscipit ad unde. Ipsum, placeat quia iure corporis obcaecati,
            dolore omnis maiores aliquid culpa hic totam officiis rerum libero
            possimus adipisci! Itaque odit temporibus nemo voluptatibus voluptas
            nihil doloremque! Laboriosam voluptas debitis possimus sequi
            accusantium doloribus saepe aliquid aut cumque temporibus.
          </p>
        </div>
        <div className="comment-section" id="comments">
          <p className="entry-title">Comments</p>
          <div className="comment-wrap">
            <p className="date">02.08.2017 12:07</p>
            <div className="comment">
              <p className="comment-author">
                <span>E</span>
              </p>

              <p className="comment-message">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                dolor ipsum nesciunt sed velit qui, fugiat dignissimos.
                Praesentium dolore quisquam facere labore laborum, maxime nobis
                non culpa, corrupti vero, eum rerum magnam fuga laudantium
                dignissimos.
              </p>
            </div>
          </div>
          <div className="comment-wrap">
            <p className="date">02.08.2017 16:08</p>
            <div className="comment">
              <p className="comment-author">
                <span>S</span>
              </p>

              <p className="comment-message">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, perspiciatis? Commodi, nisi? Velit, quae quos est
                soluta facere quaerat quas.
              </p>
            </div>
          </div>
          <div className="comment-wrap">
            <p className="date">03.08.2017 17:01</p>
            <div className="comment">
              <p className="comment-author">
                <span>M</span>
              </p>

              <p className="comment-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti repudiandae reiciendis voluptatibus, delectus iste quam
                velit eum laborum dicta fuga hic tenetur, id nihil! Est
                consequuntur mollitia sequi officiis quod.
              </p>
            </div>
          </div>
          <div className="new-comment">
            <form
              id="comment-form"
              className="sample-form"
              method="post"
              action-xhr="#comment-form"
              onSubmit={submitForm}
            >
              <input type="text" name="name" placeholder="Name..." required />

              <textarea
                type="text"
                placeholder="Comment..."
                rows="4"
                autoexpand="true"
                required
              ></textarea>
              <input
                className="input-submit"
                type="submit"
                value="Post comment"
              />
            </form>
            <p hidden={commentSuccess} className="posted">
              Your comment has been posted!
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button
          id="scrollToTopButton"
          className="scrollToTop"
          onClick={scrollToTop}
        >
          Go to top
        </button>
      </div>
    </div>
  );
}

export default App;

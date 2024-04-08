import "./Blogs.css"
 
function Blogs() {
    return  (
     <div className="blogs-container">
        <div className="blogs-heading">You can write blogs here!</div>
        <div className="site__wrapper">
         <div className="grid">
          <div class="card">
            <div class="card__image">
              <img src="https://unsplash.it/400/608?image=123" alt=""/>

              <div class="card__overlay card__overlay--indigo">
                <div class="card__overlay-content">
                  <ul class="card__meta">
                    <li><a href="#0"><i class="fa fa-tag"></i> Html5/Css3</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> 2 min ago</a></li>
                  </ul>
                  <a href="#0" class="card__title">How to create a card based article with HTML5 &amp; CSS3</a>

                  <ul class="card__meta card__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> Mithicher</a></li>
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> Share</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="grid">
          <div class="card">
            <div class="card__image">
              <img src="https://unsplash.it/400/300?image=100" alt=""/>

              <div class="card__overlay card__overlay--blue">
                <div class="card__overlay-content">
                  <ul class="card__meta">
                    <li><a href="#0"><i class="fa fa-tag"></i> UI/UX</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> 2 days ago</a></li>
                  </ul>

                  <a href="#0" class="card__title">How to create a card based article with HTML5 &amp; CSS3</a>

                  <ul class="card__meta card__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> Mithicher</a></li>
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> Share</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="grid">
          <div class="card">
            <div class="card__image">
              <img src="https://unsplash.it/400/300?image=200" alt=""/>

              <div class="card__overlay card__overlay--indigo">
                <div class="card__overlay-content">
                <ul class="card__meta">
                    <li><a href="#0"><i class="fa fa-tag"></i> UI/UX</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> 2 days ago</a></li>
                  </ul>

                  <a href="#0" class="card__title">How to create a card based article with HTML5 &amp; CSS3</a>

                  <ul class="card__meta card__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> Mithicher</a></li>
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> Share</a></li>
                  </ul>    
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="grid">
          <div class="card">
            <div class="card__image">
              <img src="https://unsplash.it/400/300?image=300" alt=""/>

              <div class="card__overlay card__overlay--indigo">
                <div class="card__overlay-content">
                  <ul class="card__meta">
                    <li><a href="#0"><i class="fa fa-tag"></i> Tutorials</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> 2 days ago</a></li>
                  </ul>

                  <a href="#0" class="card__title">How to create a card based article with HTML5 &amp; CSS3</a>

                  <ul class="card__meta card__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> Mithicher</a></li>
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> Share</a></li>
                  </ul>   
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="grid">
          <div class="card">
            <div class="card__image">
              <img src="https://unsplash.it/400/300?image=400" alt=""/>

              <div class="card__overlay card__overlay--blue">
                <div class="card__overlay-content">
                  <ul class="card__meta">
                    <li><a href="#0"><i class="fa fa-tag"></i> Tutorials</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> 2 days ago</a></li>
                  </ul>

                  <a href="#0" class="card__title">How to create a card based article with HTML5 &amp; CSS3</a>

                  <ul class="card__meta card__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> Mithicher</a></li>
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> Share</a></li>
                  </ul>   
                </div>
              </div>
            </div>
          </div>
      </div>		

      <div class="site__info">
        <p>Placeholder images are served from <a target="_blank" href="https://unsplash.it">www.unsplash.it</a></p>
        <p>Handcrafted by <a target="_blank" href="https://mithicher.github.io">Mithicher</a>. Tweet me on <a target="_blank" href="https://twitter.com/mithicher">Twitter</a></p>
      </div>
</div>
     </div>
    );
}
 
export default Blogs;
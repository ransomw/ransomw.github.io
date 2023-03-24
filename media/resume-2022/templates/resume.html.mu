<html>

  <head>
    <link rel="stylesheet" href="../../../css/normalize.css">
    <link rel="stylesheet" href="../../../css/skeleton.css">
		<link rel="stylesheet" href="resume.css">
    <title>Resume</title>
  </head>

  <body>
    <div class="container">

      <section class="contact">
        {{#contact}}
        <h2>{{name}}</h2>
        <div>
          <a href="tel:{{phone}}">{{phone}}</a>
          <br/>
          <a href="mailto:{{email}}">{{email}}</a>
          <br/>
          <a href="{{website}}">{{website}}</a>
        </div>
        {{/contact}}
      </section>

      <section class="schools">
        {{#schools}}
        <div id="schools">
          <h4>{{heading}}</h4>
          {{#list}}
          <div class="list-item">
            <div class="subheader">
              <span class="name">{{name}}</span>
              <span class="date">{{date}}</span>
            </div>
            <div class="subheader">
              <span>{{major}}</span>
              <span>&nbsp</span>
            </div>
            {{#courses}}
            <div>
              {{#list}}
              <span>{{name}}</span>
              <br/>
              {{/list}}
            </div>
            {{/courses}}
          </div>
          {{/list}}
        </div>
        {{/schools}}
      </section>

      <section class="experience">
        {{#experience}}
        <div>
          <h4>{{heading}}</h4>
          {{#list}}
          <div class="list-item">
            <div class="subheader">
              <span class="name">{{company}}</span>
              <span class="date">{{start-date}} &ndash; {{end-date}}</span>
            </div>
            <div class="subheader">
              <span>{{title}}</span>
              <span class="location">{{location}}</span>
            </div>
            <div class="row">
              <div class="one column">
                &nbsp
              </div>
              <div class="eleven columns">
                <ul>
                  {{#items}}
                  <li>{{name}}</li>
                  {{/items}}
                </ul>
              </div>
            </div>
          </div>
          {{/list}}
        </div>
        {{/experience}}
      </section>

      <section class="skills">
        {{#skills}}
        <div>
          <h4>{{heading}}</h4>
          <div class="row">
            <div class="twelve columns">
              <ul>
                {{#list}}
                <li>
                  <span>{{type}}</span>:
                  <span>{{items}}</span>
                </li>
                {{/list}}
              </ul>
            </div>
          </div>
        </div>
        {{/skills}}
      </section>

      <section class="activities">
        {{#activities}}
        <div id="activities">
          <h4>{{heading}}</h4>
          {{#list}}
          <div class="list-item">
            <div class="subheader">
              <span class="name">{{name}}</span>
              <span class="date">
                {{start-date}} &ndash; {{end-date}}
              </span>
            </div>
            <div class="subheader">
              <span>&nbsp</span>
              <span class="location">{{location}}</span>
            </div>
            <div class="row">
              <div class="two columns">&nbsp</div>
              <div class="nine columns">
                <p>{{description}}</p>
              </div>
              <div class="one column">&nbsp</div>
            </div>
          </div>
          {{/list}}
        </div>
        {{/activities}}
      </section>

      <!-- <section class="research"> -->
      <!--   {{#research}} -->
      <!--   <div> -->
      <!--     <h4>{{heading}}</h4> -->
      <!--     {{#list}} -->
      <!--     <div class="list-item"> -->
      <!--       <div class="row"> -->
      <!--         <div class="nine columns"> -->
      <!--           <span class="name">{{name}}, {{location}}</span> -->
      <!--         </div> -->
      <!--         <div class="three columns"> -->
      <!--           <span class="date">{{date}}</span> -->
      <!--         </div> -->
      <!--       </div> -->
      <!--       <div class="row"> -->
      <!--         <div class="nine columns"> -->
      <!--       <span>{{major}}</span>, <span>{{advisor}}</span> -->
      <!--         </div> -->
      <!--         <div class="three columns"> -->
      <!--           &nbsp -->
      <!--         </div> -->
      <!--       </div> -->
      <!--       <div class="row"> -->
      <!--         <div class="one column"> -->
      <!--           &nbsp -->
      <!--         </div> -->
      <!--         <div class="eleven columns"> -->
      <!--           <ul> -->
      <!--             {{#items}} -->
      <!--             <li>{{name}}</li> -->
      <!--             {{/items}} -->
      <!--           </ul> -->
      <!--         </div> -->
      <!--       </div> -->
      <!--     </div> -->
      <!--     {{/list}} -->
      <!--   </div> -->
      <!--   {{/research}} -->
      <!-- </section> -->

    </div>
  </body>

</html>

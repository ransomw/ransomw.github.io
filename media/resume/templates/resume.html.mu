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
        </div>
        {{/contact}}
      </section>

      <section class="schools">
        {{#schools}}
        <div id="schools">
          <h4>{{heading}}</h4>
          {{#list}}
          <div class="list-item">
            <span class="name">{{name}}</span>
            <span class="date">{{date}}</span>
            <br/>
            {{major}}
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

      <section class="research">
        {{#research}}
        <div>
          <h4>{{heading}}</h4>
          {{#list}}
          <div class="list-item">
            <span class="name">{{name}}, {{location}}</span>
            <span class="date">{{date}}</span>
            <br/>
            <span>{{major}}</span>, <span>{{advisor}}</span>
            <ul>
              {{#items}}
              <li>{{name}}</li>
              {{/items}}
            </ul>
          </div>
          {{/list}}
        </div>
        {{/research}}
      </section>

      <section class="experience">
        {{#experience}}
        <div>
          <h4>{{heading}}</h4>
          {{#list}}
          <div class="list-item">
            <span class="name">{{company}}</span>
            <span class="date">{{start-date}} -- {{end-date}}</span>
            <br/>
            <span>{{title}}</span>
            <span class="location">{{location}}</span>
            <ul>
              {{#items}}
              <li>{{name}}</li>
              {{/items}}
            </ul>
          </div>
          {{/list}}
        </div>
        {{/experience}}
      </section>

      <section class="skills">
        {{#skills}}
        <div>
          <h4>{{heading}}</h4>
          <ul>
            {{#list}}
            <li>
              <span>{{type}}</span>:
              <span>{{items}}</span>
            </li>
            {{/list}}
          </ul>
        </div>
        {{/skills}}
      </section>

    </div>
  </body>

</html>

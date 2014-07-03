<html>

  <head>
		<link rel="stylesheet" href="resume.css">
    <title>Resume</title>
  </head>

  <body>
    {{#contact}}
    <h1>{{name}}</h1>
    <div>
      <span>{{phone}}</span>
      <br/>
      <span>{{email}}</span>
    </div>
    {{/contact}}

    {{#schools}}
    <div id="schools">
      <h2>{{heading}}</h2>
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

    {{#research}}
    <div>
      <h2>{{heading}}</h2>
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


    {{#experience}}
    <div>
      <h2>{{heading}}</h2>
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

    {{#skills}}
    <div>
      <h2>{{heading}}</h2>
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

  </body>

</html>

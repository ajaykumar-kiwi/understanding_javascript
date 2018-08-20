var host = document.querySelector('#shadowHost');

var shadowRoot = host.createShadowRoot();

var div = document.createElement('div');
div.textContent = "Here we go..!!!";
div.className = "x";

shadowRoot.appendChild(div)

// or

var host2 = document.querySelector('#shadowHost2');

var shadowRoot2 = host2.createShadowRoot();

var tmpl = document.querySelector('#tmpl');
shadowRoot2.appendChild(tmpl.content);


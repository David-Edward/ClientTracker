require('handlebars');

const clientSection = document.getElementById('client-list').innerHTML;

const template = Handlebars.compile(clientSection);

const compiledHtml = template(for (let i = 0; i < clientList.length; i++) {return clientList[i]});
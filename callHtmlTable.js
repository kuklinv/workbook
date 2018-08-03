// вызов таблицы. преобразование в html
const table = (...children) => `<table>${children.join('')}</table>`;
const tr = (...children) => `<tr>${children.join('')}</tr>`;
const td = (...children) => `<td>${children.join('')}</td>`;
const p = (...children) => `<p>${children.join('')}</p>`;

const vivod = table(
	tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions')));

export default () => vivod;
/*
table(
  tr(td('one'), td('two')),
  tr(td('three'), td('four'))
);
*/
/*
<table>
  <tr>
    <td>one</td>
    <td>two</td>
  </tr>
  <tr>
    <td>three</td>
    <td>four</td>
  </tr>
</table>

<table>
  <tr>
    <td>lang</td>
    <td>comment</td>
  </tr>
  <tr>
    <td>php</td>
    <td>statements</td>
  </tr>
  <tr>
    <td>clojure</td>
    <td>expressions</td>
  </tr>
</table>
*/


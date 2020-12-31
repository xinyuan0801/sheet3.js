# js-library-wangx678

## link to landing page
https://cryptic-fortress-93256.herokuapp.com/ 

## getting started
you should included
```javascript
<script defer src="sheet3.js" type="text/javascript"></script>
<link rel="stylesheet" href="sheet3.css" />
```
you should also include jquery, the version used is 3.5.1 <br>
to start using sheet3.js, first initialize a sheet3 object

```javascript
const NumberTest = [
{ first_name: "Leonard", last_name: "Faulconer", age: 45 },
{ first_name: "Editha", last_name: "Keogh", age: 49 },
{ first_name: "Jeth", last_name: "Hasson", age: 83 },
{ first_name: "Liz", last_name: "De Bruyn", age: 46 },
{ first_name: "Valentia", last_name: "Lasslett", age: 40 },
];
var t1 = new sheet3({
id: "t1",
row: 3,
col: 5,
type: "readonly",
location: "T1",
style: "DM",
mode: "vertical",
data: NumberTest
});
```
## link to documentation
https://cryptic-fortress-93256.herokuapp.com/documentation.html

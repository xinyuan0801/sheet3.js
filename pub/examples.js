// data to read
const JsontoRead = [
  {
    first_name: "Marijo",
    last_name: "Durning",
    email: "mdurning0@loc.gov",
  },
  {
    first_name: "Erwin",
    last_name: "Gorling",
    email: "egorling1@va.gov",
  },
  {
    first_name: "Erik",
    last_name: "Hargrove",
    email: "ehargrove2@dion.ne.jp",
  },
  {
    first_name: "Freedman",
    last_name: "Skeeles",
    email: "fskeeles3@ovh.net",
  },
  {
    first_name: "Rubi",
    last_name: "Collis",
    email: "rcollis4@com.com",
  },
];

const NumberTest = [
  { first_name: "Leonard", last_name: "Faulconer", age: 45 },
  { first_name: "Editha", last_name: "Keogh", age: 49 },
  { first_name: "Jeth", last_name: "Hasson", age: 83 },
  { first_name: "Liz", last_name: "De Bruyn", age: 46 },
  { first_name: "Valentia", last_name: "Lasslett", age: 40 },
];

let addData = {
  first_name: "Marijo",
  last_name: "Durning",
  email: "mdurning0@loc.gov",
};

vh = ["1", "2", "3"];
hh = ["a", "b", "c"];
id = {
  "1+a": "1+a",
  "1+b": "1+b",
  "1+c": "1+c",
  "2+a": "2+a",
  "2+b": "2+b",
  "2+c": 3,
  "3+a": 1,
  "3+b": 2,
  "3+c": 3,
};

// third sheet
var t1 = new sheet3({
  id: "t1",
  row: 3,
  col: 5,
  type: "edit",
  location: "T1",
  style: "DM",
  mode: "vertical",
  data: NumberTest
});
t1.createTable();



var a = sheet3({
  id: "myT1",
  row: 5,
  col: 3,
  type: "readonly",
  location: "sd1",
  style: "basic",
  mode: "horzontial",
});
a.createTable();
a.fillTable(JsontoRead);
var b = sheet3({
  id: "myT2",
  row: 3,
  col: 5,
  type: "readonly",
  location: "sd1",
  style: "basic",
  mode: "vertical",
});
b.createTable();
b.fillTable(JsontoRead);
vh = ["1", "2", "3"];
hh = ["a", "b", "c"];
testData = {
  "1+a": "1+a",
  "1+b": "1+b",
  "1+c": "1+c",
  "2+a": "2+a",
  "2+b": "2+b",
  "2+c": 3,
  "3+a": 1,
  "3+b": 2,
  "3+c": 3,
};
var c = sheet3({
    id: "myT3",
    row: 3,
    col: 3,
    type: "readonly",
    location: "sd1",
    style: "OE",
    mode: "HorAndVer",
  });
  c.createTable();
  c.fillHorAndVer(vh, hh, testData);
var t1 = document.getElementById("myT1");
var t2 = document.getElementById("myT2");
var t3 = document.getElementById("myT3");
$(t2).css("display", "none");
$(t3).css("display", "none");
function changeStyle(style) {
  t1.className = style;
  t2.className = style;
  t3.className = style;
}
function showTable(table) {
    if (table == 'vertical') {
        $(t1).css("display", "none");
        $(t2).css("display", "");
        $(t3).css("display", "none");
    }
    else if (table == 'horzontial') {
        $(t1).css("display", "");
        $(t2).css("display", "none");
        $(t3).css("display", "none");
    }
    else {
        $(t1).css("display", "none");
        $(t2).css("display", "none");
        $(t3).css("display", "");
    }
}

var t4 = new sheet3({
  id: "t4",
  row: 3,
  col: 5,
  type: "readonly",
  location: "fillDemo",
  style: "MD",
  mode: "vertical",
});
t4.createTable();

var t5 = new sheet3({
  id: "t5",
  row: 5,
  col: 3,
  type: "edit",
  location: "fillDemo2",
  style: "MD",
  mode: "horzontial",
});
t5.createTable();

var t6 = new sheet3({
  id: "t6",
  row: 3,
  col: 3,
  type: "readonly",
  location: "fillDemo3",
  style: "MD",
  mode: "HorAndVer",
});
t6.createTable();

var t7 = new sheet3({
  id: "t7",
  row: 5,
  col: 3,
  type: "edit",
  location: "indexDemo",
  style: "MD",
  mode: "horzontial",
  data: JsontoRead
});
t7.createTable();

function doindex() {
  let row = $("#row").val()
  let col = $("#col").val()
  alert(t7.index(parseInt(row), parseInt(col)))
}

var t8 = new sheet3({
  id: "t8",
  row: 5,
  col: 3,
  type: "edit",
  location: "rowOpDemo",
  style: "MD",
  mode: "horzontial",
  data: JsontoRead
});
t8.createTable();

function doDelete() {
  let row = $("#drow").val()

  t8.removeRow(parseInt(row))
}

function doAdd() {
  let row = $("#arow").val()
  t8.addRow(addData, row)
}

var t9 = new sheet3({
  id: "t9",
  row: 5,
  col: 3,
  type: "edit",
  location: "sortDemo",
  style: "MD",
  mode: "horzontial",
  data: NumberTest
});
t9.createTable();

function doSort() {
  let col = $('#sortRow').val();
  t9.sortByCol(parseInt(col), 'startHigh');
}

var t10 = new sheet3({
  id: "t10",
  row: 5,
  col: 3,
  type: "edit",
  location: "searchDemo",
  style: "MD",
  mode: "horzontial",
  data: NumberTest
});
t10.createTable();

function doFind() {
  let selectedCol = $('#searchCol').val();
  let searchContent = $('#searchContent').val();
  $(t10.search(selectedCol, searchContent)).css('background-color', '#ddd')
}

function doReset() {
  let table = document.getElementById('t10')
  $(table).remove();
  t10.createTable();
}

var t11 = new sheet3({
  id: "t11",
  row: 5,
  col: 3,
  type: "edit",
  location: "exportDataDemo",
  style: "MD",
  mode: "horzontial",
  data: NumberTest
});
t11.createTable();

function doExport() {
  let arrayObject = t11.exportToJSON();
  let result = arrayObject.map(function(json) {
    return JSON.stringify(json);
  })
  alert(result)
}

var t12 = new sheet3({
  id: "t12",
  row: 5,
  col: 3,
  type: "edit",
  location: "showRowDemo",
  style: "MD",
  mode: "horzontial",
  data: NumberTest
});
t12.createTable();

function doShow() {
  t12.resetShow();
  let top = $('#toprow').val();
  let bottom = $('#botrow').val();
  t12.showRow(parseInt(top), parseInt(bottom))
}

function doShowReset() {
  t12.resetShow();
}

var t13 = new sheet3({
  id: "t13",
  row: 5,
  col: 3,
  type: "edit",
  location: "calDemo",
  style: "MD",
  mode: "horzontial",
  data: NumberTest
});
t13.createTable();

function doSum() {
  let sumCol = $('#calCol').val()
  alert(t13.sum(sumCol))
}

function doAvg() {
  let avgCol = $('#calCol').val()
  alert(t13.avg(avgCol))
}

var t14 = new sheet3({
  id: "t14",
  row: 5,
  col: 3,
  type: "edit",
  location: "setCellDemo",
  style: "MD",
  mode: "horzontial",
  data: NumberTest
});
t14.createTable();

function doSet() {
  let row = $('#setRow').val();
  let col = $('#setCol').val();
  let content = $('#setContent').val();
  t14.setCell(parseInt(row), parseInt(col), content);
}

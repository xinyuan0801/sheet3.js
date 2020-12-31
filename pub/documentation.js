const initJson = [
  {
    Property: "id",
    Default: "this property is required",
    Type: "String",
    Description:
      "this is the id of the table element created by sheet3 when call createTable() method",
    Available_options: "/",
  },
  {
    Property: "row",
    Default: "this property is required",
    Type: "Integer",
    Description: "this is the number of rows of the table created",
    Available_options: "/",
  },
  {
    Property: "col",
    Default: "this property is required",
    Type: "Integer",
    Description: "this is the number of columns of the table created",
    Available_options: "/",
  },
  {
    Property: "type",
    Default: "this property is required",
    Type: "String",
    Description: "this is the type of table created",
    Available_options: "readonly' and 'edit'",
  },
  {
    Property: "location",
    Default: "this property is required",
    Type: "String",
    Description:
      "the id of the element that the table created will be append into",
      Available_options: "/",
    
  },
  {
    Property: "style",
    Default: "this property is required",
    Type: "String",
    Description:
      "this is the style of the table created",
      Available_options: "'OE', 'basic', 'MD', 'gran' and 'DM'",
  },
  {
    Property: "mode",
    Default: "this property is required",
    Type: "String",
    Description:
      "this is the mode of the table created",
      Available_options: "'horzontial', 'vertical', 'horAndver', which means table with horzontial headers, vertical headers or both horzontial and vertical headers",
  },
  {
    Property: "location",
    Default: "this property is required",
    Type: "String",
    Description:
      "this is the id of the element that the table will be append into",
      Available_options: "/",
  },
  {
    Property: "data",
    Default: "/",
    Type: "Array of Json Object",
    Description: `this is the option to build a table with the data given, the format for data will be for example, [
        {
          first_name: "Marijo",
          last_name: "Durning",
          email: "mdurning0@loc.gov",
        }
      ] where each value is under its corresponding header`,
      Available_options: "/",
  },
];

const ftJson = [
  {
    Parameter: "inputData",
    Default: "this parameter is required",
    Type: "Array of JSON object",
    Description: "see description for data in Options part",
    Available_options: "/"
  },
];

const indexJson = [
  {
    Parameter: "row",
    Default: "this parameter is required",
    Type: "Integer",
    Description: "this is the row number of the cell to find",
    Available_options: "/"
  },
  {
    Parameter: "col",
    Default: "this parameter is required",
    Type: "Integer",
    Description: "this is the col number of the cell to find",
    Available_options: "/"
  },
];

const rrJson = [
  {
    Parameter: "row",
    Default: "this parameter is required",
    Type: "Integer",
    Description: "this is the row number of the row to remove",
    Available_options: "/"
  },
];

const sortJson = [
  {
    Parameter: "col",
    Default: "this parameter is required",
    Type: "Integer",
    Description: "this is the column number of the sort base on",
    Available_options: "/"
  },
  {
    Parameter: "mode",
    Default: "startLow",
    Type: "String",
    Description:
      "this is the logic of how sort will go.",
      Available_options: "'startLow' and 'startHigh', which means sort from low to high and high to low"
  },
];

const arJson = [
  {
    Parameter: "JSONtoAdd",
    Default: "this parameter is required",
    Type: "JSON object",
    Description: `this is the JSON object of the row added, 
    {
      first_name: "Erik",
      last_name: "Hargrove",
      email: "ehargrove2@dion.ne.jp",
    }
    where keys are the header name and value are the content under the header`,
    Available_options: "/"
    
  },
  {
    Parameter: "row",
    Default: "this parameter is required",
    Type: "Integer",
    Description: "this is the row index that the new row will be inserted into",
    Available_options: "/"
  },
];

const searchJson = [
  {
    Parameter: "headername",
    Default: "this parameter is required",
    Type: "String",
    Description: "this is the header's name of the column to search for",
    Available_options: "/"
  },
  {
    Parameter: "searchContent",
    Default: "this parameter is required",
    Type: "String",
    Description: "this is the value to search for",
    Available_options: "/"
  },
];

const FHAVJson = [
  {
    Parameter: "Vh",
    Default: "this parameter is required",
    Type: "Array of String",
    Description: "this is the vertical header of this table, which is going to be an array containing all horzontial header name",
    Available_options: "/"
  },
  {
    Parameter: "Hh",
    Default: "this parameter is required",
    Type: "Array of String",
    Description: "this is the horzontial header of this table, which is going to be an array containing all horzontial header name",
    Available_options: "/"
  },
  {
    Parameter: "inputData",
    Default: "this parameter is required",
    Type: "Array of JSON Object",
    Description: `this is the JSON representation of the data input, the format is 
    key: (vertical headername)+(horzontial headername)
    value: the value contain in that cell
    `,
    Available_options: "/"
  },
];

const showJson = [
  {
    Parameter: "start",
    Default: "this parameter is required",
    Type: "Integer",
    Description: "this is the start row index of the rows that will be show",
    Available_options: "/"
  },
  {
    Parameter: "end",
    Default: "this parameter is required",
    Type: "Integer",
    Description: "this is the end row index of the rows that will be show",
    Available_options: "/"
  },
];

const sumJson = [
  {
    Parameter: "col",
    Default: "this parameter is required",
    Type: "Integer",
    Description:
      "this is the column index of the column that will calculate the sum",
      Available_options: "/"
  },
];

const avgJson = [
  {
    Parameter: "col",
    Default: "this parameter is required",
    Type: "Integer",
    Description:
      "this is the column index of the column that will calculate the average",
      Available_options: "/"
  },
];

const setcellJson = [
  {
    Parameter: "row",
    Default: "this parameter is required",
    Type: "Integer",
    Description: "this is the row index of the cell to set value",
    Available_options: "/"
  },
  {
    Parameter: "col",
    Default: "this parameter is required",
    Type: "Integer",
    Description: "this is the column index of the cell to set value",
    Available_options: "/"
  },
  {
    Parameter: "val",
    Default: "this parameter is required",
    Type: "String/HTML element",
    Description: "this is the content to set in the cell",
    Available_options: "/"
  },
  {
    Parameter: "isElement",
    Default: "this parameter is required",
    Type: "boolean",
    Description:
      "this is boolean showing weather the content to set is a html element",
      Available_options: "/"
  },
];

var t1 = new sheet3({
  id: "t1",
  row: 9,
  col: 5,
  type: "readonly",
  location: "initOptions",
  style: "gran",
  mode: "horzontial",
  data: initJson,
});
t1.createTable();

var t2 = new sheet3({
  id: "t2",
  row: 1,
  col: 5,
  type: "readonly",
  location: "FTmethod",
  style: "gran",
  mode: "horzontial",
  data: ftJson,
});
t2.createTable();

var t3 = new sheet3({
  id: "t3",
  row: 2,
  col: 5,
  type: "readonly",
  location: "indexmethod",
  style: "gran",
  mode: "horzontial",
  data: indexJson,
});
t3.createTable();

var t4 = new sheet3({
  id: "t4",
  row: 1,
  col: 5,
  type: "readonly",
  location: "rrmethod",
  style: "gran",
  mode: "horzontial",
  data: rrJson,
});
t4.createTable();

var t5 = new sheet3({
  id: "t5",
  row: 2,
  col: 5,
  type: "readonly",
  location: "sortmethod",
  style: "gran",
  mode: "horzontial",
  data: sortJson,
});
t5.createTable();

var t6 = new sheet3({
  id: "t6",
  row: 2,
  col: 5,
  type: "readonly",
  location: "armethod",
  style: "gran",
  mode: "horzontial",
  data: arJson,
});
t6.createTable();

var t7 = new sheet3({
  id: "t7",
  row: 2,
  col: 5,
  type: "readonly",
  location: "searchmethod",
  style: "gran",
  mode: "horzontial",
  data: searchJson,
});
t7.createTable();

var t8 = new sheet3({
  id: "t8",
  row: 3,
  col: 5,
  type: "readonly",
  location: "FHAVmethod",
  style: "gran",
  mode: "horzontial",
  data: FHAVJson,
});
t8.createTable();

var t9 = new sheet3({
  id: "t9",
  row: 2,
  col: 5,
  type: "readonly",
  location: "srmethod",
  style: "gran",
  mode: "horzontial",
  data: showJson,
});
t9.createTable();

var t10 = new sheet3({
  id: "t10",
  row: 1,
  col: 5,
  type: "readonly",
  location: "summethod",
  style: "gran",
  mode: "horzontial",
  data: sumJson,
});
t10.createTable();

var t11 = new sheet3({
  id: "t11",
  row: 1,
  col: 5,
  type: "readonly",
  location: "avgmethod",
  style: "gran",
  mode: "horzontial",
  data: sumJson,
});
t11.createTable();

var t12 = new sheet3({
  id: "t12",
  row: 4,
  col: 5,
  type: "readonly",
  location: "setcellmethod",
  style: "gran",
  mode: "horzontial",
  data: setcellJson,
});
t12.createTable();

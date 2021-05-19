// idea of how to drag the side of cell to control width is from: https://www.brainbell.com/javascript/making-resizable-table-js.html
// uses the idea that create a div so can drag
(function (global, document, $) {
  function sheet3(options) {
    const self = {};
    self.options = options;
    self.createTable = function () {
      _createTable(self.options);
      if (self.options["data"] !== undefined) {
        _fillTab(self.options.data);
      }
    };
    self.fillTable = function (inputData) {
      _fillTab(inputData);
    };
    self.index = function (row, col) {
      const table = document.getElementById(self.options.id);
      if (self.options.type == "readonly") {
        if (self.options.mode == "horzontial") {
          return $(table.rows[row + 1].cells[col]).text();
        } else if (self.options.mode == "vertical") {
          return $(table.rows[row].cells[col + 1]).text();
        }
      } else if (self.options.type == "edit") {
        if (self.options.mode == "horzontial") {
          return $(table.rows[row + 1].cells[col])
            .find("input")
            .val();
        } else if (self.options.mode == "vertical") {
          return $(table.rows[row].cells[col + 1])
            .find("input")
            .val();
        }
      }
    };
    self.removeRow = function (rowNum) {
      const table = document.getElementById(self.options.id);
      let rows = $(table).find("tr");
      $(rows[rowNum]).remove();
    };
    //idea of how to sort https://www.w3schools.com/howto/howto_js_sort_table.asp
    //add some more features from that
    self.sortByCol = function (colNum, mode = "startLow") {
      let a;
      const table = document.getElementById(self.options.id);
      let sorting = true;
      while (sorting) {
        sorting = false;
        rows = $(table).find("tr");
        for (a = 1; a < rows.length - 1; a++) {
          sw = false;
          let first, second;
          if (self.options.type == "readonly") {
            first = $(rows[a].cells[colNum]).text();
            second = $(rows[a + 1].cells[colNum]).text();
          } else if (self.options.type == "edit") {
            first = $(rows[a].cells[colNum]).find("input").val();
            second = $(rows[a + 1].cells[colNum])
              .find("input")
              .val();
          }
          if (mode == "startLow") {
            if (isNaN(parseFloat(first))) {
              if (first.toLowerCase() > second.toLowerCase()) {
                sw = true;
                break;
              }
            } else {
              if (parseFloat(first) > parseFloat(second)) {
                sw = true;
                break;
              }
            }
          } else if (mode == "startHigh") {
            if (isNaN(parseFloat(first))) {
              if (first.toLowerCase() < second.toLowerCase()) {
                sw = true;
                break;
              }
            } else {
              if (parseFloat(first) < parseFloat(second)) {
                sw = true;
                break;
              }
            }
          }
        }
        if (sw) {
          rows[a].parentNode.insertBefore(rows[a + 1], rows[a]);
          sorting = true;
        }
      }
    };
    self.addRow = function (JSONtoAdd, row) {
      const table = document.getElementById(self.options.id);
      const height = table.rows[1].cells[0].offsetHeight;

      let rowToAdd = document.createElement("tr");
      let keys = Object.keys(JSONtoAdd);
      for (let a = 0; a < keys.length; a++) {
        let td = document.createElement("td");
        let cell;
        if (self.options.type == "readonly") {
          cell = document.createTextNode(JSONtoAdd[keys[a]]);
        } else if (self.options.type == "edit") {
          cell = document.createElement("INPUT");
          cell.setAttribute("type", "text");
          cell.setAttribute("size", "auto");
          cell.value = JSONtoAdd[keys[a]];
        }

        let controlArea = _addControlArea(td, table);
        controlArea.style.height = height + "px";
        $(td).css("position", "relative");
        $(td).append(cell);
        $(td).append(controlArea);
        rowToAdd.appendChild(td);
      }
      let pn = table.rows[row].parentNode;
      pn.insertBefore(rowToAdd, table.rows[row]);
    };
    self.search = function (headername, searchContent) {
      const table = document.getElementById(self.options.id);
      let result;
      let colToSearch;
      $(table.rows[0])
        .find("th")
        .each(function (index) {
          if (this.innerText == headername) {
            colToSearch = index;
          }
        });
      $(table)
        .find("tr")
        .each(function () {
          if (self.options.type == "readonly") {
            if (this.cells[colToSearch].innerText == searchContent) {
              result = this;
            }
          } else if (self.options.type == "edit") {
            if (
              $(this.cells[colToSearch]).find("input").val() == searchContent
            ) {
              result = this;
            }
          }
        });
      return result;
    };
    self.fillHorAndVer = function (Vh, Hh, inputData) {
      const table = document.getElementById(self.options.id);
      let tbody = $(table).find("tbody");
      header = $("<tr/>");
      thempty = $("<th/>");
      // thempty.attr('id', "emptyHeader")
      header.append(thempty);
      // header.setAttribute("class", "header")
      let columlength = table.rows[1].cells.length;

      for (let a = 0; a < Hh.length; a++) {
        let th = $("<th/>").html(Hh[a]);
        th.css("position", "relative");
        th.css("text-align", "center");
        th.css("font-weight", "bold");
        let controlArea = _addControlArea(th, table);
        controlArea.style.height = table.rows[0].offsetHeight;
        th.append(controlArea);
        header.append(th);
      }

      let trs = $(table).find("tbody").find("tr");

      for (let a = 0; a < Vh.length; a++) {
        let th = $("<th/>").html(Vh[a]);
        th.css("position", "relative");
        th.css("text-align", "center");
        th.css("font-weight", "bold");
        let controlArea = _addControlArea(th, table);
        controlArea.style.height = table.rows[0].offsetHeight;
        th.append(controlArea);
        $(trs[a]).prepend(th);
      }
      $(tbody).prepend(header);
      for (let a = 1; a < Vh.length + 1; a++) {
        let row = table.rows[a];
        for (let b = 1; b < Hh.length + 1; b++) {
          let key = Vh[a - 1] + "+" + Hh[b - 1];
          if (self.options.type == "readonly") {
            let text = document.createTextNode(inputData[key]);
            row.cells[b].appendChild(text);
          } else if (self.options.type == "edit") {
            $(row.cells[b]).find("input").val(inputData[key]);
          }
        }
      }
    };
    self.exportToJSON = function () {
      let table = document.getElementById(self.options.id);
      let JSONresult = [];
      let headerKey = [];
      if (self.options.mode == "horzontial") {
        $(table.rows[0])
          .find("th")
          .each(function () {
            headerKey.push(this.innerText);
          });
        $(table)
          .find("tr")
          .each(function (index) {
            if (index != 0) {
              let result = new Object();
              for (let a = 0; a < headerKey.length; a++) {
                let key = headerKey[a];
                let value;
                if (self.options.type == "readonly") {
                  value = this.cells[a].innerText;
                } else if (self.options.type == "edit") {
                  value = $(this.cells[a]).find("input").val();
                }
                result[key] = value;
              }
              JSONresult.push(result);
            }
          });
      } else if (self.options.mode == "vertical") {
        $(table)
          .find("tr")
          .each(function () {
            headerKey.push(this.cells[0].innerText);
          });
        let colLength = table.rows[0].cells.length - 1;
        $(table)
          .find("tr")
          .each(function (index) {
            if (index == 0) {
              for (let a = 1; a < colLength + 1; a++) {
                let result = new Object();
                let key = headerKey[index];
                let value;
                if (self.options.type == "readonly") {
                  value = this.cells[a].innerText;
                } else if (self.options.type == "edit") {
                  value = $(this.cells[a]).find("input").val();
                }

                result[key] = value;
                JSONresult.push(result);
              }
            } else {
              for (let a = 1; a < colLength + 1; a++) {
                let JSONobject = JSONresult[a - 1];
                let key = headerKey[index];
                let value;
                if (self.options.type == "readonly") {
                  value = this.cells[a].innerText;
                } else if (self.options.type == "edit") {
                  value = $(this.cells[a]).find("input").val();
                }
                JSONobject[key] = value;
              }
            }
          });
      }
      return JSONresult;
    };
    self.showRow = function (start, end) {
      let table = document.getElementById(self.options.id);
      $(table)
        .find("tr")
        .each(function (index) {
          if ((index < start || index > end) && index != 0) {
            $(this).css("display", "none");
          }
        });
    };
    self.resetShow = function () {
      let table = document.getElementById(self.options.id);
      $(table)
        .find("tr")
        .each(function () {
          $(this).css("display", "");
        });
    };
    self.sum = function (col) {
      let Sum = 0;
      let table = document.getElementById(self.options.id);
      if (self.options.mode == "horzontial") {
        $(table)
          .find("tr")
          .each(function (a) {
            if (a != 0) {
              if (self.options.type == "readonly") {
                Sum = Sum + parseFloat(this.cells[col].innerText);
              } else if (self.options.type == "edit") {
                Sum = Sum + parseFloat($(this.cells[col]).find("input").val());
              }
            }
          });
      } else if (self.options.mode == "vertical") {
        let row = $(table).find("tr")[col];
        $(row)
          .find("td")
          .each(function () {
            if (self.options.type == "readonly") {
              Sum = Sum + parseFloat(this.innerText);
            } else if (self.options.type == "edit") {
              Sum = Sum + parseFloat($(this).find("input").val());
            }
          });
      }
      return Sum;
    };

    self.avg = function (avgPlace) {
      let table = document.getElementById(self.options.id);
      let total = self.sum(avgPlace);
      let avgerage;
      if (self.options.mode == "horzontial") {
        avgerage = total / table.rows.length;
      } else if (self.options.mode == "vertical") {
        avgerage = total / (table.rows[0].cells.length - 1);
      }
      return avgerage;
    };

    self.setCell = function (row, col, val, isElement) {
      let table = document.getElementById(self.options.id);
      if (self.options.type == "readonly") {
        if (self.options.mode == "horzontial") {
          if (!isElement) {
            $(table.rows[row + 1].cells[col]).text(val);
          } else {
            $(table.rows[row + 1].cells[col])
              .contents()
              .filter(function () {
                return this.nodeType === 3;
              })
              .remove();
            $(table.rows[row + 1].cells[col]).append(val);
          }
        } else if (self.options.mode == "vertical") {
          if (!isElement) {
            $(table.rows[row].cells[col + 1]).text(val);
          } else {
            $(table.rows[row].cells[col + 1])
              .contents()
              .filter(function () {
                return this.nodeType === 3;
              })
              .remove();
            $(table.rows[row].cells[col + 1]).append(val);
          }
        } else if (self.options.mode == "HorAndVer") {
          if (!isElement) {
            $(table.rows[row + 1].cells[col + 1]).text(val);
          } else {
            $(table.rows[row + 1].cells[col + 1])
              .contents()
              .filter(function () {
                return this.nodeType === 3;
              })
              .remove();
            $(table.rows[row + 1].cells[col + 1]).append(val);
          }
        }
      } else if (self.options.type == "edit") {
        if (self.options.mode == "horzontial") {
          $(table.rows[row + 1].cells[col])
            .find("input")
            .val(val);
        } else if (self.options.mode == "vertical") {
          $(table.rows[row].cells[col + 1])
            .find("input")
            .val(val);
        } else if (self.options.mode == "HorAndVer") {
          $(table.rows[row + 1].cells[col + 1])
            .find("input")
            .val(val);
        }
      }
    };
    function _fillTab(inputData) {
      let id = self.options.id;
      let table = document.getElementById(id);
      // extracting all keys, which will be the header of table
      let keys = Object.keys(inputData[0]);
      _setupHeader(table, keys);
      // all the rows node in the new table in a list
      let rows = document
        .getElementById(id)
        .getElementsByTagName("tbody")[0]
        .getElementsByTagName("tr");
      // different ways to fill table depend on the types
      if (self.options.mode == "horzontial") {
        if (self.options.type == "readonly") {
          for (let a = 1; a < inputData.length + 1; a++) {
            // find all td elements in a row
            let input = $(rows[a]).find("td");
            for (let b = 0; b < keys.length; b++) {
              // fill the table with text by appending textNode
              let text = document.createTextNode(inputData[a - 1][keys[b]]);
              input[b].appendChild(text);
            }
          }
        } else {
          for (let a = 1; a < inputData.length + 1; a++) {
            // different from readonly table, for editable table we need to find input node and modify that
            let input = $(rows[a]).find("td").find("input");
            for (let b = 0; b < keys.length; b++) {
              input[b].value = inputData[a - 1][keys[b]];
            }
          }
        }
      } else if (self.options.mode == "vertical") {
        if (self.options.type == "readonly") {
          for (let a = 1; a < inputData.length + 1; a++) {
            for (let b = 0; b < keys.length; b++) {
              let input = $(rows[b].cells[a]);
              let text = document.createTextNode(inputData[a - 1][keys[b]]);
              $(input).append(text);
            }
          }
        } else {
          for (let a = 1; a < inputData.length + 1; a++) {
            for (let b = 0; b < keys.length; b++) {
              let input = $(rows[b].cells[a]).find("input");
              input[0].value = inputData[a - 1][keys[b]];
            }
          }
        }
      }
    }

    function _setupHeader(table, keys) {
      let keylength = keys.length;
      if (self.options.mode == "horzontial") {
        let tbody = $(table).find("tbody");
        header = $("<tr/>");
        // header.setAttribute("class", "header")
        let columlength = table.rows[0].cells.length;

        for (let a = 0; a < keylength; a++) {
          let th = $("<th/>").html(keys[a]);
          th.css("position", "relative");

          th.css("font-weight", "bold");
          let controlArea = _addControlArea(th, table);
          controlArea.style.height = table.rows[0].offsetHeight;
          th.append(controlArea);
          header.append(th);
        }
        for (let a = 0; a < columlength - keylength; a++) {
          let th = $("<th/>").html("");
          th.css("position", "relative").height();
          let controlArea = _addControlArea(th, table);
          controlArea.style.height = table.rows[0].offsetHeight;
          th.append(controlArea);
          header.append(th);
        }
        $(tbody).prepend(header);
      } else if (self.options.mode == "vertical") {
        let trs = $(table).find("tbody").find("tr");
        for (let a = 0; a < keylength; a++) {
          let th = $("<th/>").html(keys[a]);
          th.css("position", "relative");
          th.css("text-align", "center");
          th.css("font-weight", "bold");
          let controlArea = _addControlArea(th, table);
          controlArea.style.height = table.rows[0].offsetHeight;
          th.append(controlArea);
          $(trs[a]).prepend(th);
        }
      }
    }

    function _addControlArea(content, table) {
      let controlArea = document.createElement("div");
      controlArea.setAttribute("class", "control");
      controlArea.style.top = 0;
      controlArea.style.right = 0;
      controlArea.style.position = "absolute";
      // change later, magic number for now
      controlArea.style.height = "25px";
      controlArea.style.width = "5px";
      _setListeners(controlArea, table);
      return controlArea;
    }

    function _createTable(options) {
      let table = document.createElement("TABLE");
      table.setAttribute("id", options.id);
      let des = document.getElementById(options.location);
      table.setAttribute("class", options.style);
      des.appendChild(table);
      let row = options.row;
      let col = options.col;
      if (options.type == "readonly") {
        for (let a = 0; a < row; a++) {
          let singlerow = document.getElementById(options.id).insertRow(a);
          for (let b = 0; b < col; b++) {
            let content = singlerow.insertCell(b);
            let textarea = document.createTextNode("");
            content.appendChild(textarea);
            let controlArea = _addControlArea(content, table);
            content.appendChild(controlArea);
            content.style.position = "relative";
          }
        }
      } else {
        for (let a = 0; a < row; a++) {
          let singlerow = document.getElementById(options.id).insertRow(a);
          for (let b = 0; b < col; b++) {
            let content = singlerow.insertCell(b);
            let input = document.createElement("INPUT");
            input.setAttribute("type", "text");
            input.setAttribute("size", "auto");
            content.appendChild(input);
            let controlArea = _addControlArea(content, table);
            content.appendChild(controlArea);
            content.style.position = "relative";
          }
        }
      }
    }

    function _setListeners(div, table) {
      let pageX, curCell, curCellWidth, columnNo;
      div.addEventListener("mousedown", function (e) {
        curCell = e.target.parentElement;
        columnNo = curCell.cellIndex + 1;
        pageX = e.pageX;
        curCellWidth = curCell.offsetWidth;
      });

      document.addEventListener("mousemove", function (e) {
        if (curCell) {
          let diffX = e.pageX - pageX;
          if (curCellWidth + diffX > 1) {
            $("tr > td:nth-child(" + columnNo + ")", table).each(function () {
              this.style.width = curCellWidth + diffX + "px";
            });
          }
        }
      });

      document.addEventListener("mouseup", function (e) {
        curCell = undefined;
        pageX = undefined;
        curCellWidth = undefined;
      });
    }

    return self;
  }

  global.sheet3 = global.sheet3 || sheet3;
})(window, window.document, $);

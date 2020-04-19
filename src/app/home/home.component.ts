import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public csv: string
  public json: string
  private array: string[] = ['']

  constructor() { }

  csvToJson() {
    this.array = this.csv.split("\n")
    console.log(this.array)
    try {
      var headerAux = this.array[0]
      var jsonData
      var header
      header = headerAux.split(",")
      jsonData = "["
      if (this.array.length > 1) {
        for (let index = 1; index < this.array.length; index++) {
          var data = this.array[index].split(",")
          jsonData += "{"
          for (let index = 0; index < header.length; index++) {
            jsonData += header[index] + ":"
            jsonData += data[index] && data[index] != '' ? data[index] : "null"
            jsonData += index == header.length - 1 ? "" : ","
          }
          jsonData += index == this.array.length - 1 ? "}" : "},"
        }
      } else {
        jsonData += "{"
        for (let index = 0; index < header.length; index++) {
          jsonData += header[index] + ":" + "null"
          jsonData += index == header.length - 1 ? "" : ","
        }
        jsonData += "}"
      }

      jsonData += "]"
      this.json = jsonData
    } catch (error) {
      console.log(error)
      alert("CSV Format Invalid")
    }
  }

  jsonToCsv() {
    console.log(this.json)
  }


  ngOnInit(): void {
  }

}

# csv-to-json

**Tier:** 1-Beginner

In the [JSON2CSV](./JSON2CSV-App.md) application you translated JSON 
to a comma separated value (CSV) format. The objective of CSV2JSON is to 
reverse that process by converting a block of CSV text to JSON.

In CSV2JSON you'll start by copying the JSON2CSV app you created and then
modify it to allow CSV to JSON conversion as well the JSON to CSV conversion
that's already present. In additional to providing a useful function, this
challenge will also give you practice in modifying existing applications to
add new functionality.

### Constraints ###

- Read the user stories below carefully. Some of the functionality created
for JSON2CSV will need to be modified.
- You may not use any libraries or packages designed to perform this type of
conversion.
- Nested JSON structures are not supported.

## User Stories

-   [ ] User can paste CSV syntax into a text box
-   [ ] User can click a 'Convert to JSON' button to validate the CSV text box and convert it to JSON
-   [ ] User can see an warning message if the CSV text box is empty or if it doesn't contain valid CSV
-   [ ] User can see the converted CSV in the JSON text box

### Stories already implemented in JSON2CSV 
-   [ ] User can paste JSON syntax into a text box
-   [ ] User can click a 'Convert to CSV' button to validate the JSON text box and convert it to CSV
-   [ ] User can see an warning message if the JSON text box is empty or if it doesn't contain valid JSON
-   [ ] User can click a 'Clear' button to clear the contents of both the JSON and CSV text boxes.

Flatacuties Character Viewer
Overview
This application provides an interface to view characters from the "Flatacuties" series. Each character is displayed in a bar at the top, and clicking on a character's name displays their detailed information, including an image and a vote count. Users can also add votes to a character and reset their votes.

The application consists of an HTML page, accompanying CSS for styling, and a JavaScript file for functionality.

Structure
HTML
The main components are:

A logo div showing the application's name.
A character-bar div where character names are displayed.
A characterInfo div where detailed information about a selected character is shown, including their name, image, and vote count. A form allows users to input and submit new votes for the character. Additionally, a reset button allows users to reset the vote count.
CSS
The stylesheet provides a consistent look and feel for the application. Some highlights include:

A common font family used across the app.
A centered logo with a specific background color.
A character bar that displays character names spaced apart.
Styling for the submit button and input elements.
Defined height and width for character images.
JavaScript
The JavaScript adds interactivity and dynamic data loading to the application:

fetchCharacters(): Fetches character data from a server and displays their names on the character bar.
displayCharacterNames(characters): Takes an array of characters and adds their names to the character bar. Also adds a click event listener to each name, so detailed information is displayed when clicked.
displayCharacterDetails(character): Displays detailed information about a character, including their name, image, and vote count.
Event listeners are added to the vote form and reset button, allowing users to add votes and reset votes, respectively.
How to Use
Load the HTML page in a browser.
Character names will be displayed in the bar at the top. Click on a character's name to view their detailed information.
In the detailed view, you can see the character's name, image, and current vote count.
To add votes, input the desired number in the "Enter Votes" field and click "Add Votes".
To reset a character's votes to zero, click the "Reset Votes" button.
Future Enhancements (based on commented-out code)
There's a section in the HTML for adding new characters, which is currently commented out. In future iterations, this can be uncommented, and additional JavaScript functions can be added to support the functionality.

Dependencies
Make sure the server running at http://localhost:3000/characters is live and returns the character data in the expected format for the app to work correctly.

Conclusion
The Flatacuties Character Viewer provides an interactive way to view and interact with characters from the series. With its clean interface and straightforward functionality, users can easily see character details, add votes, and reset vote counts. Future enhancements may include the ability to add new characters to the series.
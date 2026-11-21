# Input
The user enters data in the AddCountry tab. There are two text fields: one for the
country name (for example, "USA") and one for its currency (for example, "Dollar").
The user then taps the "Add Country" button.

# Process
App.js stores the list of countries with the useState hook and defines an addCountry
function. The bottom tab navigator passes addCountry to the AddCountry screen and the
countries list to the Countries screen as props. In AddCountry, each TextInput updates
its own state. When the button is pressed, the submit function checks that both fields
are filled in; if not, it shows an alert. Otherwise, it creates a country object with
a unique id, name, and currency, calls addCountry to add it to the list, clears the
form, and navigates to the Countries tab.

# Output
The Countries tab re-renders with the updated list. If no countries have been added,
it shows "No saved countries!". Otherwise, it displays each country's name with its
currency underneath in a scrollable list.

![No saved countries](assets/images/fig1_empty.png)
![AddCountry - USA](assets/images/fig2_add1.png)
![Countries - USA](assets/images/fig3_list1.png)
![AddCountry - Korea](assets/images/fig4_add2.png)
![Countries - USA and Korea](assets/images/fig5_list2.png)
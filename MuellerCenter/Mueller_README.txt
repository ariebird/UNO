Mueller Center Reservation System README
Team 1
Danielle DiTomasso, Megan Wampner, Loures Frempong, and Ariella Russin
http://localhost/MuellerCenter

	All the required files to run the Mueller Center Reservation System 
are contained in the Mueller Center folder. The file must be uploaded to a 
remote server (XAMPP) in order for the Log In, Check In/Out, and Reservation 
functions to work. The Check In/Out and Reservation functions, however are not 
fully functional.  An input reservation will not affect the json user database 
will not be carried between sessions, and the Check In/Out Function does not 
keep track of if user is in or out of gym and population numbers will not carry 
over between sessions.

	The web application contains two main functions: making a reservation 
for the Mueller Center and checking in/out of the Mueller Center.  Both of 
these functions are linked to the home page, file name index.html.  When 
clicking on either "Currently at Gym?" or "Make a Reservation" will bring you 
to a Log In page which will prompt you to input your RCSID and password.  
There are three sample users whose log in credentials are contained within a 
JSON file named database.json in the resources folder. The sample users are 
further described in the final project write up.  

	Inputs like a reservation or check in/out will remain in place during 
the session on the web application but will reset once the browser is closed.
Bitcoin is a very difficult protocol to work with, especially for a newcomer to cryptocurrencies, so this challenge is to create an interface for a new, much simpler online currency, the Jobcoin.  Jobcoins have “addresses” that are just arbitrary strings, and there’s no mining or transaction signing - anyone can create jobcoins out of thin air, or send them to an address.

 

You can access the Jobcoin management interface and APIs at

https://jobcoin.gemini.com/tightly

 

There you will create a new Jobcoin address with an amount. Play around with the API interface. Create lots of Jobcoins and send to people (Or random strings ;) !

 

Once created, your challenge will be to make a 2 page website that allows users to send Jobcoins and check the balance.  

 

Requirements:

Create 2 screens
Sign in page (using any created address from the management tool)
Send page, sending to any address (any string of text)
Track the balance of a Jobcoin address
Ability to send Jobcoin to an address and track those transactions and the resulting balance
Display transaction history visually (chart, line graph etc)
High res UX screens: 

https://www.dropbox.com/sh/pa9zzvziwxk9ldy/AAC1ODEdsE-z_2FCMkE70_m2a?dl=0

 

Screen 1

UI Elements
Sign in widget
Assumptions
No user/pass needed.  You ‘sign in’ by typing in an address created in the management tool and submitting.
 

Screen 2

UI Elements
Balance of the entered jobcoin address
Send widget
Data vis (graph)
Sign out (back to the home/previous screen)
Assumptions
User can send to any address (any string of text)
This will be tracked via the graph and balance



Again, we just want to get a sense for how you write code and solve problems. This is not meant to win any design awards. ;)  Please use any framework, libraries, or tools that you think are appropriate to solve the problem.  And don’t hesitate to ask any questions. Expect this to take 3-5 hours to complete.

 

The graph is meant to show the account balance over time however you’d like.  Make sure it updates when a new transaction is made.

 

Lastly, the wires are a guideline. Feel free to change the layout and add some style as you see fit. Just make sure all the elements are present in the final product.

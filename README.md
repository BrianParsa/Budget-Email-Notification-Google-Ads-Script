# Google Ads Automated Email For Budget Management
Use Google ads scripts &amp; Google Apps Script to send an automated email to your desired email address if the client has spent a certain ammount of their budget.

# Preparations 
Create a label under your MCC account and name it "Follwo Up Sent"
Each account must have these 3 labels applied to it if you want this script to work on it:
<ul>
  <li>budget: {ammount of budget without currency code} For example: budget: 500</li>
    <li>email: {the email address to which you want to send the notification email} For example: email: me@brianparsa.com</li>
      <li>starting date: {the starting date for the budget in yyyyMMdd format} For example: starting date: 20240419</li>
  <br>
  Image below shows an example of the labels required for this method to work
  <br><br>
      <img src="labels required for sub accounts.png">

</ul>

# How to Use
<ul>
  <li>Create "Follow Up Sent" label</li>
  <li>Apply the three labels mentioned above to at least one of your accounts</li>
  <li>Copy the content from Google ads script file and add it as a script to your MCC account.</li>
  <li>Specify your timezone</li>
  <li>Modify subject or body of your email</li>
  <li>Change "reply to" email address</li>
  <li>Preview and run the Google ads script(You can schedule the script to run on a daily or hourly basis based on your needs)</li>
</ul>

# Limitations & Important Notes
<ul>
  <li>The script uses labels and not the actual budget allocated to each account, so use at your own risk.
</li>
  <li>This method only works for MCC accounts and not for the individual Google ads accounts.
</li>
  <li>This method uses your own gmail address to send the emails so make sure you're not spamming.
</li>
  <li>
    This method has a daily quota of <b>100 emails per day</b> for gmail users and 1500 emails per day for Google Workspace users.
  </li>
  <li>Make sure the label "Follow Up Sent" is available on your MCC otherwise the email is sent each time you run the script.
</li>
  <li>This method only works on accounts with less than 1000 sub-accounts.
</li>
  <li>You can contact me@brianparsa.com to report bugs or issues.
</li>

</ul>


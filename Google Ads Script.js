    function main() {
     
    
      // Format date into yyyyMMdd for example 20240123
      // Use your account timezone, you can find it here https://developers.google.com/google-ads/api/data/codes-formats#timezone-ids
      
      const formattedDate = Utilities.formatDate(new Date(), 'Pacific/Auckland', 'yyyyMMdd');

      const accountLabelSelector = AdsManagerApp.accountLabels().withCondition("Name CONTAINS 'budget'");
      const labelIterator = accountLabelSelector.get();

      while (labelIterator.hasNext()) {

         var accountIterator = labelIterator.next().accounts().get();

        while (accountIterator.hasNext()) {

        var account = accountIterator.next();

            //Use the label "budget: " to specify your budget, For example "budget: 1000"
         var budgetAmount = account.labels().withCondition("Name CONTAINS 'budget'").get().next().getName().slice(8);
            // Use the label "email: " to specify client's email address for example "email: me@brianparsa.com"
         var emailAddressDes = account.labels().withCondition("Name CONTAINS 'email'").get().next().getName().slice(7)
            // Use the label "starting date: " to specify the starting time for your budget, for example "starting date: 20240421" for 21/04/2024
         var startingDate = account.labels().withCondition("Name CONTAINS 'starting date'").get().next().getName().slice(15);


        const totalCost = account.getStatsFor(startingDate, formattedDate).getCost();
        const percentageSpent = totalCost / budgetAmount;
        const accountName = account.getName();

          //Currently set to 0.9 for 90%, You may change it for other percentages
          
        if (percentageSpent >= 0.9 && account.labels().withCondition("Name CONTAINS 'Follow Up'").get().totalNumEntities() < 1) {
          
            var percentage = (Math.round((percentageSpent) * 100)) ;

           //Modify your email subject here
            var emailSubject= ("شما "+percentage +"% شارژ اکانت گوگل ادز "+ accountName+" را استفاده کرده اید");
          
          //Modify your email body here
            var emailBody = ("لطفا برای شارژ مجدد اکانت با ما تماس بگیرید");

          //Change the email address to email you want them to reply to
            MailApp.sendEmail(emailAddressDes, "noreply@example.com", emailSubject, emailBody);
          
          //Make sure you have already created the label "Follow Up Sent"
          
          account.applyLabel("Follow Up Sent"); // This label is applied to make sure the email is only sent once
          
          Logger.log("Follow Up Email Sent to "+accountName);
        } else {
          Logger.log("Budget Left is More Than 90% or Email Has Been Sent Before");
        }
      }
    }
}
      
   
      

                           
      





  
  
  

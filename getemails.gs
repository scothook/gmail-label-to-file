function getEmails() {
   var label = GmailApp.getUserLabelByName('Band Emails');
   var threads = label.getThreads();
   var messages = GmailApp.getMessagesForThreads(threads);
   
   // Create a new text file in your Google Drive
   var file = DriveApp.createFile('Band Emails.doc', '');
 
   for (var i = 0; i < 10; i++) { //messages.length
     var email = messages[i][0];
 
     var subject = email.getSubject();
     var sender = email.getFrom();
     var recipients = email.getTo() + ', ' + email.getCc();
     var dateTime = email.getDate();
     var body = email.getPlainBody();
     
     var text = 'From: ' + sender + '\n' +
                'To/Cc: ' + recipients + '\n' +
                'Subject: ' + subject + '\n' +
                'Date/Time: ' + dateTime + '\n' +
                'Body\n\n: ' + body + '\f';
     
     var fileContents = file.getBlob().getDataAsString();
     file.setContent(fileContents + text);
   }
 }
